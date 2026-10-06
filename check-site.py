"""Run against the local Next.js server: python check-site.py [base URL]."""
from html.parser import HTMLParser
from urllib.request import urlopen
from urllib.parse import quote, urlparse
from urllib.error import HTTPError
import sys, subprocess
from pathlib import Path

base = sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:3000'

class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.ids, self.links, self.fields, self.meta = set(), [], {}, {}
        self.selected = []
        self.feed(urlopen(base + path).read().decode())

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            assert attrs['id'] not in self.ids, attrs['id']
            self.ids.add(attrs['id'])
        if tag == 'a': self.links.append(attrs.get('href', ''))
        if tag == 'meta': self.meta[attrs.get('property', attrs.get('name', ''))] = attrs.get('content', '')
        if tag in ('input', 'select', 'textarea'): self.fields[attrs['name']] = attrs
        if tag == 'option' and 'selected' in attrs: self.selected.append(attrs.get('value'))

home = Page('/')
assert {'home', 'about', 'tours', 'destinations', 'booking', 'reviews', 'contact', 'inquiry'} <= home.ids
assert {'/tours', '/destinations', '/#about', '/#contact', '/#inquiry'} <= set(home.links)
assert home.fields['email']['type'] == 'email' and 'required' in home.fields['email']
assert home.fields['guests']['min'] == '1' and 'required' in home.fields['guests']
assert 'https://m.me/LUPADTAphilippines' in home.links
assert 'Dumaguete City' in home.meta['description']
assert 'opengraph-image' in home.meta['og:image']
image_path = urlparse(home.meta['og:image'])
assert urlopen(base + image_path.path + '?' + image_path.query).headers['Content-Type'].startswith('image/png')
catalog = Page('/tours')
packages = {link for link in catalog.links if link.startswith('/tours/')}
assert len(packages) == 14, packages
pages = [home, catalog, Page('/inquire'), Page('/destinations')]
for path in sorted(packages):
    page = Page(path)
    assert 'inquiry' in page.ids and len(page.selected) == 1 and page.selected[0]
    flyers = [link for link in page.links if link.startswith('/packages/')]
    assert len(flyers) == 1
    assert urlopen(base + quote(flyers[0], safe='/%')).headers['Content-Type'].startswith('image/')
    pages.append(page)
expected = {
    'dumaguete': {'dumaguete-getaway', 'dumaguete-siquijor', 'siquijor-dumaguete', 'dumaguete-siquijor-bohol', 'dumaguete-valencia-tour', 'pamplona-tour'},
    'siquijor': {'siquijor-island-tour', 'dumaguete-siquijor', 'siquijor-dumaguete', 'dumaguete-siquijor-bohol', 'siquijor-day-tour'},
    'south-cebu': {'south-cebu-adventure', 'cebu-oslob-day-tour', 'moalboal-day-tour'},
    'apo-island': {'apo-island-tour'},
}
for slug, included in expected.items():
    page = Page('/destinations/' + slug)
    assert {link.removeprefix('/tours/') for link in page.links if link.startswith('/tours/')} == included, slug
    pages.append(page)
for page in pages:
    for link in page.links:
        if link.startswith('#'): assert link[1:] in page.ids, link
        if link.startswith('/#'): assert link[2:] in home.ids, link
for path in ('/tours/not-a-package', '/destinations/not-a-destination'):
    try: urlopen(base + path)
    except HTTPError as error: assert error.code == 404
    else: raise AssertionError('Expected 404: ' + path)
function = (Path(__file__).parent / 'app/inquiry-form.tsx').read_text().split('export function inquiryEmail', 1)[1].split('\n}\n', 1)[0]
script = 'function inquiryEmail' + function.replace('data: FormData', 'data') + '\n}\n' + '''
const assert = require('node:assert/strict');
const data = new FormData();
data.set('name', 'Ana & José'); data.set('package', 'Dumaguete & Valencia');
data.set('message', 'Pickup?\\nTwo guests & luggage.');
const url = new URL(inquiryEmail(data));
assert.equal(url.searchParams.get('subject'), 'Travel inquiry: Dumaguete & Valencia');
assert.ok(url.searchParams.get('body').includes('Ana & José'));
assert.ok(url.searchParams.get('body').includes('Pickup?\\nTwo guests & luggage.'));
data.set('package', '');
assert.equal(new URL(inquiryEmail(data)).searchParams.get('subject'), 'Travel inquiry: Help me choose a trip');
'''
subprocess.run(['node', '-e', script], check=True)
print('PASS: 14 packages, combined-destination filters, Messenger, sharing metadata, form fields, email encoding, anchors, flyers, and 404s')

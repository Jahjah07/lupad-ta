from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlparse
root=Path(__file__).parent/'dist'
class Check(HTMLParser):
    def __init__(self): super().__init__(); self.ids=set(); self.refs=[]; self.tours=[]
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if 'id' in a:self.ids.add(a['id'])
        if 'data-tour' in a:self.tours.append(a['data-tour'])
        for key in ('src','href'):
            if key in a:self.refs.append(a[key])
c=Check();c.feed((root/'index.html').read_text(encoding='utf-8-sig'))
for ref in c.refs:
    if ref.startswith('#'): assert ref[1:] in c.ids,ref
    elif not urlparse(ref).scheme: assert (root/ref).is_file(),ref
assert c.tours==['Dumaguete–Valencia','Manjuyod','Apo Island','Siquijor']
assert 'assets/siquijor.jpg' in (root/'style.css').read_text(encoding='utf-8-sig')
assert (root/'assets/siquijor.jpg').stat().st_size>1000
print('PASS: four tour controls, section links, local assets and hero image')

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { tours, flyerHref } from '../../tours-data';
import InquiryForm from '../../inquiry-form';

export function generateStaticParams() { return tours.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return { title: `${tours.find(item => item.slug === slug)?.title || 'Tour not found'} | LUPAD-Ta` };
}
export default async function TourDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour = tours.find(item => item.slug === slug);
  if (!tour) notFound();
  return <main id="main" className="container detail-page"><p className="breadcrumb"><Link href="/">Home</Link> / <Link href="/tours">Tours</Link> / {tour.title}</p>
    <div className="detail-heading"><div><p className="eyebrow">{tour.duration.toUpperCase()}</p><h1>{tour.title}</h1><p>{tour.copy}</p></div><div className="detail-price"><span>Advertised flyer rate</span><strong>{tour.price}</strong><p>{tour.condition}</p><a className="button gold" href="#inquiry">Inquire About This Trip →</a></div></div>
    <div className="detail-grid"><div className="package-content">
      <section><h2>Your Itinerary</h2><p>{tour.highlights.length ? 'Explore these advertised tour highlights. Our team will confirm the day-by-day order and timing for your travel dates.' : 'Your day-by-day schedule will be confirmed with our team. Explore the advertised package in the original flyer below.'}</p>{tour.highlights.length > 0 && <ul className="highlight-list">{tour.highlights.map(stop => <li key={stop}>{stop}</li>)}</ul>}</section>
      <div className="inclusions-grid"><section><h2>Inclusions</h2>{tour.inclusions.length ? <ul>{tour.inclusions.map(item => <li key={item}>{item}</li>)}</ul> : <p>See the package flyer below, then confirm inclusions with our team.</p>}</section><section><h2>Exclusions & Extras</h2>{tour.exclusions.length ? <ul>{tour.exclusions.map(item => <li key={item}>{item}</li>)}</ul> : <p>Ask our team to confirm fees, activities, meals, and transfers for your selected package.</p>}</section></div>
      <section><h2>Pickup & Travel Details</h2><p>Share your hotel, arrival location, and travel dates when you inquire. Pickup point, time, transport, and any ferry arrangements will be confirmed in your itinerary.</p><p>{tour.extra}</p></section>
      <section><h2>Package Gallery & Original Flyer</h2><p>View the supplied flyer for the advertised experiences and package information.</p><a className="flyer-link" href={flyerHref(tour.flyer)} target="_blank" rel="noopener noreferrer"><Image src={flyerHref(tour.flyer)} alt={`Original ${tour.title} flyer with advertised rates and package details`} width={1254} height={1254} sizes="(max-width: 767px) 100vw, 720px" /><span>Open full-size flyer ↗</span></a></section>
      <section className="package-faq"><h2>Before You Book</h2><details><summary>Is the advertised price the final price?</summary><p>Rates shown are from the supplied flyer. Request a current quote for your dates, group size, and selected activities before booking.</p></details><details><summary>Can we customize our itinerary?</summary><p>Tell us your preferred stops and pace. Our team will discuss available options and any changes to the quotation.</p></details><details><summary>How do I confirm a booking?</summary><p>Start with an inquiry. Our team will confirm availability, the itinerary, payment arrangements, and cancellation terms before you book.</p></details></section>
    </div><aside><InquiryForm selected={tour.title} /><p className="tour-note"><Link href="/tours">← Explore more packages</Link></p></aside></div>
  </main>;
}

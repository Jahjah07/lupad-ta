import { DestinationCards } from '../components';
import Link from 'next/link';
import { messenger } from '../tours-data';
export const metadata = { title: 'Philippine Destinations & Island Trips | LUPAD-Ta', description: 'Explore Dumaguete, Siquijor, South Cebu and Apo Island. Find tour packages by destination and plan your Philippine island trip with LUPAD-Ta.' };
export default function Destinations() {
  return <main id="main" className="container listing-page"><div className="section-heading"><p className="eyebrow">FIND YOUR ISLAND STORY</p><h1>Explore Our Destinations</h1><p>Start with a place you’d love to visit, then discover the packages that take you there.</p></div><DestinationCards detailed /><section className="destination-help"><div><h2>Still Choosing Your Next Escape?</h2><p>Tell us your dates, interests, and who’s traveling. Our Dumaguete-based team can help you choose a route.</p></div><div className="contact-actions"><Link className="button gold" href="/#inquiry">Plan My Trip →</Link><a className="email-link" href={messenger} target="_blank" rel="noopener noreferrer">Message on Facebook ↗</a></div></section></main>;
}

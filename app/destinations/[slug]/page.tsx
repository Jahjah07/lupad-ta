import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { destinations, tours } from '../../tours-data';
import { TourCards } from '../../components';
export function generateStaticParams() { return destinations.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return { title: `${destinations.find(place => place.slug === slug)?.name || 'Destination not found'} | LUPAD-Ta` };
}
export default async function Destination({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const place = destinations.find(item => item.slug === slug);
  if (!place) notFound();
  return <main id="main" className="container listing-page"><p className="breadcrumb"><Link href="/destinations">Destinations</Link> / {place.name}</p><div className="destination-intro"><div><p className="eyebrow">EXPLORE THE PHILIPPINES</p><h1>{place.name}</h1><p>{place.copy}</p><Link className="button gold" href="/#inquiry">Plan a Trip Here →</Link></div><div className="destination-hero"><Image src={place.image} alt={place.alt} fill sizes="(max-width: 767px) 100vw, 600px" /></div></div><div className="section-heading"><h2>Packages for {place.name}</h2></div><TourCards items={tours.filter(tour => tour.destination === slug || (slug === 'siquijor' && tour.slug.includes('siquijor')))} /></main>;
}

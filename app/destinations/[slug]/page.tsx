import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { destinations, toursForDestination } from '../../tours-data';
import { TourCards } from '../../components';
export function generateStaticParams() { return destinations.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const place = destinations.find(place => place.slug === slug);
  return { title: `${place?.name || 'Destination not found'} Tour Packages | LUPAD-Ta`, description: place?.copy };
}
export default async function Destination({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const place = destinations.find(item => item.slug === slug);
  if (!place) notFound();
  return <main id="main" className="container listing-page"><p className="breadcrumb"><Link href="/destinations">Destinations</Link> / {place.name}</p><div className="destination-intro"><div><p className="eyebrow">{place.themes.toUpperCase()}</p><h1>{place.name}</h1><p>{place.copy}</p><Link className="button gold" href="/#inquiry">Plan a Trip Here →</Link></div><div className="destination-hero"><Image src={place.image} alt={place.alt} fill sizes="(max-width: 767px) 100vw, 600px" /></div></div><div className="section-heading"><h2>Packages for {place.name}</h2><p>Browse single-destination escapes and combined trips that include {place.name}.</p></div><TourCards items={toursForDestination(slug)} /></main>;
}

import Image from 'next/image';
import Link from 'next/link';
import { destinations, tours, facebook } from './tours-data';

export function TourCards({ items = tours }: { items?: typeof tours }) {
  return <div className="tour-grid">{items.map(tour => <article className="tour-card" key={tour.slug}>
    <div className={`tour-photo ${tour.image.startsWith('/packages') ? 'flyer-photo' : ''}`}><Image src={tour.image} alt={tour.alt} fill sizes="(max-width: 767px) 100vw, 400px" /></div>
    <div className="tour-body"><p className="tour-kicker">{tour.duration}</p><h3>{tour.title}</h3><p>{tour.copy}</p><div className="card-price"><strong>{tour.price}</strong><span>{tour.condition}</span></div><Link className="button gold" href={`/tours/${tour.slug}`}>View Package <span aria-hidden="true">→</span></Link></div>
  </article>)}</div>;
}

export function DestinationCards() {
  return <div className="destination-grid">{destinations.map(place => <Link className="destination-card" href={`/destinations/${place.slug}`} key={place.slug}><Image src={place.image} alt={place.alt} fill sizes="(max-width: 639px) 100vw, 300px" /><span>{place.name}<span aria-hidden="true">→</span></span></Link>)}</div>;
}

export function Footer() {
  return <footer><div className="container footer-main"><Link className="footer-brand" href="/">LUPAD-Ta <span>TRAVEL & TOURS</span></Link><p>Explore more. Make memories.</p><a href={facebook} target="_blank" rel="noopener noreferrer">Facebook <span aria-hidden="true">↗</span></a></div><div className="container footer-bottom"><span>© 2026 LUPAD-Ta Travel & Tours</span><details><summary>Photo credits</summary><p>Siquijor beach: <a href="https://commons.wikimedia.org/wiki/File:Coco_Grove_Beach_Resort,_Siquijor,_Philippines_(8160857823).jpg">Renzelle Mae Abasolo</a>, <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>. Other package photography and flyers supplied by LUPAD-Ta.</p></details></div></footer>;
}

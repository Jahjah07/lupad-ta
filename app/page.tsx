import Image from 'next/image';
import Link from 'next/link';
import { TourCards, DestinationCards } from './components';
import InquiryForm from './inquiry-form';
import Testimonials from './testimonials';
import { tours, facebook, messenger } from './tours-data';

export default function Home() {
  return <main id="main" className="home-page">
    <section className="hero" id="home"><Image className="hero-background" src="/background_image/Boat_Background.jpg" alt="Traditional tour boat on turquoise water beside tropical limestone cliffs" fill unoptimized preload />
      <div className="container hero-inner">
        <div className="hero-content">
          <p className="eyebrow">DUMAGUETE & BEYOND</p>
          <h1>Less routine.<br /><span>More island time.</span></h1>
          <p>Explore Dumaguete, Siquijor, Apo Island, and Cebu with LUPAD-Ta, your local team for personally planned getaways.</p>
          <div className="hero-actions">
            <a className="button blue" href="#tours">Explore Tour Packages <span aria-hidden="true">→</span></a>
            <a className="button outline" href="#inquiry">Plan My Getaway <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
    </section>
    <div className="container trust-strip"><div><span className="trust-mark" aria-hidden="true">↗</span><p><strong>Business Credentials</strong><a href="#credentials">Documents & affiliations</a></p></div><div><span className="trust-mark" aria-hidden="true">⌖</span><p><strong>Dumaguete City</strong><a href="#contact">Find us on Perdices Street</a></p></div><div><span className="trust-mark" aria-hidden="true">↗</span><p><a className="trust-phone" href="tel:+639654554319">0965 455 4319</a><span>Call our local team</span></p></div><div><span className="trust-mark" aria-hidden="true">↗</span><p><a className="trust-phone" href={facebook} target="_blank" rel="noopener noreferrer">LUPAD-Ta on Facebook</a><span>Trips, photos & updates</span></p></div></div>
    <div className="scenic-content">
    <section className="about-section" id="about"><div className="container"><div className="section-heading"><p className="eyebrow">WHY CHOOSE US</p><h2>Why Travel With LUPAD-Ta?</h2><p>A local team, a personal approach, and a plan made around you.</p></div><div className="benefit-grid">{[
      ['Local expertise', 'A Dumaguete-based team to help you discover the city and nearby islands.'], ['Clear travel plans', 'Discuss your route, current rates, and inclusions before confirming.'], ['Customized itineraries', 'Choose a trip around your interests, schedule, and group.'], ['Friendly support', 'Talk directly with our team from your first inquiry through planning.'],
    ].map(([title, copy]) => <div key={title}><h3>{title}</h3><p>{copy}</p></div>)}</div></div></section>
    <section className="tours-section" id="tours"><div className="container"><div className="section-heading"><p className="eyebrow">FEATURED TOUR PACKAGES</p><h2>Find Your Next Island Adventure</h2><p>From a city getaway to an island stay, start with a trip that speaks to you.</p></div><TourCards items={tours.slice(0, 3)} /><p className="tour-note">More islands. More ways to explore. <Link href="/tours">Browse all {tours.length} packages →</Link></p></div></section>
    <section className="destinations-section" id="destinations"><div className="container"><div className="section-heading"><p className="eyebrow">POPULAR DESTINATIONS</p><h2>Explore Top Destinations</h2><p>Discover Dumaguete, nearby islands, and adventures across South Cebu.</p></div><DestinationCards /><p className="tour-note"><Link href="/destinations">Explore our destinations →</Link></p></div></section>
    <section className="steps-section" id="booking"><div className="container"><div className="section-heading"><p className="eyebrow">HOW IT WORKS</p><h2>Your Next Trip in 3 Simple Steps</h2><p>We’ll help you turn an idea into a travel plan.</p></div><ol className="steps-grid">{[
      ['Inquire', 'Tell us where you’d like to go, your dates, and who’s coming along.'], ['Plan', 'Review your itinerary, quote, inclusions, and booking arrangements with us.'], ['Travel', 'With your trip confirmed, get ready to make your next island memories.'],
    ].map(([title, copy], i) => <li key={title}><span className="step-number" aria-hidden="true">{i + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol></div></section>
    <section className="reviews-section" id="reviews">
      <div className="container">
        <div className="review-inner">
          <div><p className="eyebrow">TRAVELER STORIES</p><h2>Island Days, Shared Stories</h2><p>Get a feel for our trips through travel photos, updates, and traveler feedback on our Facebook page.</p><a className="button outline" href={facebook} target="_blank" rel="noopener noreferrer">See Trips & Traveler Feedback <span aria-hidden="true">↗</span></a></div>
          <div className="review-photo"><Image src="/assets/siquijor-tour.jpg" alt="A traveler enjoying the waterfalls in Siquijor" fill sizes="(max-width: 767px) 100vw, 480px" /></div>
        </div>
        <Testimonials />
        <p className="testimonial-note">These sample quotes illustrate the layout. Verified traveler testimonials will replace them.</p>
      </div>
    </section>
    </div>
    <section className="credentials-section" id="credentials">
      <div className="container">
        <div className="section-heading"><h2>Know Who You’re Traveling With</h2><p>Business documents and affiliations, with their current publication status.</p></div>
        <div className="credentials-inner">
          <dl className="credentials-list">
            <div><dt>Business registration<span>DTI / SEC</span></dt><dd><strong className="pending-status">Pending upload</strong><p>Registered business name, certificate number, and public certificate copy to follow.</p><a href="https://bnrs.dti.gov.ph/search" target="_blank" rel="noopener noreferrer">DTI business-name search <span aria-hidden="true">↗</span></a></dd></div>
            <div><dt>Business permit<span>Local government</span></dt><dd><strong className="pending-status">Pending upload</strong><p>Current permit copy and validity dates to follow.</p></dd></div>
            <div><dt>Tourism accreditation<span>Department of Tourism</span></dt><dd><strong className="pending-status">Pending confirmation</strong><p>Accreditation status and supporting details have not yet been published.</p><a href="https://accreditation.tourism.gov.ph/help" target="_blank" rel="noopener noreferrer">About DOT accreditation <span aria-hidden="true">↗</span></a></dd></div>
          </dl>
          <div className="partners-panel"><h3>Partners & Affiliations</h3><p>Confirmed hotel, transport, and organization partners will be listed here.</p><strong className="pending-status">Details pending confirmation</strong><p>Partner names, logos, and membership documents will be added once provided.</p></div>
        </div>
      </div>
    </section>
    <section className="contact-section" id="contact"><div className="container contact-inner"><div className="contact-heading"><p className="eyebrow">READY FOR YOUR NEXT ADVENTURE?</p><h2>Let’s Plan Your Trip!</h2><p>Share your travel plans. We’ll help turn them into your next island story.</p><div className="contact-actions"><a className="button blue" href={messenger} target="_blank" rel="noopener noreferrer">Message us on Facebook ↗</a><a className="email-link" href="tel:+639654554319">Call 0965 455 4319</a></div><div className="contact-info"><a className="contact-email" href="mailto:lupadta.traveltours@gmail.com">lupadta.traveltours@gmail.com</a><address>Room 211, 3rd Floor, Plaza Doña Milagros Bldg.<br />Perdices Street, Poblacion 3, Dumaguete City<br />Negros Oriental 6200</address><a className="map-link" href="https://www.google.com/maps/search/?api=1&query=LUPAD-Ta%20Travel%20%26%20Tours%20Perdices%20Street%20Dumaguete" target="_blank" rel="noopener noreferrer">Find us on Google Maps ↗</a></div></div><InquiryForm /></div></section>
  </main>;
}

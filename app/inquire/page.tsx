import InquiryForm from '../inquiry-form';
export const metadata = { title: 'Plan Your Trip | LUPAD-Ta Travel & Tours' };
export default function Inquire() {
  return <main id="main" className="container listing-page inquire-page"><div className="section-heading"><p className="eyebrow">YOUR NEXT ISLAND STORY</p><h1>Let’s Plan Your Trip</h1><p>Share your dates, group size, and the places you’d love to see.</p></div><InquiryForm /></main>;
}

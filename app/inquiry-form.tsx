'use client';

import { useState } from 'react';
import { tours, messenger } from './tours-data';

export function inquiryEmail(data: FormData) {
  const packageName = data.get('package') || 'Help me choose a trip';
  const body = `Hello LUPAD-Ta!\n\nName: ${data.get('name')}\nEmail: ${data.get('email')}\nPackage: ${packageName}\nTravel date: ${data.get('date') || 'Flexible'}\nGuests: ${data.get('guests')}\nMessage: ${data.get('message') || ''}\n\nPlease share your current rates, availability, and inclusions.`;
  return 'mailto:lupadta.traveltours@gmail.com?subject=' + encodeURIComponent(`Travel inquiry: ${packageName}`) + '&body=' + encodeURIComponent(body);
}

export default function InquiryForm({ selected = '' }: { selected?: string }) {
  const [prepared, setPrepared] = useState(false);
  return <form className="inquiry-form" id="inquiry" onSubmit={event => { event.preventDefault(); window.location.href = inquiryEmail(new FormData(event.currentTarget)); setPrepared(true); }}>
    <p className="eyebrow">LET’S MAKE A PLAN</p><h3>Tell us about your trip</h3>
    <a className="button blue inquiry-messenger" href={messenger} target="_blank" rel="noopener noreferrer">Message on Facebook <span aria-hidden="true">↗</span></a><p className="form-help inquiry-choice">Prefer email? Share your trip details below.</p>
    <div className="form-grid"><label>Your name<input name="name" autoComplete="name" required maxLength={100} /></label><label>Email address<input name="email" type="email" autoComplete="email" required maxLength={254} /></label>
    <label className="form-wide">Tour package<select name="package" defaultValue={selected}><option value="">Help me choose a trip</option>{tours.map(tour => <option key={tour.slug} value={tour.title}>{tour.title}</option>)}</select></label>
    <label>Travel date<input name="date" type="date" /></label><label>Number of guests<input name="guests" type="number" min="1" max="1000" required defaultValue="2" /></label><label className="form-wide">Anything else?<textarea name="message" rows={3} maxLength={1500} placeholder="Pickup location, interests, or special requests" /></label></div>
    <button className="button gold" type="submit">Prepare Email Inquiry <span aria-hidden="true">→</span></button>
    <p className="form-help">Opens your email app with your trip details. Send the email there to complete your inquiry.</p>
    {prepared && <p role="status" className="form-help">Your email draft is ready to open. If no email app opens, <a href={messenger} target="_blank" rel="noopener noreferrer">message us on Facebook</a> or call <a href="tel:+639654554319">0965 455 4319</a>.</p>}
  </form>;
}

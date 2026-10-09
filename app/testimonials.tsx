'use client';

import { useState } from 'react';

const testimonials = [
  ['Siquijor getaway', 'Beach stops, waterfalls, and time to slow down. It’s the kind of island break we’d happily do again.'],
  ['Dumaguete & Valencia', 'We loved having time for both sightseeing and relaxing. Exploring Dumaguete and Valencia made our short getaway feel full of discoveries.'],
  ['Apo Island escape', 'A day on the water was exactly what we needed. Apo Island gave us a fresh perspective and plenty of moments to remember.'],
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  function move(direction: number) {
    setActive(current => (current + direction + testimonials.length) % testimonials.length);
  }

  return <div className="testimonial-carousel" role="region" aria-roledescription="carousel" aria-label="Sample traveler testimonials" onKeyDown={event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      move(event.key === 'ArrowLeft' ? -1 : 1);
    }
  }}>
    <div className="testimonial-stage" id="testimonial-stage">
      {testimonials.map(([trip, quote], index) => <figure
        className={`sample-testimonial ${index === active ? 'active' : index === (active + 1) % testimonials.length ? 'next' : 'previous'}`}
        key={trip}
        role="group"
        aria-roledescription="slide"
        aria-label={`${index + 1} of ${testimonials.length}`}
        aria-hidden={index !== active}
      >
        <figcaption><span>Sample testimonial</span><strong>{trip}</strong></figcaption>
        <blockquote><p>“{quote}”</p></blockquote>
      </figure>)}
    </div>
    <div className="testimonial-controls">
      <button type="button" aria-label="Previous testimonial" aria-controls="testimonial-stage" onClick={() => move(-1)}><span aria-hidden="true">←</span></button>
      <p role="status" aria-atomic="true">{active + 1} of {testimonials.length}<span className="testimonial-current">{testimonials[active][0]}</span></p>
      <button type="button" aria-label="Next testimonial" aria-controls="testimonial-stage" onClick={() => move(1)}><span aria-hidden="true">→</span></button>
    </div>
  </div>;
}

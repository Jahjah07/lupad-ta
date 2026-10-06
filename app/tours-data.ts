const stayInclusions = ['Hotel accommodation', 'Hotel breakfast (subject to hotel complimentary breakfast)', 'Pick-up and drop-off services', 'Professional tour guide', 'Photographer assistance'];
const stayExclusions = ['Entrance fees', 'Meals and personal expenses', 'Round-trip airfare / ferry tickets', 'Hotel security deposit'];

export const tours = [
  { slug: 'dumaguete-getaway', title: 'Dumaguete Getaway', destination: 'dumaguete', duration: '3 days / 2 nights', image: '/assets/valencia.jpg', alt: 'Pools and gardens in Valencia', flyer: '3D2N Exclusive Dumaguete Tour Package.jpg', copy: 'City discoveries, mountain air, and a little time to unwind in Valencia.', price: '₱4,899', condition: 'per person, for 8-15 guests', highlights: ['Tierra Alta', 'Sulfur Vent', 'Pulangbato Falls', 'Red Rock Hot Spring', 'Mango Ranch', 'Forest Camp', 'Chada Valencia Signage', 'Dove Feeding Experience', 'Cata-al Museum'], inclusions: stayInclusions, exclusions: stayExclusions, extra: 'The flyer lists ₱1,300 per person for an additional night.' },
  { slug: 'siquijor-island-tour', title: 'Siquijor Island Tour', destination: 'siquijor', duration: '3 days / 2 nights', image: '/assets/siquijor-tour.jpg', alt: 'Turquoise cascades in Siquijor', flyer: '3D2N Siquijor Tour Package.jpg', copy: 'Beach days, cascading waterfalls, and the easy rhythm of island life.', price: '₱6,899', condition: 'per person, for 8-15 guests', highlights: ['St. Francis of Assisi Church', 'I Love Siquijor Signage', 'Paliton Beach', 'Pitogo Cliff', 'Old Enchanted Balete Tree & Fish Spa', 'St. Isidore Labrador Church', 'Old Lazi Convent', 'Cambugahay Falls', 'Man-made Molave Forest', 'Salagdoong Beach', 'Bu Café & Restaurant'], inclusions: [...stayInclusions, 'Round-trip ferry tickets (Dumaguete-Siquijor-Dumaguete)'], exclusions: ['Entrance fees', 'Meals and personal expenses', 'Round-trip airfare', 'Hotel security deposit'], extra: 'The flyer lists ₱1,300 per person for an additional night. Ask about the optional mountain tour and its separate fees.' },
  { slug: 'south-cebu-adventure', title: 'South Cebu Adventure', destination: 'south-cebu', duration: 'Confirm trip duration', image: '/packages/Cebu Round South Tour.jpg', alt: 'LUPAD-Ta Cebu Round South tour flyer', flyer: 'Cebu Round South Tour.jpg', copy: 'Explore the south of Cebu, from Kawasan Falls to the waters of Moalboal.', price: '₱1,999', condition: 'advertised starting rate per person; confirm group requirements', highlights: ['Whale sharks', 'Sumilon Island (boat transfer costs extra)', 'Kawasan Falls', 'Full-course canyoneering (extra charge)', 'Moalboal snorkeling at Talisay Point (extra charge)', 'Sardine run', 'Sea turtles', 'Carcar pasalubong'], inclusions: ['Van transportation', 'Fuel', 'Driver', 'Environmental fees', 'Parking fees', 'Toll fees'], exclusions: ['Sumilon Island boat transfer: ₱500 per guest', 'Full-course canyoneering: ₱2,100 per guest', 'Moalboal snorkeling: ₱500 per guest'], extra: 'Confirm which activities, entrance fees, meals, and transfers are included in your quotation.' },
  ...[
    ['dumaguete-siquijor', 'Dumaguete & Siquijor', 'dumaguete', '4 days / 3 nights', '4D3N Dumaguete - Siquijor Tour Package.jpg'],
    ['cebu-bohol', 'Cebu & Bohol Countryside', 'cebu-bohol', '4 days / 3 nights', '4D3N Exclusive Cebu - Bohol Country Side Tour.jpg'],
    ['siquijor-dumaguete', 'Siquijor & Dumaguete', 'siquijor', '4 days / 3 nights', '4D3N Siquijor + Dumaguete Tour.jpg'],
    ['dumaguete-siquijor-bohol', 'Dumaguete, Siquijor & Bohol', 'dumaguete', '5 days / 4 nights', '5D4N Dumaguete - Siquijor - Bohol Tour Package.jpg'],
    ['apo-island-tour', 'Apo Island Tour', 'apo-island', 'Confirm trip duration', 'Apo Island Tour.jpg'],
    ['cebu-city-tour', 'Cebu City Tour', 'cebu-city', 'Confirm trip duration', 'Cebu City Tour.jpg'],
    ['cebu-oslob-day-tour', 'Cebu Oslob Day Tour', 'south-cebu', 'Day tour', 'Cebu Oslob Day Tour.jpg'],
    ['dumaguete-valencia-tour', 'Dumaguete & Valencia Tour', 'dumaguete', 'Confirm trip duration', 'Dumaguete - Valencia Tour.jpg'],
    ['moalboal-day-tour', 'Moalboal Day Tour', 'south-cebu', 'Day tour', 'Moalboal Day Tour.jpg'],
    ['pamplona-tour', 'Pamplona Tour', 'dumaguete', 'Confirm trip duration', 'Pamplona Tour.jpg'],
    ['siquijor-day-tour', 'Siquijor Tour', 'siquijor', 'Confirm trip duration', 'Siquijor Tour.jpg'],
  ].map(([slug, title, destination, duration, flyer]) => ({ slug, title, destination, duration, flyer, image: `/packages/${flyer}`, alt: `LUPAD-Ta ${title} flyer`, copy: 'Explore the original package flyer and ask our team for a plan for your dates and group.', price: 'Request a quote', condition: 'Current rates and availability confirmed by our team', highlights: [] as string[], inclusions: [] as string[], exclusions: [] as string[], extra: 'See the original flyer below for advertised package details. Ask our team to confirm your itinerary and inclusions before booking.' })),
];

export const destinations = [
  { slug: 'dumaguete', name: 'Dumaguete', image: '/assets/valencia.jpg', alt: 'A resort in the Valencia countryside', copy: 'Make Dumaguete your base for city discoveries and the green hills of Valencia.' },
  { slug: 'siquijor', name: 'Siquijor', image: '/assets/siquijor.jpg', alt: 'Palm-lined beach in Siquijor', copy: 'Slow down by the coast and explore the island’s waterfalls, beaches, and heritage stops.' },
  { slug: 'south-cebu', name: 'South Cebu', image: '/packages/Cebu Round South Tour.jpg', alt: 'South Cebu tour experiences on the LUPAD-Ta flyer', copy: 'Plan a trip around Kawasan Falls, Moalboal, and the south of Cebu.' },
  { slug: 'apo-island', name: 'Apo Island', image: '/assets/apo.png', alt: 'A sea turtle over the reef at Apo Island', copy: 'Discover a marine island escape. Ask about boat arrangements and snorkeling conditions.' },
];

export const facebook = 'https://www.facebook.com/LUPADTAphilippines/';
export const flyerHref = (flyer: string) => `/packages/${encodeURIComponent(flyer)}`;

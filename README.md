# LUPAD-Ta Travel & Tours

Next.js App Router with TypeScript and a tropical travel funnel inspired by the supplied design reference. The responsive site includes 14 package pages, destination listings, a shared header, inquiry forms, and system dark mode.

## Local development

Run npm install, then npm run dev. Open http://localhost:3000.

Edit app/page.tsx for the homepage, app/tours-data.ts for package content, and app/globals.css for styles.
Tour flyers are in public/packages, destination photography in public/assets, and the header logo in public/logo.png.
Header Tours and Destinations open listing pages; About and Contact link to homepage sections, and Inquire Now jumps to the inquiry form.
The form opens a prefilled email draft in the visitor's email app; visitors must send it there. Facebook and phone are also available.
Messenger is available directly from the inquiry form and contact section. Direct form delivery, lead storage, and verified on-page reviews are pending a service and review source.
Destination listings include descriptions and counts, and combined packages appear under every destination they include.
Set NEXT_PUBLIC_SITE_URL to your deployed URL for social sharing metadata. On Vercel, VERCEL_PROJECT_PRODUCTION_URL is used automatically when no explicit URL is configured. Local development falls back to localhost.
Featured package details are transcribed from the supplied flyers. Remaining packages display their original flyer and request a current quote. Day-by-day itineraries and pickup times require team confirmation.
The PNG logo and Valencia, Apo Island, and Siquijor tour images were copied
from Websites/Lupad-Ta, preserving the source project. The locally hosted Geist font in app/fonts is copied from the installed Next.js bundle.

## Verification

Run npm run typecheck and npm run build.
Run npm start after building to serve the production app locally.
Run python check-site.py against the running server to check routes, anchors, flyer assets, and inquiry controls.

The original static website is retained in dist as a migration reference.
The Sites manifest still points to that original static snapshot; this setup
is for local Next.js development. Next.js hosting can be configured separately.


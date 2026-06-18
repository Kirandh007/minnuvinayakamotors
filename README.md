# Sri Vinayaka Motors Full-Stack Website

Professional full-stack concept for Sri Vinayaka Motors, designed as a unique city bus operator platform rather than a taxi-app clone.

## Business Details

- Name: Sri Vinayaka Motors
- Proprietor: Harish M N
- Experience: 35+ years
- Locations: Davangere and Bhadravathi
- Email: vinayakamotors@gmail.com
- Mobile: 99027 99999
- Tagline: We care your journey

## Product Direction

The UI is built around a premium bus-operator identity:

- Public journey desk for route search and ticket issue
- Route boards for routes 9, 15, 18 and 27
- QR ticket and QR pass office
- Rider self-service web portal
- Admin command center for staff and proprietor
- Photo system using all supplied bus/proprietor images in purposeful sections

## Folder Structure

```txt
sri-vinayaka-motors-concept/
  index.html
  package.json
  README.md
  public/
    assets/
      fleet-lineup-cutout.png
      fleet-yard-blue-sky.png
      proprietor-since-1980.png
      commitment-banner.png
      trust-collage.png
      golden-trust-collage.jpeg
  src/
    main.jsx
    styles.css
  server/
    data.js
    index.js
  docs/
    schema.sql
    backend-sample.js
    flutter-sample.dart
```

## Run Website

```bash
npm install
npm run dev
```

Website URL:

```txt
http://127.0.0.1:5173
```

## Run Backend API

```bash
npm run server
```

Default API URL:

```txt
http://127.0.0.1:4000
```

If port 4000 is busy on Windows PowerShell:

```powershell
$env:PORT="4001"; node server/index.js
```

## Verified API Endpoints

- `GET /api/health`
- `GET /api/routes`
- `POST /api/trips/search`
- `POST /api/bookings`
- `GET /api/bookings/:id/qr`
- `POST /api/passes`
- `GET /api/admin/dashboard`

## Recommended Production Stack

- Website: React.js / Next.js
- Backend: Node.js / Express or NestJS
- Database: PostgreSQL
- Maps: Google Maps API
- Payments: Razorpay and UPI
- QR: signed ticket/pass payloads with conductor/admin scan validation
- Future mobile app: Flutter rider and conductor apps

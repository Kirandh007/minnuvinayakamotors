import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const routes = [9, 15, 18, 27];

function App() {
  const [location, setLocation] = useState('Location not detected');

  function detectLocation() {
    if (!navigator.geolocation) {
      setLocation('Location permission is not available in this browser');
      return;
    }
    setLocation('Requesting location permission...');
    navigator.geolocation.getCurrentPosition(
      (position) => setLocation(`Detected: ${position.coords.latitude.toFixed(5)}, ${position.coords.longitude.toFixed(5)}`),
      () => setLocation('Please allow location permission to auto detect pickup')
    );
  }

  return (
    <>
      <a className="urgent" href="#book"><span>HURRY UP</span><strong>BOOK NOW</strong><span>Rs. 19 per trip / Rs. 79 unlimited day pass</span></a>
      <header>
        <div className="logo">🚌</div>
        <strong>Sri Vinayaka Motors</strong>
        <a href="#book">Book now</a>
      </header>
      <main>
        <section className="hero">
          <div>
            <p className="eyebrow">Davangere and Bhadravathi City Bus Operator</p>
            <h1>SRI VINAYAKA MOTORS</h1>
            <h2>BOOK TICKETS NOW</h2>
            <a className="primary" href="#book">Book now</a>
          </div>
        </section>
        <section id="book" className="booking">
          <div className="panel">
            <h2>Book Your City Bus Ticket</h2>
            <div className="prices"><b>Per trip Rs. 19</b><b>Unlimited day pass Rs. 79</b></div>
            <button onClick={detectLocation}>Detect my location</button>
            <p>{location}</p>
            <label>From<input readOnly value={location.startsWith('Detected') ? `My location - ${location.replace('Detected: ', '')}` : 'Auto detect customer location'} /></label>
            <label>To<select><option>City Bus Stand</option><option>Railway Station</option><option>Kunduvada Lake</option><option>Paper Town</option></select></label>
            <label>Route<select>{routes.map((r) => <option key={r}>Route {r}</option>)}</select></label>
            <button className="primary">Book now - Trip Rs. 19</button>
            <button className="secondary">Buy unlimited day pass Rs. 79</button>
          </div>
          <div className="map"><span>Live Route Map</span><strong>Routes 9 / 15 / 18 / 27</strong></div>
        </section>
        <section className="cards">
          <article><h3>35+ Years Experience</h3><p>Trusted city bus service by Harish M N.</p></article>
          <article><h3>QR Ticket</h3><p>Digital ticket and pass validation ready.</p></article>
          <article><h3>Contact</h3><p>99027 99999 / vinayakamotors@gmail.com</p></article>
        </section>
      </main>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);

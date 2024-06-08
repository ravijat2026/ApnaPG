import React , {useState} from "react";
import './Hero.css'
import hero_image from '../assets/hero_image.png'

function Hero(){

    const [price, setPrice] = useState('');
    const [accommodationType, setAccommodationType] = useState('');
    const [location, setLocation] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Perform search logic here using the price, accommodationType, and location state values
      console.log('Search submitted with values:', { price, accommodationType, location });
    };

    return(
        <>
        <div className="hero">
            <div className="hero-left">
                <h2>Say Goodbye to shady middlemen.</h2>
                <div>
                <div className="hand-icon">
                    <p>Find Your</p>
                </div>
                <p>Perfect</p>
                <p>PG / Hostel</p>
                </div>
                <div className="hero-button">
                    <div>Get Started</div>
                </div>
            </div>
            <div className="hero-right">
                <img src= {hero_image} alt = ""/>
            </div>
        </div>

<section className="search">
<div className="container">
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="price">Price</label>
      <input type="text" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
    </div>
    <div className="form-group">
      <label htmlFor="accommodationType">Accommodation Type</label>
      <select id="accommodationType" value={accommodationType} onChange={(e) => setAccommodationType(e.target.value)}>
        <option value="">Select type</option>
        <option value="pg">PG</option>
        <option value="hostel">Hostel</option>
        <option value="flat">Flat</option>
      </select>
    </div>
    <div className="form-group">
      <label htmlFor="location">Location</label>
      <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} />
    </div>
    <button type="submit" className="btn">Search</button>
  </form>
</div>
</section>

</>
    )
}

export default Hero
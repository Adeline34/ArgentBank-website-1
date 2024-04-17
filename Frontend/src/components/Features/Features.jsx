import React from 'react';
import iconsData from '../../data/db.json';
import "./Features.css"

export default function Features() {
    const iconsDataArray = iconsData
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {iconsData.map((icon, index) => (
        <div className="feature-item" key={index}>
          <img src={icon.imgsrc} alt={icon.alt} className="feature-icon" />
          <h3 className="feature-item-title">{icon.title}</h3>
          <p>{icon.paragraph}</p>
        </div>
      ))}
    </section>
  );
}

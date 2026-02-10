import React from 'react';
import { CloudRain, Sun, ThermometerSnowflake, Wind, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const WeatherGuideSection = () => {
    return (
        <section style={{ padding: '80px 24px', backgroundColor: '#E8F5E9' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', color: 'var(--color-primary-dark)' }}>
                        Farming by Weather
                    </h2>
                    <p style={{ color: '#666', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                        Success in organic farming starts with understanding your local climate. Explore our seeds categorized by weather conditions.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px', marginBottom: '48px' }}>

                    {/* Rainy / Humid */}
                    <div className="weather-card" style={{ backgroundColor: 'white', padding: '32px', borderRadius: 'var(--radius-lg)', borderTop: '4px solid var(--color-primary)' }}>
                        <div style={{ marginBottom: '24px' }}><CloudRain size={48} color="var(--color-primary)" /></div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Rainy & Humid</h3>
                        <p style={{ color: '#666' }}>Best for water-loving crops like Rice, Leafy Greens, and Gourds.</p>
                    </div>

                    {/* Hot / Dry */}
                    <div className="weather-card" style={{ backgroundColor: 'white', padding: '32px', borderRadius: 'var(--radius-lg)', borderTop: '4px solid #FFD54F' }}>
                        <div style={{ marginBottom: '24px' }}><Sun size={48} color="#FFD54F" /></div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Hot & Dry</h3>
                        <p style={{ color: '#666' }}>Ideal for heat-tolerant varieties like Okra, Brinjal, and Peppers.</p>
                    </div>

                    {/* Cold / Winter */}
                    <div className="weather-card" style={{ backgroundColor: 'white', padding: '32px', borderRadius: 'var(--radius-lg)', borderTop: '4px solid #4FC3F7' }}>
                        <div style={{ marginBottom: '24px' }}><ThermometerSnowflake size={48} color="#4FC3F7" /></div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Cold & Winter</h3>
                        <p style={{ color: '#666' }}>Perfect for root vegetables like Carrots, Radish, and winter Greens.</p>
                    </div>

                </div>

                <div style={{ textAlign: 'center' }}>
                    <Link to="/weather-guide" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                        Explore Full Weather Guide <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default WeatherGuideSection;

import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { useWeather } from '../context/WeatherContext';
import heroImage from '../assets/myimage/hero-section-image.svg';
import indiaOrganic from '../assets/myimage/India_organic.jpg';
import controlImo from '../assets/myimage/control-imo.jpg';
import demeter from '../assets/myimage/demeter.png';

const Hero = ({ onOpenLocationModal }) => {
    const { location } = useWeather();

    return (
        <section style={{
            position: 'relative',
            padding: '80px 0',
            backgroundColor: '#F3F4F6', // Light gray background
            overflow: 'hidden'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '64px',
                    alignItems: 'center'
                }}>
                    {/* Left Side: Content */}
                    <div className="animate-fade-in" style={{ zIndex: 2 }}>
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            backgroundColor: 'white',
                            padding: '8px 16px',
                            borderRadius: 'var(--radius-full)',
                            marginBottom: '24px',
                            boxShadow: 'var(--shadow-sm)',
                            border: '1px solid #E5E7EB'
                        }}>
                            <MapPin size={16} color="var(--color-primary)" />
                            <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-text-muted)' }}>
                                {location ? `${location.name} • ${location.weather}` : 'Localization Inactive'}
                            </span>
                        </div>

                        <h1 style={{
                            fontSize: '3.5rem',
                            marginBottom: '24px',
                            color: 'var(--color-text)',
                            lineHeight: 1.1,
                            letterSpacing: '-1px'
                        }}>
                            Grow Smarter with <br />
                            <span style={{ color: 'var(--color-primary)' }}>Climate-Based</span> Farming
                        </h1>

                        <p style={{
                            fontSize: '1.25rem',
                            marginBottom: '40px',
                            color: 'var(--color-text-muted)',
                            maxWidth: '540px',
                            lineHeight: 1.6
                        }}>
                            Discover organic seeds perfectly matched to your local weather and soil conditions. Validated by science, trusted by farmers.
                        </p>

                        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                            {!location ? (
                                <button
                                    onClick={onOpenLocationModal}
                                    className="btn btn-primary"
                                    style={{ padding: '16px 32px', fontSize: '1.1rem', boxShadow: '0 4px 14px rgba(46, 125, 50, 0.3)' }}
                                >
                                    Get Local Recommendations <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                                </button>
                            ) : (
                                <button
                                    className="btn btn-primary"
                                    style={{ padding: '16px 32px', fontSize: '1.1rem', boxShadow: '0 4px 14px rgba(46, 125, 50, 0.3)' }}
                                >
                                    Explore Your Seeds <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                                </button>
                            )}

                            <button className="btn" style={{
                                backgroundColor: 'white',
                                border: '1px solid #E5E7EB',
                                color: 'var(--color-text)',
                                padding: '16px 32px',
                                fontSize: '1.1rem'
                            }}>
                                View Catalog
                            </button>
                        </div>

                        {/* Certified By Logos */}
                        <div style={{ marginTop: '48px', borderTop: '1px solid #E5E7EB', paddingTop: '32px' }}>
                            <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                Certified By
                            </p>
                            <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
                                <img src={indiaOrganic} alt="India Organic" style={{ height: '50px', objectFit: 'contain', mixBlendMode: 'multiply' }} />
                                <img src={controlImo} alt="Control Union" style={{ height: '50px', objectFit: 'contain', mixBlendMode: 'multiply' }} />
                                <img src={demeter} alt="Demeter" style={{ height: '40px', objectFit: 'contain', mixBlendMode: 'multiply' }} />
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Image */}
                    <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                        <img
                            src={heroImage}
                            alt="Climate-Based Farming"
                            style={{
                                width: '100%',
                                maxWidth: '600px',
                                height: 'auto',
                                objectFit: 'contain'
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Mobile Responsiveness Style */}
            <style>{`
                @media (max-width: 968px) {
                    .container > div {
                        grid-template-columns: 1fr !important;
                        gap: 40px !important;
                    }
                    h1 {
                        font-size: 2.5rem !important;
                    }
                    .hero-image-container {
                        height: 400px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;

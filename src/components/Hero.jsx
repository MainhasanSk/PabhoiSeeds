import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { useWeather } from '../context/WeatherContext';

const Hero = ({ onOpenLocationModal }) => {
    const { location, weatherType } = useWeather();

    // Dynamic background based on weather if detected, else generic
    const bgImage = weatherType
        ? (weatherType.id === 'rainy_humid' ? 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&q=80&w=1920' :
            weatherType.id === 'hot_dry' ? 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1920' :
                'https://images.unsplash.com/photo-1625246333195-09d9b63bd48a?auto=format&fit=crop&q=80&w=1920')
        : 'https://images.unsplash.com/photo-1492496913980-501308b7eb83?auto=format&fit=crop&q=80&w=1920';

    return (
        <section style={{
            position: 'relative',
            height: '600px',
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            overflow: 'hidden'
        }}>
            {/* Background with Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url('${bgImage}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: -1
            }} />
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dark overlay
                zIndex: -1
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ maxWidth: '600px' }} className="animate-fade-in">
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(4px)',
                        padding: '8px 16px',
                        borderRadius: 'var(--radius-full)',
                        marginBottom: '24px',
                        border: '1px solid rgba(255, 255, 255, 0.3)'
                    }}>
                        <MapPin size={16} color="#81C784" />
                        <span style={{ fontSize: '14px', fontWeight: 600 }}>
                            {location ? `${location.name} • ${location.weather}` : 'Localization Inactive'}
                        </span>
                    </div>

                    <h1 style={{
                        fontSize: '3.5rem',
                        marginBottom: '16px',
                        color: 'white',
                        lineHeight: 1.1,
                        textShadow: '0 2px 10px rgba(0,0,0,0.3)'
                    }}>
                        Grow Smarter with <span style={{ color: '#81C784' }}>Climate-Based</span> Recommendations
                    </h1>

                    <p style={{
                        fontSize: '1.25rem',
                        marginBottom: '32px',
                        opacity: 0.9,
                        maxWidth: '500px'
                    }}>
                        Discover organic seeds perfectly matched to your local weather and soil conditions for maximum yield.
                    </p>

                    {!location ? (
                        <button
                            onClick={onOpenLocationModal}
                            className="btn btn-primary"
                            style={{ padding: '16px 32px', fontSize: '1.1rem' }}
                        >
                            Get Local Recommendations <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                        </button>
                    ) : (
                        <button
                            className="btn btn-primary"
                            style={{ padding: '16px 32px', fontSize: '1.1rem', backgroundColor: 'white', color: 'var(--color-primary)' }}
                        >
                            Explore Your Seeds <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                        </button>
                    )}

                    {/* Stats / Trust Badges */}
                    <div style={{ marginTop: '48px', display: 'flex', gap: '48px' }}>
                        <div>
                            <div style={{ fontSize: '24px', fontWeight: 'bold' }}>100%</div>
                            <div style={{ fontSize: '14px', opacity: 0.8 }}>Organic</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '24px', fontWeight: 'bold' }}>50+</div>
                            <div style={{ fontSize: '14px', opacity: 0.8 }}>Varieties</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '24px', fontWeight: 'bold' }}>24/7</div>
                            <div style={{ fontSize: '14px', opacity: 0.8 }}>Expert Support</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

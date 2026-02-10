import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

import aboutUsImage from '../assets/myimage/about-us.avif';

const AboutUs = () => {
    return (
        <>
            <Header />
            <main>
                {/* Hero */}
                <div style={{
                    position: 'relative',
                    height: '400px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    textAlign: 'center',
                    backgroundColor: '#2E7D32'
                }}>
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url("https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1920")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: 0.4
                    }}></div>
                    <div style={{ position: 'relative', zIndex: 1, padding: '24px' }}>
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '16px', fontWeight: 700 }}>About Pabhoi Seeds</h1>
                        <p style={{ fontSize: '1.4rem', maxWidth: '600px', margin: '0 auto' }}>Cultivating a greener future for India, one seed at a time.</p>
                    </div>
                </div>

                <div className="container" style={{ padding: '80px 24px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '24px', color: 'var(--color-primary-dark)' }}>Our Story</h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#555', marginBottom: '24px' }}>
                                Founded in the fertile lands of Assam, Pabhoi Organic Seeds began with a simple mission: to preserve indigenous seed varieties and make organic farming accessible to everyone.
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#555' }}>
                                What started as a small community initiative has grown into a movement. We work directly with local farmers to research, test, and multiply traditional seeds that are resilient to changing climate conditions.
                            </p>
                        </div>
                        <div>
                            <img
                                src={aboutUsImage}
                                alt="Our Story - Pabhoi Seeds"
                                style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}
                            />
                        </div>
                    </div>

                    <div style={{ marginTop: '96px', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '48px', color: 'var(--color-primary-dark)' }}>Why Choose Us?</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
                            <div className="feature-card" style={{ padding: '32px', backgroundColor: '#F1F8E9', borderRadius: 'var(--radius-lg)' }}>
                                <h3 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>100% Organic</h3>
                                <p style={{ color: '#666' }}>Certified organic seeds free from GMOs and chemical treatments.</p>
                            </div>
                            <div className="feature-card" style={{ padding: '32px', backgroundColor: '#FFF3E0', borderRadius: 'var(--radius-lg)' }}>
                                <h3 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>Climate Resilient</h3>
                                <p style={{ color: '#666' }}>Varieties selected specifically for Indian weather patterns.</p>
                            </div>
                            <div className="feature-card" style={{ padding: '32px', backgroundColor: '#E1F5FE', borderRadius: 'var(--radius-lg)' }}>
                                <h3 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>Farmer Support</h3>
                                <p style={{ color: '#666' }}>We provide growing guides and expert advice for every seed.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <style>{`
                    .feature-card {
                        transition: all 0.3s ease;
                        cursor: default;
                    }
                    .feature-card:hover {
                        transform: translateY(-8px);
                        box-shadow: 0 10px 20px rgba(0,0,0,0.1);
                    }
                `}</style>
            </main>
            <Footer />
            <Chatbot />
        </>
    );
};

export default AboutUs;

import React from 'react';
import { WEATHER_TYPES } from '../data/weather';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import { CloudRain, Sun, ThermometerSnowflake, Wind } from 'lucide-react';

const WeatherGuide = () => {

    const getWeatherIcon = (id) => {
        switch (id) {
            case 'RAINY_HUMID': return <CloudRain size={48} color="var(--color-primary)" />;
            case 'HOT_DRY': return <Sun size={48} color="#FFD54F" />; // Custom yellow
            case 'COLD': return <ThermometerSnowflake size={48} color="#4FC3F7" />; // Custom blue
            default: return <Wind size={48} />;
        }
    };

    return (
        <>
            <Header />
            <main style={{ paddingBottom: '64px' }}>
                <div style={{ backgroundColor: '#E8F5E9', padding: '64px 24px', textAlign: 'center' }}>
                    <h1 style={{ fontSize: '3rem', color: 'var(--color-primary-dark)', marginBottom: '16px' }}>Farming by Weather</h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', color: '#555' }}>
                        Success in organic farming starts with understanding your local climate. At Pabhoi Seeds, we categorize our seeds to help you plant with confidence.
                    </p>
                </div>

                <div className="container" style={{ padding: '64px 24px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>
                        {Object.values(WEATHER_TYPES).map(type => (
                            <div key={type.id} style={{
                                backgroundColor: 'white',
                                borderRadius: 'var(--radius-lg)',
                                padding: '32px',
                                boxShadow: 'var(--shadow-md)',
                                borderTop: `4px solid var(--color-primary)`
                            }}>
                                <div style={{ marginBottom: '24px' }}>{getWeatherIcon(type.id)}</div>
                                <h2 style={{ fontSize: '1.8rem', marginBottom: '12px' }}>{type.label}</h2>
                                <p style={{ color: '#666', lineHeight: 1.6, marginBottom: '24px' }}>
                                    {type.description || "Ideal condition for specific crops that thrive in this environment. Ensure proper soil preparation and water management."}
                                    {/* Note: Added placeholder description if not in data */}
                                </p>

                                <h4 style={{ fontSize: '1rem', marginBottom: '8px', color: 'var(--color-primary-dark)' }}>Key Characteristics:</h4>
                                <ul style={{ listStyle: 'none', padding: 0, color: '#555' }}>
                                    <li style={{ padding: '4px 0', borderBottom: '1px solid #eee' }}>• Temperature Range: varies</li>
                                    <li style={{ padding: '4px 0', borderBottom: '1px solid #eee' }}>• Water Needs: {type.id === 'HOT_DRY' ? 'High' : type.id === 'RAINY_HUMID' ? 'Low' : 'Moderate'}</li>
                                    <li style={{ padding: '4px 0' }}>• Soil Prep: {type.id === 'RAINY_HUMID' ? 'Improving drainage' : 'Mulching for moisture'}</li>
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '80px', backgroundColor: '#FFF3E0', padding: '48px', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '16px', color: '#E65100' }}>Not sure about your weather?</h2>
                        <p style={{ marginBottom: '32px', fontSize: '1.1rem' }}>Our AI-powered location detector on the Home page can help identify the best seeds for your current conditions.</p>
                        <a href="/" className="btn btn-primary">Go to Home</a>
                    </div>
                </div>
            </main>
            <Footer />
            <Chatbot />
        </>
    );
};

export default WeatherGuide;

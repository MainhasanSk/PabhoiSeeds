import React, { useState, useEffect } from 'react';
import { SEEDS } from '../data/seeds';
import { WEATHER_TYPES } from '../data/weather';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import { useWeather } from '../context/WeatherContext';
import { MapPin, Filter, X, CloudRain } from 'lucide-react';
import LocationModal from '../components/LocationModal';

const Seeds = () => {
    const { weatherType, detectLocation, location } = useWeather();
    const [selectedWeather, setSelectedWeather] = useState('ALL');
    const [selectedSeason, setSelectedSeason] = useState('ALL');
    const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);

    // Extract unique seasons for filter
    const seasons = ['ALL', ...new Set(SEEDS.map(s => s.season))];

    // Effect to update filter when weather is detected
    useEffect(() => {
        if (weatherType) {
            setSelectedWeather(weatherType.id);
        }
    }, [weatherType]);

    const filteredSeeds = SEEDS.filter(seed => {
        const matchWeather = selectedWeather === 'ALL' || seed.suitableWeather.includes(selectedWeather);
        const matchSeason = selectedSeason === 'ALL' || seed.season === selectedSeason;
        return matchWeather && matchSeason;
    });

    const handleWeatherButtonClick = () => {
        if (!location) {
            setIsLocationModalOpen(true);
        } else {
            // If location is already present, just ensure the filter is set
            if (weatherType) setSelectedWeather(weatherType.id);
        }
    };

    return (
        <>
            <Header />
            <main style={{ paddingBottom: '64px', minHeight: '80vh', backgroundColor: '#FAFAF5' }}>
                <div className="container" style={{ padding: '32px 24px' }}>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
                        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-primary-dark)', margin: 0 }}>Seed Catalog</h1>

                        <button
                            onClick={handleWeatherButtonClick}
                            className="btn"
                            style={{
                                display: 'flex',
                                gap: '8px',
                                alignItems: 'center',
                                backgroundColor: 'var(--color-primary)',
                                color: 'white',
                                padding: '10px 20px',
                                boxShadow: '0 4px 12px rgba(46, 125, 50, 0.2)'
                            }}
                        >
                            <CloudRain size={20} />
                            {weatherType ? `Showing for: ${weatherType.label}` : 'Seeds for your Weather'}
                        </button>
                    </div>

                    <div style={{ display: 'flex', gap: '32px', flexDirection: 'column' }}>

                        {/* Main Layout: Filters on Left (Desktop) or Top (Mobile) - but always visible now */}
                        <div style={{ display: 'flex', gap: '32px', flexDirection: 'row', flexWrap: 'wrap' }}>

                            {/* Always Visible Filters Sidebar */}
                            <div className="animate-fade-in" style={{
                                minWidth: '260px',
                                backgroundColor: 'white',
                                padding: '24px',
                                borderRadius: 'var(--radius-lg)',
                                boxShadow: 'var(--shadow-sm)',
                                height: 'fit-content',
                                border: '1px solid #E5E7EB',
                                flex: '1 0 250px' // Grow, shrink, basis
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', paddingBottom: '16px', borderBottom: '1px solid #eee' }}>
                                    <Filter size={20} color="var(--color-primary)" />
                                    <h3 style={{ fontSize: '1.2rem', margin: 0 }}>Filters</h3>
                                </div>

                                <div style={{ marginBottom: '24px' }}>
                                    <h4 style={{ marginBottom: '12px', fontSize: '1rem', fontWeight: 600, color: 'var(--color-text)' }}>Suitable Weather</h4>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                        <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '14px' }}>
                                            <input
                                                type="radio"
                                                name="weather"
                                                style={{ accentColor: 'var(--color-primary)' }}
                                                checked={selectedWeather === 'ALL'}
                                                onChange={() => setSelectedWeather('ALL')}
                                            /> All Weathers
                                        </label>
                                        {Object.values(WEATHER_TYPES).map(type => (
                                            <label key={type.id} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '14px' }}>
                                                <input
                                                    type="radio"
                                                    name="weather"
                                                    style={{ accentColor: 'var(--color-primary)' }}
                                                    checked={selectedWeather === type.id}
                                                    onChange={() => setSelectedWeather(type.id)}
                                                /> {type.label}
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 style={{ marginBottom: '12px', fontSize: '1rem', fontWeight: 600, color: 'var(--color-text)' }}>Season</h4>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                        {seasons.map(season => (
                                            <label key={season} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '14px' }}>
                                                <input
                                                    type="radio"
                                                    name="season"
                                                    style={{ accentColor: 'var(--color-primary)' }}
                                                    checked={selectedSeason === season}
                                                    onChange={() => setSelectedSeason(season)}
                                                /> {season === 'ALL' ? 'All Seasons' : season}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Product Grid */}
                            <div style={{ flex: '999 1 300px' }}> {/* Large grow factor to take remaining space */}
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                                    <p style={{ color: 'var(--color-text-muted)', fontWeight: 500 }}>Showing {filteredSeeds.length} varieties</p>

                                    {(selectedWeather !== 'ALL' || selectedSeason !== 'ALL') && (
                                        <button
                                            style={{ color: 'var(--color-error)', fontSize: '14px', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
                                            onClick={() => { setSelectedWeather('ALL'); setSelectedSeason('ALL'); }}
                                        >
                                            Clear Filters
                                        </button>
                                    )}
                                </div>

                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                                    gap: '24px'
                                }}>
                                    {filteredSeeds.map(seed => (
                                        <ProductCard key={seed.id} product={seed} />
                                    ))}
                                </div>

                                {filteredSeeds.length === 0 && (
                                    <div style={{
                                        textAlign: 'center',
                                        padding: '64px',
                                        backgroundColor: 'white',
                                        borderRadius: 'var(--radius-lg)',
                                        border: '1px dashed #ccc'
                                    }}>
                                        <p style={{ fontSize: '1.2rem', color: '#888', marginBottom: '16px' }}>No seeds match your selected filters.</p>
                                        <button
                                            className="btn btn-primary"
                                            onClick={() => { setSelectedWeather('ALL'); setSelectedSeason('ALL'); }}
                                        >
                                            View All Seeds
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            <Chatbot />
            <LocationModal isOpen={isLocationModalOpen} onClose={() => setIsLocationModalOpen(false)} />
        </>
    );
};

export default Seeds;

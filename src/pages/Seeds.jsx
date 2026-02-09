import React, { useState } from 'react';
import { SEEDS } from '../data/seeds';
import { WEATHER_TYPES } from '../data/weather';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import { Filter, X } from 'lucide-react';

const Seeds = () => {
    const [selectedWeather, setSelectedWeather] = useState('ALL');
    const [selectedSeason, setSelectedSeason] = useState('ALL');
    const [showFilters, setShowFilters] = useState(false);

    // Extract unique seasons for filter
    const seasons = ['ALL', ...new Set(SEEDS.map(s => s.season))];

    const filteredSeeds = SEEDS.filter(seed => {
        const matchWeather = selectedWeather === 'ALL' || seed.suitableWeather.includes(selectedWeather);
        const matchSeason = selectedSeason === 'ALL' || seed.season === selectedSeason;
        return matchWeather && matchSeason;
    });

    return (
        <>
            <Header />
            <main style={{ paddingBottom: '64px', minHeight: '80vh' }}>
                <div className="container" style={{ padding: '32px 24px' }}>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-primary-dark)' }}>Seed Catalog</h1>
                        <button
                            className="btn"
                            style={{ display: 'flex', gap: '8px', alignItems: 'center' }}
                            onClick={() => setShowFilters(!showFilters)}
                        >
                            <Filter size={20} /> Filters
                        </button>
                    </div>

                    <div style={{ display: 'flex', gap: '32px', flexDirection: showFilters ? 'column' : 'row' }}>

                        {/* Filters Sidebar (Conditional on mobile, always on desktop if implemented differently, but here keeping simple toggle) */}
                        {showFilters && (
                            <div className="animate-fade-in" style={{
                                minWidth: '250px',
                                backgroundColor: 'white',
                                padding: '24px',
                                borderRadius: 'var(--radius-lg)',
                                boxShadow: 'var(--shadow-md)',
                                height: 'fit-content'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                                    <h3 style={{ fontSize: '1.2rem' }}>Filters</h3>
                                    <button onClick={() => setShowFilters(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><X size={20} /></button>
                                </div>

                                <div style={{ marginBottom: '24px' }}>
                                    <h4 style={{ marginBottom: '12px', fontSize: '1rem', color: '#666' }}>Weather</h4>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                                            <input
                                                type="radio"
                                                name="weather"
                                                checked={selectedWeather === 'ALL'}
                                                onChange={() => setSelectedWeather('ALL')}
                                            /> All Weathers
                                        </label>
                                        {Object.values(WEATHER_TYPES).map(type => (
                                            <label key={type.id} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                                                <input
                                                    type="radio"
                                                    name="weather"
                                                    checked={selectedWeather === type.id}
                                                    onChange={() => setSelectedWeather(type.id)}
                                                /> {type.label}
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 style={{ marginBottom: '12px', fontSize: '1rem', color: '#666' }}>Season</h4>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        {seasons.map(season => (
                                            <label key={season} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                                                <input
                                                    type="radio"
                                                    name="season"
                                                    checked={selectedSeason === season}
                                                    onChange={() => setSelectedSeason(season)}
                                                /> {season === 'ALL' ? 'All Seasons' : season}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        <div style={{ flex: 1 }}>
                            <p style={{ marginBottom: '24px', color: '#666' }}>Showing {filteredSeeds.length} varieties</p>

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
                                <div style={{ textAlign: 'center', padding: '64px', backgroundColor: '#f9f9f9', borderRadius: 'var(--radius-lg)' }}>
                                    <p style={{ fontSize: '1.2rem', color: '#888' }}>No seeds match your selected filters.</p>
                                    <button
                                        style={{ marginTop: '16px', color: 'var(--color-primary)', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer' }}
                                        onClick={() => { setSelectedWeather('ALL'); setSelectedSeason('ALL'); }}
                                    >
                                        Clear all filters
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            <Chatbot />
        </>
    );
};

export default Seeds;

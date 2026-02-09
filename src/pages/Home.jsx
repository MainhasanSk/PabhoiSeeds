import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import LocationModal from '../components/LocationModal';
import WeatherFilter from '../components/WeatherFilter';
import ProductCard from '../components/ProductCard';
import Chatbot from '../components/Chatbot';
import Footer from '../components/Footer';
import { useWeather } from '../context/WeatherContext';
import { SEEDS } from '../data/seeds';
import { ArrowRight } from 'lucide-react';

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { location, manualFilter, weatherType } = useWeather();
    const [showModalOnLoad, setShowModalOnLoad] = useState(true);

    // Auto-show modal after delay if no location
    useEffect(() => {
        if (showModalOnLoad && !location) {
            const timer = setTimeout(() => setIsModalOpen(true), 1500);
            return () => clearTimeout(timer);
        }
    }, [showModalOnLoad, location]);

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setShowModalOnLoad(false); // Don't show again automatically
    };

    // Filter seeds logic
    const filteredSeeds = SEEDS.filter(seed => {
        if (manualFilter === 'ALL') return true;
        return seed.suitableWeather.includes(manualFilter);
    });

    return (
        <div>
            <Header />

            <main>
                <Hero onOpenLocationModal={() => setIsModalOpen(true)} />

                <section className="container" style={{ padding: '64px 24px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', color: 'var(--color-primary-dark)' }}>
                            {location
                                ? `Recommended Seeds for ${location.name}`
                                : 'Explore Our Seeds'}
                        </h2>
                        <p style={{ color: '#666', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                            {weatherType
                                ? `Based on typical ${weatherType.label.toLowerCase()} conditions in your area.`
                                : 'Select your local weather or share location to get personalized recommendations.'}
                        </p>
                    </div>

                    <WeatherFilter onRequestLocation={() => setIsModalOpen(true)} />

                    {/* Seeds Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                        gap: '32px'
                    }}>
                        {filteredSeeds.map(seed => (
                            <ProductCard
                                key={seed.id}
                                product={seed}
                            />
                        ))}
                    </div>

                    {filteredSeeds.length === 0 && (
                        <div style={{ textAlign: 'center', padding: '48px', color: '#888' }}>
                            <p>No specific seeds found for this filter. Try viewing all seeds.</p>
                        </div>
                    )}
                </section>

                {/* Brand Promise Section (Visual Filler) */}
                <section style={{ backgroundColor: '#EFEBE9', padding: '80px 0' }}>
                    <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1595839088487-7890ddb89693?auto=format&fit=crop&q=80&w=800"
                                alt="Farmer in field"
                                style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}
                            />
                        </div>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '24px', color: 'var(--color-primary-dark)' }}>
                                Rooted in Trust, <br />Grown for India
                            </h2>
                            <p style={{ marginBottom: '24px', fontSize: '1.1rem', color: '#555' }}>
                                At Pabhoi Organic Seeds, we combine traditional farming wisdom with modern agricultural science. Our seeds are tested across diverse Indian climates to ensure high germination rates and disease resistance.
                            </p>
                            <button className="btn btn-text" style={{ paddingLeft: 0, fontSize: '1.1rem' }}>
                                Read Our Story <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            <Chatbot />
            <LocationModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
};

export default Home;

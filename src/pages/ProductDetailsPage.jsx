import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Thermometer, Droplets, Calendar, Sprout, ShoppingCart, CreditCard } from 'lucide-react';
import { SEEDS } from '../data/seeds';
import { WEATHER_TYPES } from '../data/weather';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

const ProductDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = SEEDS.find(s => s.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) {
        return <div className="container" style={{ padding: '64px', textAlign: 'center' }}>Product not found</div>;
    }

    // Find related seeds
    const relatedSeeds = SEEDS.filter(seed =>
        seed.id !== product.id &&
        seed.suitableWeather.some(w => product.suitableWeather.includes(w))
    ).slice(0, 3);

    return (
        <>
            <Header />
            <main style={{ paddingBottom: '64px' }}>
                <div className="container" style={{ padding: '32px 24px' }}>
                    <button
                        onClick={() => navigate(-1)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: 'none',
                            fontSize: '14px',
                            color: '#666',
                            marginBottom: '24px'
                        }}
                    >
                        <ArrowLeft size={18} /> Back to seeds
                    </button>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '48px' }}>
                        {/* Image Side */}
                        <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                            <img
                                src={product.image}
                                alt={product.name}
                                style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                            />
                        </div>

                        {/* Content Side */}
                        <div>
                            <div style={{ marginBottom: '24px' }}>
                                <h1 style={{ fontSize: '2.5rem', marginBottom: '16px', color: 'var(--color-primary-dark)' }}>{product.name}</h1>
                                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                    {product.suitableWeather.map(wId => (
                                        <span key={wId} style={{
                                            fontSize: '14px',
                                            backgroundColor: 'rgba(46, 125, 50, 0.1)',
                                            color: 'var(--color-primary)',
                                            padding: '6px 12px',
                                            borderRadius: '4px',
                                            fontWeight: 600
                                        }}>
                                            {WEATHER_TYPES[wId]?.label}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px', backgroundColor: 'white', padding: '24px', borderRadius: 'var(--radius-lg)', border: '1px solid #eee' }}>
                                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                    <Thermometer color="var(--color-secondary)" size={24} />
                                    <div>
                                        <div style={{ fontSize: '12px', color: '#888' }}>Temperature</div>
                                        <div style={{ fontWeight: 600 }}>{product.tempRange}</div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                    <Droplets color="var(--color-secondary)" size={24} />
                                    <div>
                                        <div style={{ fontSize: '12px', color: '#888' }}>Soil Type</div>
                                        <div style={{ fontWeight: 600 }}>{product.soilType}</div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                    <Calendar color="var(--color-secondary)" size={24} />
                                    <div>
                                        <div style={{ fontSize: '12px', color: '#888' }}>Season</div>
                                        <div style={{ fontWeight: 600 }}>{product.season}</div>
                                    </div>
                                </div>
                            </div>

                            <div style={{ marginBottom: '32px' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <Sprout size={24} color="var(--color-primary)" /> Growing Guide
                                </h3>
                                <p style={{ lineHeight: 1.8, color: '#444', backgroundColor: '#F9FBE7', padding: '24px', borderRadius: '12px', fontSize: '1.1rem' }}>
                                    {product.guide}
                                    <br /><br />
                                    Ensure soil is well-prepared, loose, and rich in organic matter before sowing. Water regularly but avoid waterlogging to prevent root rot. Monitor for pests during early growth stages.
                                </p>
                            </div>

                            <div style={{ display: 'flex', gap: '16px' }}>
                                <button className="btn" style={{
                                    flex: 1,
                                    border: '2px solid var(--color-primary)',
                                    color: 'var(--color-primary)',
                                    gap: '8px',
                                    padding: '16px'
                                }}>
                                    <ShoppingCart size={20} /> Add to Cart
                                </button>
                                <button className="btn btn-primary" style={{ flex: 1, gap: '8px', padding: '16px' }}>
                                    <CreditCard size={20} /> Buy Now
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Related Seeds */}
                    {relatedSeeds.length > 0 && (
                        <div style={{ marginTop: '64px' }}>
                            <h3 style={{ marginBottom: '24px', fontSize: '1.8rem', color: 'var(--color-primary-dark)' }}>Similar Seeds for Your Climate</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '24px' }}>
                                {relatedSeeds.map(seed => (
                                    <div
                                        key={seed.id}
                                        style={{
                                            backgroundColor: 'white',
                                            borderRadius: 'var(--radius-md)',
                                            overflow: 'hidden',
                                            boxShadow: 'var(--shadow-md)',
                                            cursor: 'pointer',
                                            transition: 'transform 0.2s'
                                        }}
                                        onClick={() => navigate(`/product/${seed.id}`)}
                                    >
                                        <div style={{ height: '150px', overflow: 'hidden' }}>
                                            <img src={seed.image} alt={seed.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                        <div style={{ padding: '16px' }}>
                                            <h4 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>{seed.name}</h4>
                                            <p style={{ fontSize: '13px', color: '#666', marginBottom: '12px' }}>{seed.description}</p>
                                            <span style={{ fontSize: '13px', color: 'var(--color-primary)', fontWeight: 600 }}>View Details →</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
            <Chatbot />
        </>
    );
};

export default ProductDetailsPage;

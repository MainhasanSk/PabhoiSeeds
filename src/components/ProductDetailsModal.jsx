import React from 'react';
import { X, Thermometer, Droplets, Calendar, Sprout, ShoppingCart, CreditCard } from 'lucide-react';
import { WEATHER_TYPES } from '../data/weather';

const ProductDetailsModal = ({ product, onClose, allSeeds, onSelectProduct }) => {
    if (!product) return null;

    // Find related seeds (same weather suitability, excluding current product)
    const relatedSeeds = allSeeds.filter(seed =>
        seed.id !== product.id &&
        seed.suitableWeather.some(w => product.suitableWeather.includes(w))
    ).slice(0, 3); // Limit to 3

    return (
        <div className="animate-fade-in" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(4px)',
            zIndex: 3000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
        }} onClick={onClose}>
            <div style={{
                backgroundColor: 'white',
                borderRadius: 'var(--radius-lg)',
                width: '100%',
                maxWidth: '900px',
                maxHeight: '90vh',
                overflowY: 'auto',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 'var(--shadow-lg)'
            }} onClick={e => e.stopPropagation()}>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '16px',
                        right: '16px',
                        background: 'white',
                        borderRadius: '50%',
                        padding: '8px',
                        zIndex: 10,
                        boxShadow: 'var(--shadow-sm)'
                    }}
                >
                    <X size={24} />
                </button>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                    {/* Image Side */}
                    <div style={{ position: 'relative', backgroundColor: '#f0f0f0', minHeight: '300px' }}>
                        <img
                            src={product.image}
                            alt={product.name}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>

                    {/* Content Side */}
                    <div style={{ padding: '32px' }}>
                        <div style={{ marginBottom: '24px' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '8px', color: 'var(--color-primary-dark)' }}>{product.name}</h2>
                            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                {product.suitableWeather.map(wId => (
                                    <span key={wId} style={{
                                        fontSize: '12px',
                                        backgroundColor: 'rgba(46, 125, 50, 0.1)',
                                        color: 'var(--color-primary)',
                                        padding: '4px 8px',
                                        borderRadius: '4px',
                                        fontWeight: 600
                                    }}>
                                        {WEATHER_TYPES[wId]?.label}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
                            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                <Thermometer color="var(--color-secondary)" />
                                <div>
                                    <div style={{ fontSize: '11px', color: '#888' }}>Temperature</div>
                                    <div style={{ fontWeight: 600 }}>{product.tempRange}</div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                <Droplets color="var(--color-secondary)" />
                                <div>
                                    <div style={{ fontSize: '11px', color: '#888' }}>Soil Type</div>
                                    <div style={{ fontWeight: 600 }}>{product.soilType}</div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                <Calendar color="var(--color-secondary)" />
                                <div>
                                    <div style={{ fontSize: '11px', color: '#888' }}>Season</div>
                                    <div style={{ fontWeight: 600 }}>{product.season}</div>
                                </div>
                            </div>
                        </div>

                        <div style={{ marginBottom: '32px' }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Sprout size={20} color="var(--color-primary)" /> Growing Guide
                            </h3>
                            <p style={{ lineHeight: 1.6, color: '#555', backgroundColor: '#f9f9f9', padding: '16px', borderRadius: '8px' }}>
                                {product.guide}
                                <br /><br />
                                Ensure soil is well-prepared before sowing. Maintain consistent moisture levels during germination.
                            </p>
                        </div>

                        <div style={{ display: 'flex', gap: '16px' }}>
                            <button className="btn" style={{
                                flex: 1,
                                border: '2px solid var(--color-primary)',
                                color: 'var(--color-primary)',
                                gap: '8px'
                            }}>
                                <ShoppingCart size={20} /> Add to Cart
                            </button>
                            <button className="btn btn-primary" style={{ flex: 1, gap: '8px' }}>
                                <CreditCard size={20} /> Buy Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Related Seeds */}
                {relatedSeeds.length > 0 && (
                    <div style={{ padding: '32px', borderTop: '1px solid #eee', backgroundColor: '#fafafa' }}>
                        <h3 style={{ marginBottom: '16px', color: '#444' }}>More Seeds for this Weather</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
                            {relatedSeeds.map(seed => (
                                <div
                                    key={seed.id}
                                    style={{
                                        backgroundColor: 'white',
                                        padding: '12px',
                                        borderRadius: '8px',
                                        boxShadow: 'var(--shadow-sm)',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px'
                                    }}
                                    onClick={() => onSelectProduct(seed)}
                                >
                                    <img src={seed.image} alt={seed.name} style={{ width: '50px', height: '50px', borderRadius: '4px', objectFit: 'cover' }} />
                                    <div>
                                        <h4 style={{ fontSize: '14px', marginBottom: '4px' }}>{seed.name}</h4>
                                        <span style={{ fontSize: '11px', color: 'var(--color-primary)' }}>View Details</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductDetailsModal;

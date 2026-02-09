import React from 'react';
import { Droplets, Thermometer, Calendar, Wind } from 'lucide-react';
import { WEATHER_TYPES } from '../data/weather';

import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    return (
        <div
            className="product-card"
            onClick={() => navigate(`/product/${product.id}`)}
            style={{
                backgroundColor: 'white',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                position: 'relative',
                cursor: 'pointer'
            }}
        >
            {/* Product Image */}
            <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    className="card-image"
                />
                <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    display: 'flex',
                    gap: '8px'
                }}>
                    {product.suitableWeather.map(weatherId => {
                        const weather = Object.values(WEATHER_TYPES).find(w => w.id === weatherId);
                        if (!weather) return null;
                        return (
                            <span key={weatherId} style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                backdropFilter: 'blur(4px)',
                                padding: '4px 8px',
                                borderRadius: 'var(--radius-full)',
                                fontSize: '10px',
                                fontWeight: 'bold',
                                color: '#333',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                            }}>
                                {/* We could render the icon here if we map string to component, leaving simple for now */}
                                {weather.label}
                            </span>
                        );
                    })}
                </div>
            </div>

            {/* Content */}
            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{
                    fontSize: '1.1rem',
                    marginBottom: '12px',
                    color: 'var(--color-primary-dark)',
                    minHeight: '2.4em' // 2 lines
                }}>
                    {product.name}
                </h3>

                {/* Specs Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '12px',
                    fontSize: '13px',
                    color: '#555',
                    marginBottom: '16px'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Thermometer size={14} color="var(--color-secondary)" />
                        <span>{product.tempRange}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Droplets size={14} color="var(--color-secondary)" />
                        <span>{product.soilType}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Calendar size={14} color="var(--color-secondary)" />
                        <span>{product.season}</span>
                    </div>
                </div>

                {/* Guide Teaser */}
                <div style={{
                    backgroundColor: 'var(--color-bg)',
                    padding: '12px',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '12px',
                    color: '#666',
                    marginBottom: '20px',
                    fontStyle: 'italic'
                }}>
                    " {product.guide} "
                </div>

                <div style={{ marginTop: 'auto', display: 'flex', gap: '8px' }}>
                    <button
                        style={{
                            flex: 1,
                            padding: '10px',
                            backgroundColor: 'white',
                            color: 'var(--color-primary)',
                            border: '1px solid var(--color-primary)',
                            borderRadius: 'var(--radius-full)',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            fontSize: '13px'
                        }}
                        onClick={(e) => {
                            e.stopPropagation();
                            // Add to cart logic would go here
                        }}
                    >
                        Add to Cart
                    </button>
                    <button
                        style={{
                            flex: 1,
                            padding: '10px',
                            backgroundColor: 'var(--color-primary)',
                            color: 'white',
                            border: 'none',
                            borderRadius: 'var(--radius-full)',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'background-color 0.2s',
                            fontSize: '13px'
                        }}
                        onClick={(e) => {
                            e.stopPropagation();
                            // Buy now logic
                        }}
                    >
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

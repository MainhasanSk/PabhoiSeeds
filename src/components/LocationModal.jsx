import React from 'react';
import { useWeather } from '../context/WeatherContext';
import { MapPin, X } from 'lucide-react';

const LocationModal = ({ isOpen, onClose }) => {
    const { detectLocation } = useWeather();

    if (!isOpen) return null;

    const handleAllow = () => {
        detectLocation();
        onClose();
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
            animation: 'fadeIn 0.3s'
        }}>
            <div style={{
                backgroundColor: 'white',
                borderRadius: 'var(--radius-lg)',
                padding: '32px',
                maxWidth: '400px',
                width: '90%',
                textAlign: 'center',
                boxShadow: 'var(--shadow-lg)',
                position: 'relative'
            }}>
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '16px',
                        right: '16px',
                        background: 'none',
                        color: '#999'
                    }}
                >
                    <X size={24} />
                </button>

                <div style={{
                    backgroundColor: 'rgba(46, 125, 50, 0.1)',
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px'
                }}>
                    <MapPin size={32} color="var(--color-primary)" />
                </div>

                <h2 style={{ marginBottom: '16px', color: 'var(--color-primary-dark)' }}>
                    Localize Your Experience
                </h2>

                <p style={{ color: '#666', marginBottom: '32px' }}>
                    Allow location access to get the best seed recommendations based on your local weather and soil conditions.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <button
                        onClick={handleAllow}
                        className="btn btn-primary"
                        style={{ width: '100%', py: '12px' }}
                    >
                        Allow Location Access
                    </button>
                    <button
                        onClick={onClose}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: '#888',
                            fontWeight: 500,
                            padding: '12px'
                        }}
                    >
                        Continue Without Location
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LocationModal;

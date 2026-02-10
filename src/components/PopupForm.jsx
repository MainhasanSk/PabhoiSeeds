import React, { useState, useEffect } from 'react';
import { X, Check } from 'lucide-react';
import logo from '../assets/myimage/logo.png';

const PopupForm = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    useEffect(() => {
        // Show popup after 3 seconds
        const timer = setTimeout(() => {
            // Check if already submitted in this session
            const hasSubmitted = sessionStorage.getItem('popupFormSubmitted');
            if (!hasSubmitted) {
                setIsVisible(true);
            }
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call
        console.log('Form Submitted:', formData);

        setIsSubmitted(true);
        sessionStorage.setItem('popupFormSubmitted', 'true');

        // Auto close after showing thank you message
        setTimeout(() => {
            setIsVisible(false);
        }, 4000);
    };

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(5px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            animation: 'fadeIn 0.4s ease-out'
        }}>
            <div className="animate-fade-in" style={{
                backgroundColor: 'white',
                padding: '40px',
                borderRadius: '16px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                maxWidth: '480px',
                width: '90%',
                position: 'relative',
                textAlign: 'center',
                borderTop: '6px solid var(--color-primary)'
            }}>
                <button
                    onClick={handleClose}
                    style={{
                        position: 'absolute',
                        top: '16px',
                        right: '16px',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#aaa',
                        transition: 'color 0.2s'
                    }}
                    onMouseOver={(e) => e.target.style.color = '#333'}
                    onMouseOut={(e) => e.target.style.color = '#aaa'}
                >
                    <X size={24} />
                </button>

                <div style={{ marginBottom: '24px' }}>
                    <img
                        src={logo}
                        alt="Pabhoi Seeds"
                        style={{ height: '70px', objectFit: 'contain' }}
                    />
                </div>

                {!isSubmitted ? (
                    <>
                        <h2 style={{
                            color: '#1a1a1a',
                            marginBottom: '12px',
                            fontSize: '2rem',
                            fontWeight: 700,
                            letterSpacing: '-0.5px'
                        }}>
                            Join <span style={{ color: 'var(--color-primary)' }}>Pabhoi Family</span>
                        </h2>
                        <p style={{ color: '#666', marginBottom: '32px', lineHeight: 1.6 }}>
                            Be part of our growing community. Get exclusive access to organic farming tips, new seed varieties, and seasonal guides.
                        </p>

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <div style={{ position: 'relative' }}>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    style={{
                                        width: '100%',
                                        padding: '14px 16px',
                                        borderRadius: '8px',
                                        border: '1px solid #e0e0e0',
                                        fontSize: '1rem',
                                        outline: 'none',
                                        transition: 'border-color 0.2s',
                                        backgroundColor: '#f9fafb'
                                    }}
                                    onFocus={(e) => { e.target.style.borderColor = 'var(--color-primary)'; e.target.style.backgroundColor = 'white'; }}
                                    onBlur={(e) => { e.target.style.borderColor = '#e0e0e0'; e.target.style.backgroundColor = '#f9fafb'; }}
                                />
                            </div>
                            <div style={{ position: 'relative' }}>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    style={{
                                        width: '100%',
                                        padding: '14px 16px',
                                        borderRadius: '8px',
                                        border: '1px solid #e0e0e0',
                                        fontSize: '1rem',
                                        outline: 'none',
                                        transition: 'border-color 0.2s',
                                        backgroundColor: '#f9fafb'
                                    }}
                                    onFocus={(e) => { e.target.style.borderColor = 'var(--color-primary)'; e.target.style.backgroundColor = 'white'; }}
                                    onBlur={(e) => { e.target.style.borderColor = '#e0e0e0'; e.target.style.backgroundColor = '#f9fafb'; }}
                                />
                            </div>
                            <div style={{ position: 'relative' }}>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    style={{
                                        width: '100%',
                                        padding: '14px 16px',
                                        borderRadius: '8px',
                                        border: '1px solid #e0e0e0',
                                        fontSize: '1rem',
                                        outline: 'none',
                                        transition: 'border-color 0.2s',
                                        backgroundColor: '#f9fafb'
                                    }}
                                    onFocus={(e) => { e.target.style.borderColor = 'var(--color-primary)'; e.target.style.backgroundColor = 'white'; }}
                                    onBlur={(e) => { e.target.style.borderColor = '#e0e0e0'; e.target.style.backgroundColor = '#f9fafb'; }}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                style={{
                                    padding: '16px',
                                    fontSize: '1.1rem',
                                    marginTop: '12px',
                                    fontWeight: 600,
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 12px rgba(46, 125, 50, 0.3)'
                                }}
                            >
                                Join Family
                            </button>
                        </form>
                        <p style={{ fontSize: '0.8rem', color: '#999', marginTop: '16px' }}>
                            We respect your privacy. No spam, ever.
                        </p>
                    </>
                ) : (
                    <div style={{ padding: '40px 0', animation: 'fadeIn 0.5s' }}>
                        <div style={{
                            width: '90px',
                            height: '90px',
                            borderRadius: '50%',
                            backgroundColor: '#E8F5E9',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: '0 auto 24px'
                        }}>
                            <Check size={48} color="var(--color-primary)" strokeWidth={3} />
                        </div>
                        <h2 style={{ color: 'var(--color-primary-dark)', marginBottom: '16px', fontSize: '2rem' }}>
                            Welcome to the Family!
                        </h2>
                        <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: 1.6 }}>
                            Thank you for joining Pabhoi Seeds. We're excited to grow together!
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PopupForm;

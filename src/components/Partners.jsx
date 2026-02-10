import React from 'react';
import assamAgriLogo from '../assets/partners/Assam_Agricultural_University_logo.png';
import reinsaatLogo from '../assets/partners/reinsaat.png';
import sativaLogo from '../assets/partners/sativa.png';
import tezpurUniLogo from '../assets/partners/tezpur-university.png';

const Partners = () => {
    const partners = [
        { name: 'Assam Agricultural University', logo: assamAgriLogo },
        { name: 'Reinsaat', logo: reinsaatLogo },
        { name: 'Sativa', logo: sativaLogo },
        { name: 'Tezpur University', logo: tezpurUniLogo },
    ];

    // Duplicate list for seamless infinite scroll
    const scrollingPartners = [...partners, ...partners, ...partners];

    return (
        <section style={{
            padding: '48px 0',
            backgroundColor: '#F3F4F6', // Match Hero Section Background
            color: 'var(--color-text)',
            borderBottom: '1px solid #E5E7EB',
            overflow: 'hidden'
        }}>
            <div className="container">
                <p style={{
                    textAlign: 'center',
                    color: '#888',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    marginBottom: '32px'
                }}>
                    Trusted Partners & Collaborators
                </p>

                <div className="marquee-container" style={{
                    display: 'flex',
                    overflow: 'hidden',
                    position: 'relative',
                    width: '100%',
                    maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
                }}>
                    <div className="marquee-content" style={{
                        display: 'flex',
                        gap: '64px',
                        alignItems: 'center',
                        animation: 'scroll 30s linear infinite',
                        width: 'max-content', // Important for smooth scrolling
                    }}>
                        {scrollingPartners.map((partner, index) => (
                            <div key={index} style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minWidth: '160px',
                                height: '80px'
                            }}>
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    style={{
                                        height: '100%',
                                        width: '100%',
                                        objectFit: 'contain',
                                        mixBlendMode: 'multiply', // Blend perfectly with light gray background
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <style>{`
                    @keyframes scroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-33.33%); } /* Move by 1/3 since we triplicated the list */
                    }
                    
                    /* Pause animation on hover for better accessibility */
                    .marquee-container:hover .marquee-content {
                        animation-play-state: paused;
                    }
                `}</style>
            </div>
        </section>
    );
};

export default Partners;

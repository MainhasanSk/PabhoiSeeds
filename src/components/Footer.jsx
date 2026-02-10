import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import logo from '../assets/myimage/logo.png';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#2D3436', color: 'white', padding: '64px 0 24px' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '48px', marginBottom: '48px' }}>

                    {/* Brand */}
                    <div>
                        <img src={logo} alt="Pabhoi Organic Seeds" style={{ height: '80px', marginBottom: '16px' }} />
                        <p style={{ color: '#aaa', lineHeight: 1.6, marginBottom: '24px' }}>
                            Empowering farmers with climate-resilient organic seeds.
                            Grown with care directly from our fields to yours.
                        </p>
                        <div style={{ display: 'flex', gap: '16px' }}>
                            <Facebook color="#aaa" size={20} />
                            <Instagram color="#aaa" size={20} />
                            <Twitter color="#aaa" size={20} />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ color: 'white', marginBottom: '24px' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', color: '#aaa', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Seed Catalog</a></li>
                            <li><a href="#">Growing Guides</a></li>
                            <li><a href="#">Contact Support</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ color: 'white', marginBottom: '24px' }}>Contact Us</h4>
                        <ul style={{ listStyle: 'none', color: '#aaa', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <li>Pabhoi, Assam, India</li>
                            <li>+91 98765 43210</li>
                            <li>support@pabhoiseeds.com</li>
                        </ul>
                        <button className="btn btn-primary" style={{ marginTop: '24px', width: '100%' }}>
                            Chat on WhatsApp
                        </button>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid #444', paddingTop: '24px', textAlign: 'center', color: '#666', fontSize: '14px' }}>
                    <p>&copy; 2024 Pabhoi Organic Seeds. Prototype Website - No Real Orders.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

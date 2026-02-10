import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/myimage/logo.png';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header style={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            boxShadow: 'var(--shadow-sm)',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            transition: 'all 0.3s ease'
        }}>
            <div className="container" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: '80px'
            }}>
                {/* Logo */}
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                    <img src={logo} alt="Pabhoi Seeds" style={{ height: '60px' }} />
                </Link>

                {/* Desktop Navigation */}
                <nav className="nav-desktop" style={{ gap: '32px', alignItems: 'center' }}>
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/seeds" className="nav-link">Seeds</Link>
                    <Link to="/weather-guide" className="nav-link">Weather Guide</Link>
                    <Link to="/about" className="nav-link">About Us</Link>
                </nav>

                {/* Actions */}
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <button className="btn-text" aria-label="Search"><Search size={22} /></button>
                    <button className="btn-text" style={{ position: 'relative' }} aria-label="Cart">
                        <ShoppingCart size={22} />
                        <span style={{
                            position: 'absolute',
                            top: '4px',
                            right: '4px',
                            backgroundColor: 'var(--color-secondary)',
                            color: 'white',
                            fontSize: '10px',
                            width: '14px',
                            height: '14px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 'bold'
                        }}>2</span>
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="btn-text"
                        style={{ display: 'block' }}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <div className="animate-fade-in" style={{
                    position: 'absolute',
                    top: '70px',
                    left: 0,
                    width: '100%',
                    backgroundColor: 'white',
                    boxShadow: 'var(--shadow-lg)',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px'
                }}>
                    <Link to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                    <Link to="/seeds" className="nav-link" onClick={() => setMobileMenuOpen(false)}>All Seeds</Link>
                    <Link to="/weather-guide" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Weather Guide</Link>
                    <Link to="/about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
                    <Link to="#" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                </div>
            )}
        </header>
    );
};

export default Header;

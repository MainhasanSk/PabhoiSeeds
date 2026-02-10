import React, { useState } from 'react';
import { Send } from 'lucide-react';

const JoinFamilySection = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        profession: '',
        address: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send data to a backend
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000); // Reset after 5 seconds
        setFormData({ name: '', phone: '', profession: '', address: '' });
    };

    return (
        <section style={{ padding: '80px 24px', backgroundColor: '#2E7D32', color: 'white' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>

                {/* Text Content */}
                <div>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '24px', fontWeight: 700 }}>
                        Join the Pabhoi Family
                    </h2>
                    <p style={{ fontSize: '1.2rem', marginBottom: '16px', lineHeight: 1.6, opacity: 0.9 }}>
                        Become a part of our growing community of organic farmers and gardening enthusiasts.
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.1rem', opacity: 0.9, lineHeight: 2 }}>
                        <li>✓ Get regular updates on seasonal seeds</li>
                        <li>✓ Receive expert farming guidance</li>
                        <li>✓ Exclusive offers for community members</li>
                        <li>✓ Access to our organic farming workshops</li>
                    </ul>
                </div>

                {/* Contact Form */}
                <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: 'var(--radius-lg)', color: '#333' }}>
                    {!isSubmitted ? (
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '8px', color: 'var(--color-primary-dark)' }}>Get Started Today</h3>

                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your full name"
                                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem' }}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your phone number"
                                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem' }}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Profession</label>
                                <select
                                    name="profession"
                                    value={formData.profession}
                                    onChange={handleChange}
                                    required
                                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem', backgroundColor: 'white' }}
                                >
                                    <option value="">Select your profession</option>
                                    <option value="Farmer">Farmer</option>
                                    <option value="Gardener">Home Gardener</option>
                                    <option value="Business">Agri-Business</option>
                                    <option value="Student">Student/Researcher</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Address (City/Village)</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    placeholder="Enter your city or village"
                                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem' }}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary"
                                style={{ width: '100%', marginTop: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                            >
                                Join Now <Send size={18} />
                            </button>
                        </form>
                    ) : (
                        <div style={{ textAlign: 'center', padding: '40px 0' }}>
                            <div style={{ fontSize: '4rem', marginBottom: '16px' }}>🎉</div>
                            <h3 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '16px' }}>Welcome to the Family!</h3>
                            <p style={{ color: '#666', fontSize: '1.1rem' }}>Thank you for joining us. We will be in touch with you shortly.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default JoinFamilySection;

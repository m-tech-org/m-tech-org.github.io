import React, {useState} from 'react';
import emailjs from '@emailjs/browser';

const TO_EMAIL = 'mtechltd2021@gmail.com';
const EMAILJS_SERVICE_ID = 'mtech_webservice_z9f3js8';
const EMAILJS_TEMPLATE_ID = 'mtechweb_temp_wk4g6hn';
const EMAILJS_PUBLIC_KEY = 'M-p1ZP7WXNdsopwBN';
emailjs.init(EMAILJS_PUBLIC_KEY);

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const result = await emailjs.send(
                EMAILJS_SERVICE_ID, // Your service ID
                EMAILJS_TEMPLATE_ID, // Your template ID
                {
                    name: formData.name,
                    email: formData.email,
                    company: formData.company,
                    message: formData.message,
                    to_email: TO_EMAIL,
                    reply_to: formData.email
                },
                EMAILJS_PUBLIC_KEY // Your public key
            );

            if (result.status === 200) {
                alert('Thank you for your message! We will get back to you soon.');
                setFormData({ name: '', email: '', company: '', message: '' });
            }
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Sorry, there was an error sending your message. Please try again or email us directly at mtechltd2021@gmail.com');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Let's Build Something Amazing</h2>
                        <p className="text-xl opacity-90 max-w-2xl mx-auto">
                            Ready to start your project? We're excited to discuss how M-Tech can help bring your vision to life!
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Information - same as before */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-white bg-opacity-20 p-3 rounded-lg">📧</div>
                                    <div>
                                        <h4 className="font-semibold">Email</h4>
                                        <a href={"mailto:" + TO_EMAIL} className="opacity-90 hover:opacity-100 hover:text-accent-200 transition-colors">
                                            {TO_EMAIL}
                                        </a>
                                    </div>
                                </div>
                                {/* Other contact info... */}
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm border border-white border-opacity-20">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-accent-200 focus:border-accent-200 transition-all"
                                        placeholder="Your full name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-accent-200 focus:border-accent-200 transition-all"
                                        placeholder="your.email@company.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-accent-200 focus:border-accent-200 transition-all"
                                        placeholder="Your company name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">Project Details *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-accent-200 focus:border-accent-200 transition-all resize-none"
                                        placeholder="Tell us about your project requirements..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full bg-gradient-to-r from-accent-400 to-accent-500 text-white py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl ${
                                        isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:from-accent-500 hover:to-accent-600'
                                    }`}
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                                    ) : (
                                        'Send Message'
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
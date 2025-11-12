import {useEffect, useState} from 'react';
import {Navigation} from '../components/Navigation';
import {Footer} from '../components/Footer';
import {Button} from '../components/ui/button/button';
import {Loader2, Mail} from 'lucide-react';
import {useToast} from '../hooks/use-toast';
import type {ContactFormData} from '../services/email';
import {sendContactEmail, validateContactForm} from '../services/email';
import styles from './contact.module.css';

export default function Contact() {
    const {toast} = useToast();
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        subject: '',
        company: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        document.title = 'Contact Us - M-Tech';
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate form data
        const validation = validateContactForm(formData);
        if (!validation.valid) {
            toast({
                title: 'Validation Error',
                description: validation.errors.join('. '),
                variant: 'destructive',
            });
            return;
        }

        // Set loading state
        setIsSubmitting(true);

        try {
            // Send email using EmailJS
            const response = await sendContactEmail(formData);

            if (response.success) {
                toast({
                    title: 'Message Sent!',
                    description: response.message,
                });

                // Clear form on success
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    company: '',
                    message: '',
                });
            } else {
                toast({
                    title: 'Error',
                    description: response.message,
                    variant: 'destructive',
                });
            }
        } catch (error) {
            toast({
                title: 'Error',
                description: 'An unexpected error occurred. Please try again later.',
                variant: 'destructive',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className={styles.page}>
            <Navigation/>

            <section className={styles.hero}>
                <h1 className={styles.heroTitle}>Contact Us</h1>
                <p className={styles.heroDescription}>
                    Have a project in mind? We'd love to hear from you. Get in touch and let's discuss how we can help
                    bring your
                    vision to life.
                </p>
            </section>

            <div className={styles.content}>
                <div className={styles.grid}>
                    <div className={styles.formSection}>
                        <h2>Send us a Message</h2>
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                                       required/>
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" value={formData.email}
                                       onChange={handleChange} required/>
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="company">Company</label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" value={formData.message} onChange={handleChange}
                                          required/>
                            </div>

                            <Button type="submit" size="lg" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className={styles.spinner}/>
                                        Sending...
                                    </>
                                ) : (
                                    'Send Message'
                                )}
                            </Button>
                        </form>
                    </div>

                    <div className={styles.infoSection}>
                        <h2>Contact Information</h2>

                        <div className={styles.infoCard}>
                            <Mail className={styles.infoIcon}/>
                            <div className={styles.infoContent}>
                                <h3>Email</h3>
                                <p>mtechltd2021@gmail.com</p>
                                {/*<p>support@m-tech.com</p>*/}
                            </div>
                        </div>

                        {/*<div className={styles.infoCard}>*/}
                        {/*  <Phone className={styles.infoIcon} />*/}
                        {/*  <div className={styles.infoContent}>*/}
                        {/*    <h3>Phone</h3>*/}
                        {/*    <p>+1 (555) 123-4567</p>*/}
                        {/*    <p>Mon-Fri, 9:00 AM - 6:00 PM PST</p>*/}
                        {/*  </div>*/}
                        {/*</div>*/}

                        {/*<div className={styles.infoCard}>*/}
                        {/*  <MapPin className={styles.infoIcon} />*/}
                        {/*  <div className={styles.infoContent}>*/}
                        {/*    <h3>Office</h3>*/}
                        {/*    <p>123 Tech Street</p>*/}
                        {/*    <p>San Francisco, CA 94105</p>*/}
                        {/*  </div>*/}
                        {/*</div>*/}

                    </div>
                </div>


                {/*Map*/}
                {/*<div className={styles.mapSection}>*/}
                {/*  <h2>Our Location</h2>*/}
                {/*  <div className={styles.map}>*/}
                {/*    <p>Map integration placeholder - San Francisco, CA</p>*/}
                {/*  </div>*/}
                {/*</div>*/}
            </div>

            <Footer/>
        </div>
    );
}

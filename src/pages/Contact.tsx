import {useEffect, useState} from 'react';
import {Navigation} from '../components/Navigation.tsx';
import {Footer} from '../components/Footer.tsx';
import {Button} from '../components/ui/button/button.tsx';
import {Github, Linkedin, Loader2, Mail} from 'lucide-react';
import {useToast} from '../hooks/use-toast.ts';
import {useInView} from '../hooks/use-in-view.ts';
import type {ContactFormData} from '../services/email.ts';
import {sendContactEmail, validateContactForm} from '../services/email.ts';
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

    const hero = useInView(0.1);
    const grid = useInView();

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

            <section ref={hero.ref} className={`${styles.hero} reveal ${hero.isInView ? 'is-visible' : ''}`}>
                <h1 className={styles.heroTitle}>Contact Us</h1>
                <p className={styles.heroDescription}>
                    Got an idea worth building? Tell us about it — we'll turn it into a working product, not just a
                    proposal.
                </p>
            </section>

            <div className={styles.content}>
                <div ref={grid.ref} className={`${styles.grid} reveal-stagger ${grid.isInView ? 'is-visible' : ''}`}>
                    <div className={styles.formSection}>
                        <h2>Send us a Message</h2>
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="name">Name <span className={styles.required}>*</span></label>
                                    <input type="text" id="name" name="name" value={formData.name}
                                           onChange={handleChange} required/>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="email">Email <span className={styles.required}>*</span></label>
                                    <input type="email" id="email" name="email" value={formData.email}
                                           onChange={handleChange} required/>
                                </div>
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="subject">Subject <span className={styles.required}>*</span></label>
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
                                    <label htmlFor="company">Company <span className={styles.required}>*</span></label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message">Message <span className={styles.required}>*</span></label>
                                <textarea id="message" name="message" value={formData.message} onChange={handleChange}
                                          required/>
                            </div>

                            <Button type="submit" size="lg" disabled={isSubmitting} className={styles.submitButton}>
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

                        <a href="mailto:mtechltd2021@gmail.com" className={styles.infoCard}>
                            <span className={styles.infoIconWrap}>
                                <Mail className={styles.infoIcon}/>
                            </span>
                            <div className={styles.infoContent}>
                                <h3>Email</h3>
                                <p>mtechltd2021@gmail.com</p>
                            </div>
                        </a>

                        <a
                            href="https://github.com/m-tech-org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.infoCard}
                        >
                            <span className={styles.infoIconWrap}>
                                <Github className={styles.infoIcon}/>
                            </span>
                            <div className={styles.infoContent}>
                                <h3>GitHub</h3>
                                <p>github.com/m-tech-org</p>
                            </div>
                        </a>

                        <a
                            href="https://www.linkedin.com/company/mtechltdbd/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.infoCard}
                        >
                            <span className={styles.infoIconWrap}>
                                <Linkedin className={styles.infoIcon}/>
                            </span>
                            <div className={styles.infoContent}>
                                <h3>LinkedIn</h3>
                                <p>M-Tech Ltd</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
}

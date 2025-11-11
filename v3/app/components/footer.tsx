import {Link} from "react-router";
import {Github, Mail} from "lucide-react";
import styles from "./footer.module.css";

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.section}>
                        <h3>M-Tech</h3>
                        <p>Leading technology solutions provider delivering innovation and excellence since 2021.</p>
                        <div className={styles.social}>
                            <a href="https://github.com/m-tech-ltd" className={styles.socialLink} aria-label="GitHub">
                                <Github size={20}/>
                            </a>
                            {/*<a href="https://linkedin.com" className={styles.socialLink} aria-label="LinkedIn">*/}
                            {/*  <Linkedin size={20} />*/}
                            {/*</a>*/}
                            {/*<a href="https://twitter.com" className={styles.socialLink} aria-label="Twitter">*/}
                            {/*  <Twitter size={20} />*/}
                            {/*</a>*/}
                            <a href="mailto:mtechltd2011@gmail.com" className={styles.socialLink} aria-label="Email">
                                <Mail size={20}/>
                            </a>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h3>Quick Links</h3>
                        <ul className={styles.links}>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/services">Services</Link>
                            </li>
                            <li>
                                <Link to="/projects">Projects</Link>
                            </li>
                            <li>
                                <Link to="/about">About Us</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h3>Services</h3>
                        <ul className={styles.links}>
                            <li>
                                <Link to="/services">Web Development</Link>
                            </li>
                            <li>
                                <Link to="/services">Mobile Apps</Link>
                            </li>
                            <li>
                                <Link to="/services">Cloud Solutions</Link>
                            </li>
                            <li>
                                <Link to="/services">AI & ML</Link>
                            </li>
                            <li>
                                <Link to="/services">Cybersecurity</Link>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h3>Contact</h3>
                        <ul className={styles.links}>
                            <li>mtechltd2011@gmail.com</li>
                            {/*<li>+1 (555) 123-4567</li>*/}
                            {/*<li>Dhaka</li>*/}
                            {/*<li>Bangladesh</li>*/}
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; 2011-{new Date().getFullYear()} M-Tech. All rights reserved.</p>
                    <p className={styles.motto}>Innovate. Integrate. Inspire.</p>
                </div>
            </div>
        </footer>
    );
}

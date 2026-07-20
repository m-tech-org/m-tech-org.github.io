import styles from './footer.module.css';
import {Github, Linkedin, Mail} from "lucide-react";

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.section}>
                        <h3>M-Tech</h3>
                        <p>Leading technology solutions provider delivering innovation and excellence since 2021.</p>
                        <div className={styles.social}>
                            <a href="https://github.com/m-tech-org" className={styles.socialLink} aria-label="GitHub">
                                <Github size={20}/>
                            </a>
                            <a href="https://www.linkedin.com/company/mtechltdbd/" className={styles.socialLink} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                <Linkedin size={20}/>
                            </a>
                            {/*<a href="https://twitter.com" className={styles.socialLink} aria-label="Twitter">*/}
                            {/*  <Twitter size={20} />*/}
                            {/*</a>*/}
                            <a href="mailto:mtechltd2021@gmail.com" className={styles.socialLink} aria-label="Email">
                                <Mail size={20}/>
                            </a>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h3>Quick Links</h3>
                        <ul className={styles.links}>
                            <li><a href="#">Home</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h3>Services</h3>
                        <ul className={styles.links}>
                            <li>
                                <a href="#services">Web Development</a>
                            </li>
                            <li>
                                <a href="#services">Mobile Apps</a>
                            </li>
                            <li>
                                <a href="#services">Cloud Solutions</a>
                            </li>
                            <li>
                                <a href="#services">AI & ML</a>
                            </li>
                            <li>
                                <a href="#services">Cybersecurity</a>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h3>Contact</h3>
                        <ul className={styles.links}>
                        <li>mtechltd2021@gmail.com</li>
                        {/*<li>Dhaka</li>*/}
                        {/*<li>Bangladesh</li>*/}
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; 2021-{new Date().getFullYear()} M-Tech. All rights reserved.</p>
                    <a
                        href={`https://github.com/m-tech-org/m-tech-org.github.io/commit/${__GIT_SHA__}`}
                        className={styles.version}
                        title={`Built ${__BUILD_DATE__}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        v{__APP_VERSION__} <span className={styles.versionSha}>· {__GIT_SHA__}</span>
                    </a>
                    <p className={styles.motto}>Innovate. Integrate. Inspire.</p>
                </div>
            </div>
        </footer>
    );
}

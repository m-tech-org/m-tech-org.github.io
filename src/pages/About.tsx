import {useEffect} from 'react';
import {Navigation} from '../components/Navigation.tsx';
import {Footer} from '../components/Footer.tsx';
import {Award, Shield, Target, TrendingUp, Users, Zap} from 'lucide-react';
import {useInView} from '../hooks/use-in-view.ts';
import styles from './about.module.css';

export default function About() {
    useEffect(() => {
        document.title = 'About Us - M-Tech';
    }, []);

    const hero = useInView(0.1);
    const story = useInView();
    const values = useInView();
    const why = useInView();

    return (
        <div className={styles.page}>
            <Navigation/>

            <section
                ref={hero.ref}
                className={`${styles.hero} reveal ${hero.isInView ? 'is-visible' : ''}`}
            >
                <div className={styles.titleWrap}>
                    <h1 className={styles.heroTitle}>About M-Tech</h1>
                    <span className={styles.version} title={`Built ${__BUILD_DATE__}`}>
                        v{__APP_VERSION__} <span className={styles.versionSha}>· {__GIT_SHA__}</span>
                    </span>
                </div>
                <p className={styles.heroSubtitle}>Morph Technologies</p>
                <p className={styles.heroDescription}>
                    Pioneering technology solutions since 2021. We are a team of passionate innovators committed to
                    transforming
                    businesses through cutting-edge technology.
                </p>
            </section>

            {/* Company Story */}
            <section className={styles.section}>
                <div
                    ref={story.ref}
                    className={`${styles.container} reveal ${story.isInView ? 'is-visible' : ''}`}
                >
                    <h2 className={styles.sectionTitle}>Our Story</h2>
                    <div className={styles.story}>
                        <p>
                            Founded in 2021, M-Tech (Morph Technologies) emerged from a simple yet powerful vision: to bridge the gap between
                            innovative
                            technology and practical business solutions. What started as a small team of passionate
                            developers has
                            grown into a full-service technology partner serving clients across the globe.
                        </p>
                        <p>
                            Our journey has been marked by continuous learning, adaptation, and an unwavering commitment
                            to
                            excellence. We've evolved alongside the rapidly changing technology landscape, always
                            staying ahead of the
                            curve to deliver solutions that not only meet today's needs but anticipate tomorrow's
                            challenges.
                        </p>
                        <p>
                            Today, M-Tech stands as a trusted partner for businesses seeking to leverage technology for
                            growth and
                            innovation. Our success is measured not just in projects delivered, but in the lasting
                            relationships we
                            build and the tangible impact we create for our clients.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Our Core Values</h2>
                    <div
                        ref={values.ref}
                        className={`${styles.valuesGrid} reveal-stagger ${values.isInView ? 'is-visible' : ''}`}
                    >
                        <div className={styles.valueCard}>
                            <Target className={styles.valueIcon}/>
                            <h3 className={styles.valueTitle}>Ship, Don't Just Pitch</h3>
                            <p className={styles.valueDescription}>
                                We'd rather put something live and learn from real usage than perfect a slide deck.
                                Every idea gets tested against production, not just a meeting room.
                            </p>
                        </div>
                        <div className={styles.valueCard}>
                            <Users className={styles.valueIcon}/>
                            <h3 className={styles.valueTitle}>Plain-Language Collaboration</h3>
                            <p className={styles.valueDescription}>
                                No jargon walls between you and your project. You talk directly to the people
                                writing the code, and you always know where things stand.
                            </p>
                        </div>
                        <div className={styles.valueCard}>
                            <Zap className={styles.valueIcon}/>
                            <h3 className={styles.valueTitle}>Own the Outcome</h3>
                            <p className={styles.valueDescription}>
                                We treat every deploy like it's our own product on the line — because often, it is.
                                Bugs get fixed because we'd want them fixed, not because a ticket says so.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            {/*<section className={styles.section}>*/}
            {/*  <div className={styles.container}>*/}
            {/*    <h2 className={styles.sectionTitle}>Meet Our Team</h2>*/}
            {/*    <div className={styles.teamGrid}>*/}
            {/*      {team.map((member) => (*/}
            {/*        <div key={member.id} className={styles.teamCard}>*/}
            {/*          <img src={member.image} alt={member.name} className={styles.teamImage} />*/}
            {/*          <div className={styles.teamContent}>*/}
            {/*            <h3 className={styles.teamName}>{member.name}</h3>*/}
            {/*            <p className={styles.teamRole}>{member.role}</p>*/}
            {/*            <p className={styles.teamBio}>{member.bio}</p>*/}
            {/*          </div>*/}
            {/*        </div>*/}
            {/*      ))}*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</section>*/}

            {/* Why Choose Us */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Why Choose M-Tech</h2>
                    <div
                        ref={why.ref}
                        className={`${styles.whyGrid} reveal-stagger ${why.isInView ? 'is-visible' : ''}`}
                    >
                        <div className={styles.whyCard}>
                            <Award className={styles.whyIcon}/>
                            <div className={styles.whyContent}>
                                <h3>We Build What We Sell</h3>
                                <p>
                                    From backup utilities to HR systems, we run our own products in production —
                                    not just client work. That's proof our code holds up in the real world, not
                                    just in a portfolio.
                                </p>
                            </div>
                        </div>
                        <div className={styles.whyCard}>
                            <TrendingUp className={styles.whyIcon}/>
                            <div className={styles.whyContent}>
                                <h3>Full-Stack, Built to Scale</h3>
                                <p>Web, mobile, cloud, and AI under one roof. We design solutions that grow with
                                    your business instead of needing a rebuild every time you scale.</p>
                            </div>
                        </div>
                        <div className={styles.whyCard}>
                            <Shield className={styles.whyIcon}/>
                            <div className={styles.whyContent}>
                                <h3>No Vendor Lock-In</h3>
                                <p>
                                    Self-hosted by design — your data stays yours. We bake in industry-standard
                                    security practices from day one instead of bolting them on later.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    );
}

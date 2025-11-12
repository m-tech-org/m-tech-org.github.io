import { useEffect } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button/button';
import { Code, Smartphone, Cloud, ArrowRight } from 'lucide-react';
import { services } from '../data/services';
import { projects } from '../data/projects';
import styles from './home.module.css';

export default function Home() {
  useEffect(() => {
    document.title = 'M-Tech - Innovate. Integrate. Inspire.';
  }, []);

  const featuredServices = services.slice(0, 3);
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className={styles.page}>
      <Navigation />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>M-Tech</h1>
          <p className={styles.heroMotto}>Innovate. Integrate. Inspire.</p>
          <p className={styles.heroDescription}>
            Transforming businesses through cutting-edge technology solutions. We deliver innovation that drives growth
            and excellence.
          </p>
          <div className={styles.heroCta}>
            <Button asChild size="lg">
              <a href="#contact">
                Get Started
                <ArrowRight size={20} style={{ marginLeft: '8px' }} />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#projects">View Our Work</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <div className={styles.aboutContainer}>
          <p className={styles.sectionSubtitle}>Who We Are</p>
          <h2 className={styles.sectionTitle}>Building the Future of Technology</h2>
          <p className={styles.aboutText}>
            At M-Tech, we are passionate about leveraging technology to solve complex challenges. With a team of expert
            developers, designers, and strategists, we deliver solutions that are not only innovative but also practical
            and scalable. Our commitment to excellence and client success drives everything we do.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.services}>
        <div className={styles.servicesContainer}>
          <p className={styles.sectionSubtitle}>What We Offer</p>
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <div className={styles.servicesGrid}>
            {featuredServices.map((service) => {
              const IconComponent = service.icon === 'Code' ? Code : service.icon === 'Smartphone' ? Smartphone : Cloud;
              return (
                <div key={service.id} className={styles.serviceCard}>
                  <IconComponent className={styles.serviceIcon} />
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                </div>
              );
            })}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-7)' }}>
            <Button asChild variant="outline" size="lg">
              <a href="#services">View All Services</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className={styles.projects}>
        <div className={styles.projectsContainer}>
          <p className={styles.sectionSubtitle}>Our Work</p>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <div className={styles.projectsGrid}>
            {featuredProjects.map((project) => (
              <div key={project.id} className={styles.projectCard}>
                <img src={project.image} alt={project.title} className={styles.projectImage} />
                <div className={styles.projectContent}>
                  <p className={styles.projectCategory}>{project.category}</p>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <div className={styles.projectTech}>
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className={styles.techBadge}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-7)' }}>
            <Button asChild variant="outline" size="lg">
              <a href="#projects">View All Projects</a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaBackground} />
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Ready to Transform Your Business?</h2>
          <p className={styles.ctaText}>
            Let's discuss how M-Tech can help you achieve your technology goals. Our team is ready to bring your vision
            to life.
          </p>
          <div className={styles.ctaButtons}>
            <Button asChild size="lg">
              <a href="#contact">Contact Us Today</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#about">Learn More About Us</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

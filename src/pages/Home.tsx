import { useEffect } from 'react';
import { Navigation } from '../components/Navigation.tsx';
import { Footer } from '../components/Footer.tsx';
import { Button } from '../components/ui/button/button.tsx';
import { Code, Smartphone, Cloud, Brain, Shield, Lightbulb, ArrowRight } from 'lucide-react';
import { services } from '../data/services.ts';
import { projects } from '../data/projects.ts';
import { products } from '../data/products.ts';
import { ProductDetailsDialog } from '../components/ProductDetailsDialog.tsx';
import { TechStackCanvas } from '../components/TechStackCanvas.tsx';
import { useInView } from '../hooks/use-in-view.ts';
import styles from './home.module.css';

const iconMap: Record<string, any> = {
  Code,
  Smartphone,
  Cloud,
  Brain,
  Shield,
  Lightbulb,
};

export default function Home() {
  useEffect(() => {
    document.title = 'M-Tech - Innovate. Integrate. Inspire.';
  }, []);

  const featuredServices = services.slice(0, 3);
  const featuredProjects = projects.slice(0, 3);
  const featuredProducts = products.slice(0, 3);
  const activePromotions = products.filter((product) => product.coupons && product.coupons.length > 0);

  const servicesReveal = useInView();
  const techStackReveal = useInView();
  const projectsReveal = useInView();
  const shopReveal = useInView();

  return (
    <div className={styles.page}>
      <Navigation />

      {activePromotions.length > 0 && (
        <div className={styles.promoTicker}>
          <div className={styles.promoTickerTrack}>
            {[...activePromotions, ...activePromotions].map((product, index) => (
              <a href="#products" key={`${product.id}-${index}`} className={styles.promoTickerItem}>
                🎉 <strong>{product.title}</strong> —{' '}
                {product.coupons?.map((coupon, couponIndex) => (
                  <span key={coupon.code}>
                    {couponIndex > 0 && ' or '}
                    <span className={styles.promoCode}>{coupon.code}</span> ({coupon.discount.split(' — ')[0]})
                  </span>
                ))}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className={activePromotions.length > 0 ? `${styles.hero} ${styles.heroCompact}` : styles.hero}>
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
          <h2 className={styles.sectionTitle}>We Ship. We Don't Just Consult.</h2>
          <p className={styles.aboutText}>
            M-Tech is a small team that builds real software — client projects and our own products, side by side.
            From Laravel backends to React frontends, from Docker deployments to database design, we handle the full
            stack ourselves instead of handing pieces off. If it's in production, one of us built it.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.services}>
        <div className={styles.servicesContainer}>
          <p className={styles.sectionSubtitle}>What We Offer</p>
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <div
            ref={servicesReveal.ref}
            className={`${styles.servicesGrid} reveal-stagger ${servicesReveal.isInView ? 'is-visible' : ''}`}
          >
            {featuredServices.map((service) => {
              const IconComponent = iconMap[service.icon] || Code;
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
          <div
            ref={projectsReveal.ref}
            className={`${styles.projectsGrid} reveal-stagger ${projectsReveal.isInView ? 'is-visible' : ''}`}
          >
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

      {/* Shop Section */}
      {featuredProducts.length > 0 && (
        <section className={styles.shop}>
          <div className={styles.shopContainer}>
            <p className={styles.sectionSubtitle}>Our Products</p>
            <h2 className={styles.sectionTitle}>Tools We Build &amp; Ship</h2>
            <div
              ref={shopReveal.ref}
              className={`${styles.projectsGrid} reveal-stagger ${shopReveal.isInView ? 'is-visible' : ''}`}
            >
              {featuredProducts.map((product) => {
                const isUpcoming = product.status === 'upcoming';
                const card = (
                  <div
                    className={
                      isUpcoming
                        ? `${styles.projectCard} ${styles.upcomingCard}`
                        : `${styles.projectCard} ${styles.clickableCard}`
                    }
                    role={isUpcoming ? undefined : 'button'}
                    tabIndex={isUpcoming ? undefined : 0}
                  >
                    <div className={isUpcoming ? `${styles.imageWrap} ${styles.upcomingBanner}` : styles.imageWrap}>
                      <img src={product.image} alt={product.title} className={styles.shopImage} />
                    </div>
                    <div className={styles.projectContent}>
                      <p className={styles.projectCategory}>{product.category}</p>
                      <h3 className={styles.projectTitle}>{product.title}</h3>
                      <p className={styles.projectDescription}>{product.description}</p>
                      <div className={styles.projectTech}>
                        {product.technologies.slice(0, 3).map((tech) => (
                          <span key={tech} className={styles.techBadge}>
                            {tech}
                          </span>
                        ))}
                      </div>
                      {product.coupons && product.coupons.length > 0 && (
                        <div className={styles.shopPromo}>
                          🎉 {product.coupons[0].discount.split(' — ')[0]} with code{' '}
                          <span className={styles.promoCode}>{product.coupons[0].code}</span>
                        </div>
                      )}
                    </div>
                  </div>
                );

                return isUpcoming ? (
                  <div key={product.id}>{card}</div>
                ) : (
                  <ProductDetailsDialog key={product.id} product={product}>
                    {card}
                  </ProductDetailsDialog>
                );
              })}
            </div>
            <div style={{ textAlign: 'center', marginTop: 'var(--space-7)' }}>
              <Button asChild variant="outline" size="lg">
                <a href="#products">View All Products</a>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Tech Stack Section */}
      <section className={styles.techStack}>
        <div className={styles.techStackContainer}>
          <p className={styles.sectionSubtitle}>Our Toolkit</p>
          <h2 className={styles.sectionTitle}>Tech Stack</h2>
          <div ref={techStackReveal.ref} className={`reveal ${techStackReveal.isInView ? 'is-visible' : ''}`}>
            <TechStackCanvas />
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

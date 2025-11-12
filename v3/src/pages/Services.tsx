import { useState, useEffect } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Code, Smartphone, Cloud, Brain, Shield, Lightbulb, Check } from 'lucide-react';
import { services, serviceCategories } from '../data/services';
import styles from './services.module.css';

const iconMap: Record<string, any> = {
  Code,
  Smartphone,
  Cloud,
  Brain,
  Shield,
  Lightbulb,
};

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    document.title = 'Our Services - M-Tech';
  }, []);

  const filteredServices =
    activeCategory === 'All' ? services : services.filter((service) => service.category === activeCategory);

  return (
    <div className={styles.page}>
      <Navigation />

      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Our Services</h1>
        <p className={styles.heroDescription}>
          Comprehensive technology solutions tailored to your business needs. From concept to deployment, we deliver
          excellence at every step.
        </p>
      </section>

      <div className={styles.content}>
        <div className={styles.filters}>
          {serviceCategories.map((category) => (
            <button
              key={category}
              className={`${styles.filterButton} ${activeCategory === category ? styles.active : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={styles.servicesGrid}>
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.icon] || Code;
            return (
              <div key={service.id} className={styles.serviceCard}>
                <div className={styles.serviceHeader}>
                  <IconComponent className={styles.serviceIcon} />
                  <div className={styles.serviceInfo}>
                    <p className={styles.serviceCategory}>{service.category}</p>
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                  </div>
                </div>
                <p className={styles.serviceDescription}>{service.description}</p>
                <ul className={styles.featuresList}>
                  {service.features.map((feature) => (
                    <li key={feature} className={styles.featureItem}>
                      <Check className={styles.featureIcon} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}

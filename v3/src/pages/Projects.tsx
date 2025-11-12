import { useEffect } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { projects } from '../data/projects';
import styles from './projects.module.css';

export default function Projects() {
  useEffect(() => {
    document.title = 'Our Projects - M-Tech';
  }, []);

  return (
    <div className={styles.page}>
      <Navigation />

      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Our Projects</h1>
        <p className={styles.heroDescription}>
          Discover how we've helped businesses transform through innovative technology solutions. Each project
          represents our commitment to excellence and client success.
        </p>
      </section>

      <div className={styles.content}>
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <img src={project.image} alt={project.title} className={styles.projectImage} />
              <div className={styles.projectContent}>
                <p className={styles.projectCategory}>{project.category}</p>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.longDescription}</p>

                <div className={styles.projectMeta}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Client</span>
                    <span className={styles.metaValue}>{project.client}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Year</span>
                    <span className={styles.metaValue}>{project.year}</span>
                  </div>
                </div>

                <div className={styles.projectTech}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={styles.projectOutcome}>
                  <strong>Outcome:</strong> {project.outcome}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

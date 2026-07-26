import { useEffect } from 'react';
import { Navigation } from '../components/Navigation.tsx';
import { Footer } from '../components/Footer.tsx';
import { projects } from '../data/projects.ts';
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
                <div className={styles.projectCategoryRow}>
                  <p className={styles.projectCategory}>{project.category}</p>
                  {project.license && <span className={styles.licenseBadge}>{project.license} LICENSED</span>}
                </div>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.longDescription}</p>

                <div className={styles.projectMeta}>
                  {project.client && (
                    <div className={styles.metaItem}>
                      <span className={styles.metaLabel}>Client</span>
                      <span className={styles.metaValue}>{project.client}</span>
                    </div>
                  )}
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

                {project.demoUsername && project.demoPassword && (
                  <div className={styles.demoCredentials}>
                    <span className={styles.metaLabel}>Demo Login</span>
                    <code className={styles.demoCredentialsValue}>
                      {project.demoUsername} / {project.demoPassword}
                    </code>
                  </div>
                )}

                {project.link && (
                  <div className={styles.projectLinkRow}>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                      {project.link.includes('github.com')
                        ? 'View on GitHub'
                        : project.demoWebsiteLink
                          ? 'Demo CMS'
                          : project.demoUsername
                            ? 'View Live Demo'
                            : 'Visit Website'} →
                    </a>
                    {project.demoWebsiteLink && (
                      <a
                        href={project.demoWebsiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectLink}
                      >
                        Demo Website →
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

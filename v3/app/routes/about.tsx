import type { Route } from "./+types/about";
import { Navigation } from "~/components/navigation";
import { Footer } from "~/components/footer";
import { Target, Users, Zap, Award, TrendingUp, Shield } from "lucide-react";
import { team } from "~/data/team";
import styles from "./about.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Us - M-Tech" },
    {
      name: "description",
      content: "Learn about M-Tech's mission, values, and the expert team driving innovation in technology solutions.",
    },
  ];
}

export default function About() {
  return (
    <div className={styles.page}>
      <Navigation />

      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>About M-Tech</h1>
        <p className={styles.heroDescription}>
          Pioneering technology solutions since 2021. We are a team of passionate innovators committed to transforming
          businesses through cutting-edge technology.
        </p>
      </section>

      {/* Company Story */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Story</h2>
          <div className={styles.story}>
            <p>
              Founded in 2021, M-Tech emerged from a simple yet powerful vision: to bridge the gap between innovative
              technology and practical business solutions. What started as a small team of passionate developers has
              grown into a full-service technology partner serving clients across the globe.
            </p>
            <p>
              Our journey has been marked by continuous learning, adaptation, and an unwavering commitment to
              excellence. We've evolved alongside the rapidly changing technology landscape, always staying ahead of the
              curve to deliver solutions that not only meet today's needs but anticipate tomorrow's challenges.
            </p>
            <p>
              Today, M-Tech stands as a trusted partner for businesses seeking to leverage technology for growth and
              innovation. Our success is measured not just in projects delivered, but in the lasting relationships we
              build and the tangible impact we create for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Core Values</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <Target className={styles.valueIcon} />
              <h3 className={styles.valueTitle}>Innovation</h3>
              <p className={styles.valueDescription}>
                We constantly push boundaries, exploring new technologies and methodologies to deliver cutting-edge
                solutions.
              </p>
            </div>
            <div className={styles.valueCard}>
              <Users className={styles.valueIcon} />
              <h3 className={styles.valueTitle}>Collaboration</h3>
              <p className={styles.valueDescription}>
                We believe in the power of partnership, working closely with clients to understand and achieve their
                goals.
              </p>
            </div>
            <div className={styles.valueCard}>
              <Zap className={styles.valueIcon} />
              <h3 className={styles.valueTitle}>Excellence</h3>
              <p className={styles.valueDescription}>
                Quality is non-negotiable. We maintain the highest standards in every project, from code to customer
                service.
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
          <div className={styles.whyGrid}>
            <div className={styles.whyCard}>
              <Award className={styles.whyIcon} />
              <div className={styles.whyContent}>
                <h3>Proven Track Record</h3>
                <p>
                  Over 200 successful projects delivered across diverse industries, with a 98% client satisfaction rate.
                </p>
              </div>
            </div>
            <div className={styles.whyCard}>
              <TrendingUp className={styles.whyIcon} />
              <div className={styles.whyContent}>
                <h3>Scalable Solutions</h3>
                <p>We build with the future in mind, ensuring our solutions grow seamlessly with your business.</p>
              </div>
            </div>
            <div className={styles.whyCard}>
              <Shield className={styles.whyIcon} />
              <div className={styles.whyContent}>
                <h3>Security First</h3>
                <p>
                  Your data and systems are protected with industry-leading security practices and compliance standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

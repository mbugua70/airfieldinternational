import { useScrollAnimation } from '@hooks/useScrollAnimation'
import { Container, SectionTitle, Card, Icon } from '@components/ui'
import { StatsSection } from '@components/about'
import styles from './AboutPage.module.css'

const values = [
  {
    icon: 'check',
    title: 'Excellence',
    description: 'We strive for excellence in every project, ensuring the highest quality standards.',
  },
  {
    icon: 'check',
    title: 'Integrity',
    description: 'Honest and transparent dealings with our clients and partners.',
  },
  {
    icon: 'check',
    title: 'Innovation',
    description: 'Embracing new technologies and approaches to deliver cutting-edge solutions.',
  },
  {
    icon: 'check',
    title: 'Customer Focus',
    description: 'Your success is our priority. We go the extra mile to exceed expectations.',
  },
]

export default function AboutPage() {
  const storyRef = useScrollAnimation<HTMLDivElement>({ animation: 'fadeInUp' })
  const missionRef = useScrollAnimation<HTMLDivElement>({ animation: 'slideInLeft' })
  const valuesRef = useScrollAnimation<HTMLDivElement>({ animation: 'slideInRight' })

  return (
    <>
      <section className={styles.hero}>
        <Container>
          <SectionTitle
            badge="About Us"
            title="Your Trusted IT Partner"
            subtitle="For over 15 years, we've been delivering enterprise-grade IT solutions to businesses across East Africa."
          />
        </Container>
      </section>

      <StatsSection />

      <section className={styles.story}>
        <Container>
          <div ref={storyRef} className={styles.storyContent}>
            <h2 className={styles.storyTitle}>Our Story</h2>
            <div className={styles.storyText}>
              <p>
                Founded in 2008, Airfield International began as a small IT
                services company with a vision to bring world-class technology
                solutions to businesses in Kenya. Over the years, we've grown
                into a leading IT solutions provider, serving clients across
                multiple industries.
              </p>
              <p>
                Our journey has been marked by continuous learning, adaptation
                to emerging technologies, and an unwavering commitment to our
                clients' success. Today, we're proud to have completed over 500
                projects and built lasting relationships with more than 200
                businesses.
              </p>
              <p>
                What sets us apart is our holistic approach to IT. We don't just
                sell products or services – we become partners in our clients'
                digital transformation journey, providing ongoing support and
                expertise to ensure their technology investments deliver real
                business value.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.mission}>
        <Container>
          <div className={styles.missionGrid}>
            <div ref={missionRef} className={styles.missionContent}>
              <h2 className={styles.missionTitle}>Our Mission</h2>
              <p className={styles.missionText}>
                To empower businesses with reliable, innovative IT solutions
                that drive growth and operational excellence. We're committed to
                making enterprise-grade technology accessible to organizations
                of all sizes.
              </p>
            </div>

            <Card ref={valuesRef} className={styles.valuesCard}>
              <h3 className={styles.valuesTitle}>Our Values</h3>
              <div className={styles.valuesList}>
                {values.map((value, index) => (
                  <div key={index} className={styles.value}>
                    <div className={styles.valueIcon}>
                      <Icon name={value.icon} size={16} />
                    </div>
                    <div>
                      <h4 className={styles.valueName}>{value.title}</h4>
                      <p className={styles.valueDescription}>{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </section>
    </>
  )
}

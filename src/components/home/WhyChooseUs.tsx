import { useScrollAnimation } from '@hooks/useScrollAnimation'
import { Container, SectionTitle, Icon } from '@components/ui'
import styles from './WhyChooseUs.module.css'

const features = [
  {
    icon: 'check',
    title: 'Expert Team',
    description: 'Certified professionals with deep expertise in enterprise IT solutions.',
  },
  {
    icon: 'check',
    title: 'Quality Products',
    description: 'Premium hardware and equipment from world-renowned manufacturers.',
  },
  {
    icon: 'check',
    title: '24/7 Support',
    description: 'Round-the-clock technical support to keep your systems running.',
  },
  {
    icon: 'check',
    title: 'Custom Solutions',
    description: 'Tailored approaches designed to meet your specific business needs.',
  },
  {
    icon: 'check',
    title: 'Competitive Pricing',
    description: 'Enterprise-grade solutions at prices that work for your budget.',
  },
  {
    icon: 'check',
    title: 'Fast Deployment',
    description: 'Efficient project delivery with minimal disruption to your operations.',
  },
]

export default function WhyChooseUs() {
  const leftRef = useScrollAnimation<HTMLDivElement>({ animation: 'slideInLeft' })
  const rightRef = useScrollAnimation<HTMLDivElement>({ animation: 'slideInRight' })

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <div ref={leftRef} className={styles.content}>
            <SectionTitle
              badge="Why Choose Us"
              title="Your Trusted IT Partner"
              subtitle="We combine technical excellence with personalized service to deliver IT solutions that truly make a difference."
              align="left"
            />

            <div className={styles.features}>
              {features.map((feature, index) => (
                <div key={index} className={styles.feature}>
                  <div className={styles.iconWrapper}>
                    <Icon name={feature.icon} size={16} />
                  </div>
                  <div>
                    <h4 className={styles.featureTitle}>{feature.title}</h4>
                    <p className={styles.featureDescription}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div ref={rightRef} className={styles.visual}>
            <div className={styles.imageCard}>
              <div className={styles.imagePlaceholder}>
                <span>Professional IT Team</span>
              </div>
            </div>
            <div className={styles.floatingCard}>
              <div className={styles.floatingContent}>
                <span className={styles.floatingNumber}>15+</span>
                <span className={styles.floatingText}>Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

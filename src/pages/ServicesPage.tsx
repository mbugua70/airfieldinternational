import { services } from '@data/services'
import { useStaggerAnimation } from '@hooks/useScrollAnimation'
import { Container, SectionTitle, Button } from '@components/ui'
import { ServiceCard } from '@components/services'
import styles from './ServicesPage.module.css'

export default function ServicesPage() {
  const gridRef = useStaggerAnimation<HTMLDivElement>({ stagger: 0.1 })

  return (
    <>
      <section className={styles.hero}>
        <Container>
          <SectionTitle
            badge="Our Services"
            title="Comprehensive IT Solutions"
            subtitle="From infrastructure design to ongoing support, we provide end-to-end solutions tailored to your business needs."
          />
        </Container>
      </section>

      <section className={styles.services}>
        <Container>
          <div ref={gridRef} className={styles.grid}>
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.cta}>
        <Container>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Need a Custom Solution?</h2>
            <p className={styles.ctaText}>
              Our team of experts can design and implement solutions tailored to
              your specific business requirements.
            </p>
            <Button to="/contact" size="lg">
              Get in Touch
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}

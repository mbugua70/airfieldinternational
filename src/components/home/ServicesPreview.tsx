import { Link } from 'react-router-dom'
import { services } from '@data/services'
import { useStaggerAnimation } from '@hooks/useScrollAnimation'
import { Container, SectionTitle, Card, Icon, Button } from '@components/ui'
import styles from './ServicesPreview.module.css'

export default function ServicesPreview() {
  const gridRef = useStaggerAnimation<HTMLDivElement>({ stagger: 0.1 })

  return (
    <section className={styles.section}>
      <Container>
        <SectionTitle
          badge="Our Services"
          title="Comprehensive IT Solutions"
          subtitle="From infrastructure design to ongoing support, we provide end-to-end solutions tailored to your business needs."
        />

        <div ref={gridRef} className={styles.grid}>
          {services.slice(0, 4).map((service) => (
            <Card key={service.id} className={styles.card}>
              <div className={styles.iconWrapper}>
                <Icon name={service.icon} size={28} />
              </div>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
              <Link to="/services" className={styles.link}>
                Learn more
                <Icon name="arrowRight" size={16} />
              </Link>
            </Card>
          ))}
        </div>

        <div className={styles.cta}>
          <Button to="/services" variant="secondary">
            View All Services
          </Button>
        </div>
      </Container>
    </section>
  )
}

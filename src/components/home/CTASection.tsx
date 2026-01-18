import { useScrollAnimation } from '@hooks/useScrollAnimation'
import { Container, Button } from '@components/ui'
import styles from './CTASection.module.css'

export default function CTASection() {
  const ref = useScrollAnimation<HTMLDivElement>({ animation: 'scaleIn' })

  return (
    <section className={styles.section}>
      <Container>
        <div ref={ref} className={styles.card}>
          <div className={styles.background}>
            <div className={styles.gradient} />
          </div>

          <div className={styles.content}>
            <h2 className={styles.title}>
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className={styles.description}>
              Get in touch with our team for a free consultation and discover
              how we can help your business thrive.
            </p>
            <div className={styles.buttons}>
              <Button to="/contact" size="lg">
                Get a Free Quote
              </Button>
              <Button href="tel:+254700123456" variant="secondary" size="lg">
                Call Us Now
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

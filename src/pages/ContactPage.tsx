import { contactInfo, officeHours } from '@data/contact'
import { useStaggerAnimation } from '@hooks/useScrollAnimation'
import { Container, SectionTitle, Card, Icon } from '@components/ui'
import { ContactCard } from '@components/contact'
import styles from './ContactPage.module.css'

export default function ContactPage() {
  const cardsRef = useStaggerAnimation<HTMLDivElement>({ stagger: 0.1 })

  return (
    <>
      <section className={styles.hero}>
        <Container>
          <SectionTitle
            badge="Contact Us"
            title="Get in Touch"
            subtitle="Have a question or need a quote? We'd love to hear from you."
          />
        </Container>
      </section>

      <section className={styles.contact}>
        <Container>
          <div ref={cardsRef} className={styles.grid}>
            {contactInfo.map((info) => (
              <ContactCard key={info.type} info={info} />
            ))}
          </div>

          <Card className={styles.hoursCard}>
            <div className={styles.hoursIcon}>
              <Icon name="support" size={32} />
            </div>
            <h3 className={styles.hoursTitle}>Office Hours</h3>
            <div className={styles.hoursList}>
              <p>{officeHours.weekdays}</p>
              <p>{officeHours.saturday}</p>
              <p>{officeHours.sunday}</p>
              <p className={styles.support}>{officeHours.support}</p>
            </div>
          </Card>

          <div className={styles.map}>
            <Card padding="none" className={styles.mapCard}>
              <div className={styles.mapPlaceholder}>
                <Icon name="location" size={48} />
                <span>Map Location</span>
                <p>Westlands Business Park, Nairobi, Kenya</p>
              </div>
            </Card>
          </div>
        </Container>
      </section>
    </>
  )
}

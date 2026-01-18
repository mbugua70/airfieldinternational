import { Link } from 'react-router-dom'
import { navigation } from '@data/navigation'
import { services } from '@data/services'
import { COMPANY_NAME, COMPANY_TAGLINE, SOCIAL_LINKS } from '@utils/constants'
import { contactInfo } from '@data/contact'
import { Container, Icon } from '@components/ui'
import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              <img
                src="/image/logo.jpeg"
                alt={COMPANY_NAME}
                className={styles.logoImage}
              />
            </Link>
            <p className={styles.tagline}>{COMPANY_TAGLINE}</p>
            <p className={styles.description}>
              Your trusted partner for enterprise IT solutions, networking, security,
              and hardware services across East Africa.
            </p>
            <div className={styles.social}>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Icon name="facebook" size={18} />
              </a>
              <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Icon name="twitter" size={18} />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Icon name="linkedin" size={18} />
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Icon name="instagram" size={18} />
              </a>
            </div>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Quick Links</h4>
            <ul className={styles.links}>
              {navigation.map((item) => (
                <li key={item.path}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Services</h4>
            <ul className={styles.links}>
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link to="/services">{service.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Contact</h4>
            <ul className={styles.contact}>
              {contactInfo.map((info) => (
                <li key={info.type}>
                  <Icon name={info.icon} size={18} />
                  {info.href ? (
                    <a href={info.href}>{info.value}</a>
                  ) : (
                    <span>{info.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {currentYear} {COMPANY_NAME}. All rights reserved.</p>
          <div className={styles.legal}>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}

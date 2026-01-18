import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { navigation } from '@data/navigation'
import { COMPANY_NAME, COMPANY_TAGLINE, SOCIAL_LINKS } from '@utils/constants'
import { Icon, Button } from '@components/ui'
import styles from './MobileMenu.module.css'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <div
        className={`${styles.backdrop} ${isOpen ? styles.open : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
        <div className={styles.header}>
          <div className={styles.brand}>
            <img
              src="/image/logo.jpeg"
              alt={COMPANY_NAME}
              className={styles.logoImage}
            />
          </div>
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close menu"
          >
            <Icon name="close" size={24} />
          </button>
        </div>

        <p className={styles.tagline}>{COMPANY_TAGLINE}</p>

        <nav className={styles.nav}>
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
              onClick={onClose}
            >
              {item.label}
              <Icon name="chevronRight" size={20} />
            </NavLink>
          ))}
        </nav>

        <div className={styles.footer}>
          <Button to="/contact" fullWidth onClick={onClose}>
            Get a Free Quote
          </Button>

          <div className={styles.social}>
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer">
              <Icon name="facebook" size={20} />
            </a>
            <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer">
              <Icon name="twitter" size={20} />
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
              <Icon name="linkedin" size={20} />
            </a>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer">
              <Icon name="instagram" size={20} />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navigation } from '@data/navigation'
import { Icon, Button } from '@components/ui'
import MobileMenu from './MobileMenu'
import styles from './Header.module.css'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          <Link to="/" className={styles.logo}>
            <img
              src="/image/logo.jpeg"
              alt="Air Field Int' Connection"
              className={styles.logoImage}
            />
          </Link>

          <nav className={styles.nav}>
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.active : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className={styles.actions}>
            <Button to="/contact" size="sm">
              Get Quote
            </Button>
            <button
              className={styles.menuButton}
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Icon name="menu" size={24} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  )
}

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { COMPANY_TAGLINE } from '@utils/constants'
import { Container, Button } from '@components/ui'
import styles from './Hero.module.css'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.from('.hero-title', {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
      })
        .from('.hero-subtitle', {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        }, '-=0.5')
        .from('.hero-cta', {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
        }, '-=0.4')
        .from('.hero-stats', {
          y: 40,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',
        }, '-=0.2')
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className={styles.hero}>
      <div className={styles.background}>
        <div className={styles.gradient} />
        <div className={styles.grid} />
      </div>

      <Container>
        <div className={styles.content}>
          <h1 className={`${styles.title} hero-title`}>
            <span className="text-gradient">{COMPANY_TAGLINE}</span>
            <br />
            <span className={styles.titleSecondary}>Enterprise IT Solutions & Services</span>
          </h1>

          <p className={`${styles.subtitle} hero-subtitle`}>
            From advanced networking infrastructure to comprehensive security systems,
            we deliver tailored IT solutions that drive your business forward.
          </p>

          <div className={`${styles.ctas} hero-cta`}>
            <Button to="/contact" size="lg" className="hero-cta">
              Get Started
            </Button>
            <Button to="/services" variant="secondary" size="lg" className="hero-cta">
              Explore Services
            </Button>
          </div>

          <div className={`${styles.stats} hero-stats`}>
            <div className={styles.stat}>
              <span className={styles.statValue}>15+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.stat}>
              <span className={styles.statValue}>500+</span>
              <span className={styles.statLabel}>Projects Delivered</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.stat}>
              <span className={styles.statValue}>24/7</span>
              <span className={styles.statLabel}>Support Available</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

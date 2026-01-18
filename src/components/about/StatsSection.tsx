import { companyStats } from '@utils/constants'
import { useStaggerAnimation } from '@hooks/useScrollAnimation'
import { Container, AnimatedCounter, GlassPanel } from '@components/ui'
import styles from './StatsSection.module.css'

export default function StatsSection() {
  const ref = useStaggerAnimation<HTMLDivElement>({ stagger: 0.15 })

  return (
    <section className={styles.section}>
      <Container>
        <GlassPanel className={styles.panel}>
          <div ref={ref} className={styles.grid}>
            {companyStats.map((stat, index) => (
              <div key={index} className={styles.stat}>
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              </div>
            ))}
          </div>
        </GlassPanel>
      </Container>
    </section>
  )
}

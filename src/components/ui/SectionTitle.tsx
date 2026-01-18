import { type ReactNode } from 'react'
import { useScrollAnimation } from '@hooks/useScrollAnimation'
import styles from './SectionTitle.module.css'

interface SectionTitleProps {
  title: string
  subtitle?: string
  badge?: string
  align?: 'left' | 'center' | 'right'
  children?: ReactNode
}

export default function SectionTitle({
  title,
  subtitle,
  badge,
  align = 'center',
  children,
}: SectionTitleProps) {
  const ref = useScrollAnimation<HTMLDivElement>({ animation: 'fadeInUp' })

  return (
    <div ref={ref} className={`${styles.wrapper} ${styles[align]}`}>
      {badge && <span className={styles.badge}>{badge}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      {children}
    </div>
  )
}

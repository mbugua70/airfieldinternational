import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useIntersectionObserver } from '@hooks/useIntersectionObserver'
import styles from './AnimatedCounter.module.css'

gsap.registerPlugin(ScrollTrigger)

interface AnimatedCounterProps {
  value: number
  suffix?: string
  label: string
  duration?: number
}

export default function AnimatedCounter({
  value,
  suffix = '',
  label,
  duration = 2,
}: AnimatedCounterProps) {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.5,
    freezeOnceVisible: true,
  })
  const numberRef = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (isVisible && numberRef.current && !hasAnimated.current) {
      hasAnimated.current = true
      gsap.fromTo(
        numberRef.current,
        { innerText: 0 },
        {
          innerText: value,
          duration,
          ease: 'power2.out',
          snap: { innerText: 1 },
        }
      )
    }
  }, [isVisible, value, duration])

  return (
    <div ref={ref} className={styles.counter}>
      <div className={styles.value}>
        <span ref={numberRef}>0</span>
        {suffix && <span className={styles.suffix}>{suffix}</span>}
      </div>
      <p className={styles.label}>{label}</p>
    </div>
  )
}

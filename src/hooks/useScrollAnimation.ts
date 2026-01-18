import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface UseScrollAnimationOptions {
  animation?: 'fadeInUp' | 'fadeIn' | 'scaleIn' | 'slideInLeft' | 'slideInRight'
  duration?: number
  delay?: number
  start?: string
  stagger?: number
}

export function useScrollAnimation<T extends HTMLElement>(
  options: UseScrollAnimationOptions = {}
) {
  const ref = useRef<T>(null)
  const {
    animation = 'fadeInUp',
    duration = 0.8,
    delay = 0,
    start = 'top 90%',
  } = options

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const animationProps = {
      fadeInUp: { y: 40, opacity: 0 },
      fadeIn: { opacity: 0 },
      scaleIn: { scale: 0.95, opacity: 0 },
      slideInLeft: { x: -40, opacity: 0 },
      slideInRight: { x: 40, opacity: 0 },
    }

    const finalProps = {
      fadeInUp: { y: 0, opacity: 1 },
      fadeIn: { opacity: 1 },
      scaleIn: { scale: 1, opacity: 1 },
      slideInLeft: { x: 0, opacity: 1 },
      slideInRight: { x: 0, opacity: 1 },
    }

    // Set initial state
    gsap.set(element, animationProps[animation])

    const ctx = gsap.context(() => {
      gsap.to(element, {
        ...finalProps[animation],
        duration,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start,
          once: true,
        },
      })
    })

    return () => ctx.revert()
  }, [animation, duration, delay, start])

  return ref
}

export function useStaggerAnimation<T extends HTMLElement>(
  options: UseScrollAnimationOptions = {}
) {
  const ref = useRef<T>(null)
  const {
    duration = 0.6,
    delay = 0,
    start = 'top 90%',
    stagger = 0.1,
  } = options

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const children = Array.from(container.children)
    if (children.length === 0) return

    // Set initial state for all children
    gsap.set(children, { y: 30, opacity: 0 })

    const ctx = gsap.context(() => {
      gsap.to(children, {
        y: 0,
        opacity: 1,
        duration,
        delay,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container,
          start,
          once: true,
        },
      })
    })

    return () => ctx.revert()
  }, [duration, delay, start, stagger])

  return ref
}

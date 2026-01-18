import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const fadeInUp = (element: Element, delay = 0) => {
  return gsap.from(element, {
    y: 60,
    opacity: 0,
    duration: 0.8,
    delay,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
  })
}

export const fadeIn = (element: Element, delay = 0) => {
  return gsap.from(element, {
    opacity: 0,
    duration: 0.6,
    delay,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
  })
}

export const staggerFadeInUp = (elements: Element[], stagger = 0.1) => {
  return gsap.from(elements, {
    y: 40,
    opacity: 0,
    duration: 0.6,
    stagger,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: elements[0],
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
  })
}

export const scaleIn = (element: Element, delay = 0) => {
  return gsap.from(element, {
    scale: 0.9,
    opacity: 0,
    duration: 0.5,
    delay,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
  })
}

export const slideInLeft = (element: Element, delay = 0) => {
  return gsap.from(element, {
    x: -60,
    opacity: 0,
    duration: 0.8,
    delay,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
  })
}

export const slideInRight = (element: Element, delay = 0) => {
  return gsap.from(element, {
    x: 60,
    opacity: 0,
    duration: 0.8,
    delay,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
  })
}

export const heroAnimation = (container: Element) => {
  const tl = gsap.timeline()

  const title = container.querySelector('.hero-title')
  const subtitle = container.querySelector('.hero-subtitle')
  const ctas = container.querySelectorAll('.hero-cta')

  if (title) {
    tl.from(title, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'power4.out',
    })
  }

  if (subtitle) {
    tl.from(subtitle, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.5')
  }

  if (ctas.length) {
    tl.from(ctas, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power3.out',
    }, '-=0.4')
  }

  return tl
}

export const counterAnimation = (element: Element, target: number) => {
  return gsap.to(element, {
    innerText: target,
    duration: 2,
    snap: { innerText: 1 },
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  })
}

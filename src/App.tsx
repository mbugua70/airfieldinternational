import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Layout from '@components/layout/Layout'
import HomePage from '@pages/HomePage'
import ServicesPage from '@pages/ServicesPage'
import ProductsPage from '@pages/ProductsPage'
import GalleryPage from '@pages/GalleryPage'
import AboutPage from '@pages/AboutPage'
import ContactPage from '@pages/ContactPage'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const location = useLocation()
  const mainRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0)

    // Refresh ScrollTrigger after a short delay to let content render
    const timer = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 100)

    return () => clearTimeout(timer)
  }, [location.pathname])

  useEffect(() => {
    if (mainRef.current) {
      gsap.fromTo(
        mainRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
      )
    }
  }, [location.pathname])

  return (
    <Layout>
      <div ref={mainRef} key={location.pathname}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Layout>
  )
}

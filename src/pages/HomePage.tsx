import {
  Hero,
  ServicesPreview,
  FeaturedProducts,
  WhyChooseUs,
  Testimonials,
  CTASection,
} from '@components/home'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <FeaturedProducts />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </>
  )
}

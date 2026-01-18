import { useState } from 'react'
import { testimonials } from '@data/testimonials'
import { useScrollAnimation } from '@hooks/useScrollAnimation'
import { Container, SectionTitle, Card, Icon } from '@components/ui'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const ref = useScrollAnimation<HTMLDivElement>({ animation: 'fadeInUp' })

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const activeTestimonial = testimonials[activeIndex]

  return (
    <section className={styles.section}>
      <Container>
        <SectionTitle
          badge="Testimonials"
          title="What Our Clients Say"
          subtitle="Don't just take our word for it - hear from the businesses we've helped succeed."
        />

        <div ref={ref} className={styles.carousel}>
          <Card className={styles.testimonial}>
            <Icon name="quote" size={48} className={styles.quoteIcon} />

            <p className={styles.content}>{activeTestimonial.content}</p>

            <div className={styles.rating}>
              {Array.from({ length: activeTestimonial.rating }).map((_, i) => (
                <Icon key={i} name="star" size={20} className={styles.star} />
              ))}
            </div>

            <div className={styles.author}>
              <div className={styles.avatar}>
                {activeTestimonial.name.charAt(0)}
              </div>
              <div>
                <h4 className={styles.name}>{activeTestimonial.name}</h4>
                <p className={styles.role}>
                  {activeTestimonial.role} at {activeTestimonial.company}
                </p>
              </div>
            </div>
          </Card>

          <div className={styles.navigation}>
            <button
              className={styles.navButton}
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <Icon name="chevronLeft" size={20} />
            </button>

            <div className={styles.dots}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${index === activeIndex ? styles.activeDot : ''}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              className={styles.navButton}
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <Icon name="chevronRight" size={20} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}

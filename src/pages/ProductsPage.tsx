import { useState } from 'react'
import { products, productCategories } from '@data/products'
import { useStaggerAnimation } from '@hooks/useScrollAnimation'
import { Container, SectionTitle, Button } from '@components/ui'
import { ProductCard, CategoryFilter } from '@components/products'
import styles from './ProductsPage.module.css'

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const gridRef = useStaggerAnimation<HTMLDivElement>({ stagger: 0.08 })

  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter((product) => product.category === activeCategory)

  return (
    <>
      <section className={styles.hero}>
        <Container>
          <SectionTitle
            badge="Products"
            title="Quality Hardware & Equipment"
            subtitle="Enterprise-grade networking, security, and IT equipment from trusted manufacturers."
          />
        </Container>
      </section>

      <section className={styles.products}>
        <Container>
          <CategoryFilter
            categories={productCategories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <div ref={gridRef} className={styles.grid} key={activeCategory}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.cta}>
        <Container>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Need a Quote?</h2>
            <p className={styles.ctaText}>
              Contact us for competitive pricing on bulk orders and custom
              configurations.
            </p>
            <Button to="/contact" size="lg">
              Request a Quote
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}

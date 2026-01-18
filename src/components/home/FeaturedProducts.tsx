import { products } from '@data/products'
import { useStaggerAnimation } from '@hooks/useScrollAnimation'
import { Container, SectionTitle, Card, Button } from '@components/ui'
import styles from './FeaturedProducts.module.css'

export default function FeaturedProducts() {
  const gridRef = useStaggerAnimation<HTMLDivElement>({ stagger: 0.1 })

  const featuredProducts = products.slice(0, 6)

  return (
    <section className={styles.section}>
      <Container>
        <SectionTitle
          badge="Products"
          title="Quality Hardware & Equipment"
          subtitle="Enterprise-grade networking, security, and IT equipment from trusted manufacturers."
        />

        <div ref={gridRef} className={styles.grid}>
          {featuredProducts.map((product) => (
            <Card key={product.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <div className={styles.imagePlaceholder}>
                  <span>{product.category.toUpperCase()}</span>
                </div>
              </div>
              <div className={styles.content}>
                <span className={styles.category}>{product.category}</span>
                <h3 className={styles.name}>{product.name}</h3>
                <p className={styles.description}>{product.description}</p>
                <ul className={styles.features}>
                  {product.features.slice(0, 2).map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        <div className={styles.cta}>
          <Button to="/products" variant="secondary">
            View All Products
          </Button>
        </div>
      </Container>
    </section>
  )
}

import type { Product } from '@/types'
import { Card } from '@components/ui'
import styles from './ProductCard.module.css'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className={styles.card} padding="none">
      <div className={styles.imageWrapper}>
        <div className={styles.imagePlaceholder}>
          <span>{product.category.toUpperCase()}</span>
        </div>
      </div>

      <div className={styles.content}>
        <span className={styles.category}>{product.category}</span>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.description}>{product.description}</p>

        <div className={styles.features}>
          {product.features.map((feature, index) => (
            <span key={index} className={styles.feature}>
              {feature}
            </span>
          ))}
        </div>
      </div>
    </Card>
  )
}

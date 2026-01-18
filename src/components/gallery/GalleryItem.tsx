import type { GalleryItem as GalleryItemType } from '@/types'
import styles from './GalleryItem.module.css'

interface GalleryItemProps {
  item: GalleryItemType
  onClick: () => void
}

export default function GalleryItem({ item, onClick }: GalleryItemProps) {
  return (
    <button className={styles.item} onClick={onClick}>
      <div className={styles.imageWrapper}>
        <div className={styles.imagePlaceholder}>
          <span>{item.category.toUpperCase()}</span>
        </div>
        <div className={styles.overlay}>
          <h3 className={styles.title}>{item.title}</h3>
          {item.description && (
            <p className={styles.description}>{item.description}</p>
          )}
        </div>
      </div>
    </button>
  )
}

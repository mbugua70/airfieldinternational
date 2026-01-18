import { useEffect } from 'react'
import type { GalleryItem } from '@/types'
import { Icon } from '@components/ui'
import styles from './Lightbox.module.css'

interface LightboxProps {
  item: GalleryItem | null
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export default function Lightbox({ item, onClose, onPrev, onNext }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }

    if (item) {
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [item, onClose, onPrev, onNext])

  if (!item) return null

  return (
    <div className={styles.lightbox} onClick={onClose}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close">
          <Icon name="close" size={24} />
        </button>

        <button className={styles.navButton} data-position="left" onClick={onPrev} aria-label="Previous">
          <Icon name="chevronLeft" size={24} />
        </button>

        <div className={styles.imageContainer}>
          <div className={styles.imagePlaceholder}>
            <span>{item.category.toUpperCase()}</span>
          </div>
        </div>

        <button className={styles.navButton} data-position="right" onClick={onNext} aria-label="Next">
          <Icon name="chevronRight" size={24} />
        </button>

        <div className={styles.info}>
          <h3 className={styles.title}>{item.title}</h3>
          {item.description && (
            <p className={styles.description}>{item.description}</p>
          )}
        </div>
      </div>
    </div>
  )
}

import { useState, useCallback } from 'react'
import { galleryItems, galleryCategories } from '@data/gallery'
import type { GalleryItem as GalleryItemType } from '@/types'
import { useStaggerAnimation } from '@hooks/useScrollAnimation'
import { Container, SectionTitle } from '@components/ui'
import { CategoryFilter } from '@components/products'
import { GalleryItem, Lightbox } from '@components/gallery'
import styles from './GalleryPage.module.css'

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedItem, setSelectedItem] = useState<GalleryItemType | null>(null)
  const gridRef = useStaggerAnimation<HTMLDivElement>({ stagger: 0.08 })

  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory)

  const currentIndex = selectedItem
    ? filteredItems.findIndex((item) => item.id === selectedItem.id)
    : -1

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setSelectedItem(filteredItems[currentIndex - 1])
    } else {
      setSelectedItem(filteredItems[filteredItems.length - 1])
    }
  }, [currentIndex, filteredItems])

  const handleNext = useCallback(() => {
    if (currentIndex < filteredItems.length - 1) {
      setSelectedItem(filteredItems[currentIndex + 1])
    } else {
      setSelectedItem(filteredItems[0])
    }
  }, [currentIndex, filteredItems])

  return (
    <>
      <section className={styles.hero}>
        <Container>
          <SectionTitle
            badge="Our Work"
            title="Project Gallery"
            subtitle="Browse our portfolio of completed projects showcasing our expertise and quality of work."
          />
        </Container>
      </section>

      <section className={styles.gallery}>
        <Container>
          <CategoryFilter
            categories={galleryCategories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <div ref={gridRef} className={styles.grid} key={activeCategory}>
            {filteredItems.map((item) => (
              <GalleryItem
                key={item.id}
                item={item}
                onClick={() => setSelectedItem(item)}
              />
            ))}
          </div>
        </Container>
      </section>

      <Lightbox
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </>
  )
}

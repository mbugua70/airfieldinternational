import styles from './CategoryFilter.module.css'

interface Category {
  id: string
  label: string
}

interface CategoryFilterProps {
  categories: readonly Category[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export default function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className={styles.filter}>
      {categories.map((category) => (
        <button
          key={category.id}
          className={`${styles.button} ${activeCategory === category.id ? styles.active : ''}`}
          onClick={() => onCategoryChange(category.id)}
        >
          {category.label}
        </button>
      ))}
    </div>
  )
}

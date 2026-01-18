import { type ReactNode, type HTMLAttributes } from 'react'
import styles from './Card.module.css'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  hover?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

export default function Card({
  children,
  hover = true,
  padding = 'md',
  className = '',
  ...props
}: CardProps) {
  const classes = [
    styles.card,
    hover && styles.hover,
    styles[`padding-${padding}`],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

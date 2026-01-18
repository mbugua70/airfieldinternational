import { type ReactNode, type HTMLAttributes } from 'react'
import styles from './Container.module.css'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

export default function Container({
  children,
  size = 'xl',
  className = '',
  ...props
}: ContainerProps) {
  const classes = [styles.container, styles[size], className]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

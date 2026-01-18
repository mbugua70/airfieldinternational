import { type ReactNode, type HTMLAttributes } from 'react'
import styles from './GlassPanel.module.css'

interface GlassPanelProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  intensity?: 'light' | 'medium' | 'strong'
}

export default function GlassPanel({
  children,
  intensity = 'medium',
  className = '',
  ...props
}: GlassPanelProps) {
  const classes = [styles.panel, styles[intensity], className]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

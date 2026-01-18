import type { ContactInfo } from '@/types'
import { Card, Icon } from '@components/ui'
import styles from './ContactCard.module.css'

interface ContactCardProps {
  info: ContactInfo
}

export default function ContactCard({ info }: ContactCardProps) {
  const content = (
    <Card className={styles.card}>
      <div className={styles.iconWrapper}>
        <Icon name={info.icon} size={24} />
      </div>
      <h3 className={styles.label}>{info.label}</h3>
      <p className={styles.value}>{info.value}</p>
    </Card>
  )

  if (info.href) {
    return (
      <a href={info.href} className={styles.link}>
        {content}
      </a>
    )
  }

  return content
}

import type { Service } from '@/types'
import { Card, Icon } from '@components/ui'
import styles from './ServiceCard.module.css'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className={styles.card}>
      <div className={styles.iconWrapper}>
        <Icon name={service.icon} size={32} />
      </div>

      <h3 className={styles.title}>{service.title}</h3>
      <p className={styles.description}>{service.description}</p>

      <ul className={styles.features}>
        {service.features.map((feature, index) => (
          <li key={index}>
            <Icon name="check" size={16} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </Card>
  )
}

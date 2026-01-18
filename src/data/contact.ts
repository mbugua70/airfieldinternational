import type { ContactInfo } from '@/types'

export const contactInfo: ContactInfo[] = [
  {
    type: 'phone',
    icon: 'phone',
    label: 'Phone',
    value: '+254 700 123 456',
    href: 'tel:+254700123456',
  },
  {
    type: 'email',
    icon: 'mail',
    label: 'Email',
    value: 'info@airfieldinternational.com',
    href: 'mailto:info@airfieldinternational.com',
  },
  {
    type: 'address',
    icon: 'location',
    label: 'Address',
    value: 'Westlands Business Park, Nairobi, Kenya',
  },
]

export const officeHours = {
  weekdays: 'Monday - Friday: 8:00 AM - 6:00 PM',
  saturday: 'Saturday: 9:00 AM - 2:00 PM',
  sunday: 'Sunday: Closed',
  support: '24/7 Emergency Support Available',
}

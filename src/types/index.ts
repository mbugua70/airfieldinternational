export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  image?: string
}

export interface Product {
  id: string
  name: string
  description: string
  category: ProductCategory
  image: string
  features: string[]
}

export type ProductCategory = 'networking' | 'cctv' | 'hardware' | 'accessories'

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatar?: string
  rating: number
}

export interface GalleryItem {
  id: string
  title: string
  category: GalleryCategory
  image: string
  description?: string
}

export type GalleryCategory = 'networking' | 'cctv' | 'server-rooms' | 'installations'

export interface NavItem {
  label: string
  path: string
}

export interface ContactInfo {
  type: 'phone' | 'email' | 'address'
  icon: string
  label: string
  value: string
  href?: string
}

export interface Stat {
  value: number
  suffix?: string
  label: string
}

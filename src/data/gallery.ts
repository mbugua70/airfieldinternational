import type { GalleryItem } from '@/types'

export const galleryItems: GalleryItem[] = [
  // Server Rooms
  {
    id: 'sr-1',
    title: 'Enterprise Data Center',
    category: 'server-rooms',
    image: '/images/gallery/data-center-1.jpg',
    description: 'Complete data center build-out with redundant power and cooling.',
  },
  {
    id: 'sr-2',
    title: 'Server Room Upgrade',
    category: 'server-rooms',
    image: '/images/gallery/server-room-1.jpg',
    description: 'Modern server room with efficient cable management.',
  },
  {
    id: 'sr-3',
    title: 'Rack Installation',
    category: 'server-rooms',
    image: '/images/gallery/rack-install-1.jpg',
    description: 'Professional rack mounting and cable organization.',
  },
  // Networking
  {
    id: 'net-1',
    title: 'Core Network Switch',
    category: 'networking',
    image: '/images/gallery/network-1.jpg',
    description: 'High-performance core switching infrastructure.',
  },
  {
    id: 'net-2',
    title: 'Wireless Deployment',
    category: 'networking',
    image: '/images/gallery/wireless-1.jpg',
    description: 'Campus-wide WiFi 6 access point installation.',
  },
  {
    id: 'net-3',
    title: 'Patch Panel Setup',
    category: 'networking',
    image: '/images/gallery/patch-panel-1.jpg',
    description: 'Organized patch panel with clear labeling.',
  },
  // CCTV
  {
    id: 'cctv-1',
    title: 'Retail Security',
    category: 'cctv',
    image: '/images/gallery/cctv-retail-1.jpg',
    description: '360-degree coverage for retail environment.',
  },
  {
    id: 'cctv-2',
    title: 'Warehouse Monitoring',
    category: 'cctv',
    image: '/images/gallery/cctv-warehouse-1.jpg',
    description: 'Large-scale warehouse surveillance system.',
  },
  {
    id: 'cctv-3',
    title: 'Perimeter Security',
    category: 'cctv',
    image: '/images/gallery/cctv-perimeter-1.jpg',
    description: 'PTZ cameras for perimeter monitoring.',
  },
  // Installations
  {
    id: 'inst-1',
    title: 'Cable Tray System',
    category: 'installations',
    image: '/images/gallery/cable-tray-1.jpg',
    description: 'Professional cable tray installation.',
  },
  {
    id: 'inst-2',
    title: 'Fiber Optic Run',
    category: 'installations',
    image: '/images/gallery/fiber-run-1.jpg',
    description: 'Multi-mode fiber backbone installation.',
  },
  {
    id: 'inst-3',
    title: 'Office Network',
    category: 'installations',
    image: '/images/gallery/office-network-1.jpg',
    description: 'Complete office network infrastructure.',
  },
]

export const galleryCategories = [
  { id: 'all', label: 'All' },
  { id: 'server-rooms', label: 'Server Rooms' },
  { id: 'networking', label: 'Networking' },
  { id: 'cctv', label: 'CCTV' },
  { id: 'installations', label: 'Installations' },
] as const

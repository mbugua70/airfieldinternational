import type { Product } from '@/types'

export const products: Product[] = [
  // Networking
  {
    id: 'enterprise-router',
    name: 'Enterprise Router Pro',
    description: 'High-performance router with advanced security features and VLAN support.',
    category: 'networking',
    image: '/images/products/router.jpg',
    features: ['10Gbps throughput', 'Advanced firewall', 'VPN support', 'Cloud management'],
  },
  {
    id: 'managed-switch-48',
    name: 'Managed Switch 48-Port',
    description: 'Enterprise-grade managed switch with PoE+ for demanding network environments.',
    category: 'networking',
    image: '/images/products/switch.jpg',
    features: ['48 PoE+ ports', 'Layer 3 routing', 'Stacking capable', 'SNMP monitoring'],
  },
  {
    id: 'wifi-6-ap',
    name: 'WiFi 6 Access Point',
    description: 'Next-generation wireless access point for high-density environments.',
    category: 'networking',
    image: '/images/products/wifi-ap.jpg',
    features: ['WiFi 6 (802.11ax)', '4x4 MU-MIMO', 'Seamless roaming', 'Band steering'],
  },
  // CCTV
  {
    id: 'dome-camera-4k',
    name: '4K Dome Camera',
    description: 'Vandal-resistant dome camera with exceptional clarity and night vision.',
    category: 'cctv',
    image: '/images/products/dome-camera.jpg',
    features: ['4K resolution', '30m IR range', 'WDR technology', 'IP67 rated'],
  },
  {
    id: 'ptz-camera',
    name: 'PTZ Speed Dome',
    description: 'Pan-tilt-zoom camera with 30x optical zoom for wide area coverage.',
    category: 'cctv',
    image: '/images/products/ptz-camera.jpg',
    features: ['30x optical zoom', '360° rotation', 'Auto-tracking', 'Smart analytics'],
  },
  {
    id: 'nvr-32ch',
    name: 'NVR 32-Channel',
    description: 'Network video recorder with advanced analytics and RAID storage.',
    category: 'cctv',
    image: '/images/products/nvr.jpg',
    features: ['32 channels', '8 HDD bays', 'AI analytics', 'Remote access'],
  },
  // Hardware
  {
    id: 'tower-server',
    name: 'Tower Server X500',
    description: 'Powerful tower server ideal for small to medium businesses.',
    category: 'hardware',
    image: '/images/products/tower-server.jpg',
    features: ['Dual Xeon CPU', '128GB RAM max', 'Hot-swap drives', 'Redundant PSU'],
  },
  {
    id: 'rack-server',
    name: 'Rack Server R750',
    description: 'High-density rack server for data center and enterprise deployments.',
    category: 'hardware',
    image: '/images/products/rack-server.jpg',
    features: ['2U form factor', '256GB RAM max', 'NVMe storage', 'iDRAC management'],
  },
  {
    id: 'ups-3000va',
    name: 'Smart UPS 3000VA',
    description: 'Reliable uninterruptible power supply with extended runtime.',
    category: 'hardware',
    image: '/images/products/ups.jpg',
    features: ['3000VA/2700W', 'LCD display', 'Hot-swap batteries', 'Network card'],
  },
  // Accessories
  {
    id: 'patch-panel-24',
    name: 'Patch Panel 24-Port',
    description: 'Category 6A patch panel for structured cabling systems.',
    category: 'accessories',
    image: '/images/products/patch-panel.jpg',
    features: ['Cat6A rated', 'Keystone design', 'Cable management', 'Numbered ports'],
  },
  {
    id: 'server-rack-42u',
    name: 'Server Rack 42U',
    description: 'Premium server cabinet with excellent cable management.',
    category: 'accessories',
    image: '/images/products/server-rack.jpg',
    features: ['42U capacity', 'Perforated doors', 'Cable management', 'Casters included'],
  },
  {
    id: 'fiber-patch-cords',
    name: 'Fiber Patch Cord Kit',
    description: 'High-quality LC-LC fiber optic patch cords in various lengths.',
    category: 'accessories',
    image: '/images/products/fiber-cables.jpg',
    features: ['LC-LC duplex', 'OS2 single-mode', 'Multiple lengths', 'Low insertion loss'],
  },
]

export const productCategories = [
  { id: 'all', label: 'All Products' },
  { id: 'networking', label: 'Networking' },
  { id: 'cctv', label: 'CCTV' },
  { id: 'hardware', label: 'Hardware' },
  { id: 'accessories', label: 'Accessories' },
] as const

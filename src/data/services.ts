import type { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'networking',
    title: 'Network Solutions',
    description: 'Enterprise-grade networking infrastructure design, implementation, and management. We build robust networks that scale with your business.',
    icon: 'network',
    features: [
      'Network design & architecture',
      'Wireless network deployment',
      'Network security implementation',
      'Performance optimization',
      'Remote monitoring & management',
    ],
  },
  {
    id: 'cctv',
    title: 'CCTV & Security',
    description: 'Advanced surveillance systems with HD cameras, smart analytics, and remote monitoring capabilities to protect your assets 24/7.',
    icon: 'camera',
    features: [
      'HD & 4K camera systems',
      'Smart video analytics',
      'Remote viewing & alerts',
      'Access control integration',
      'Cloud storage solutions',
    ],
  },
  {
    id: 'cabling',
    title: 'Structured Cabling',
    description: 'Professional cable management and structured cabling solutions for reliable, high-speed data transmission across your facility.',
    icon: 'cable',
    features: [
      'Cat6/Cat6a installations',
      'Fiber optic cabling',
      'Cable management systems',
      'Testing & certification',
      'Documentation & labeling',
    ],
  },
  {
    id: 'it-support',
    title: 'IT Support',
    description: 'Comprehensive IT support services including helpdesk, maintenance, and proactive system management to keep your operations running.',
    icon: 'support',
    features: [
      '24/7 helpdesk support',
      'Proactive maintenance',
      'System administration',
      'Backup & recovery',
      'Security updates & patches',
    ],
  },
  {
    id: 'hardware',
    title: 'Hardware Solutions',
    description: 'Quality IT hardware procurement, installation, and lifecycle management. From servers to workstations, we have you covered.',
    icon: 'server',
    features: [
      'Server deployment',
      'Workstation setup',
      'Hardware procurement',
      'Lifecycle management',
      'Warranty support',
    ],
  },
]

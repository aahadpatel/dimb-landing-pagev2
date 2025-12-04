import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'

const siteConfig = {
  logo: undefined,
  seo: {
    title: 'DimB - Product Intelligence for Sales',
    description:
      'Unlock the full value of your offering for every customer. Product intelligence at your reps fingertips.',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'features',
        label: 'Features',
      },
      {
        id: 'faq',
        label: 'FAQ',
      },
      {
        label: 'Contact',
        href: 'mailto:suchin@dimb.app',
      },
    ],
  },
  footer: {
    copyright: (
      <>DimB © {new Date().getFullYear()}. Product Intelligence for Sales.</>
    ),
    links: [
      {
        href: 'mailto:suchin@dimb.app',
        label: 'Contact: suchin@dimb.app',
      },
      {
        href: 'tel:+12819404284',
        label: '(281) 940-4284',
      },
    ],
  },
  signup: {
    title: 'Ready to unlock your offering?',
    features: [
      {
        icon: FiCheck,
        title: 'Dynamic Offering Management',
        description:
          'Automatically curate and maintain offerings for categories and strategic accounts.',
      },
      {
        icon: FiCheck,
        title: 'Real-Time Collaboration',
        description:
          'Enable seamless collaboration between product experts and sellers. Answers embedded in your product data.',
      },
      {
        icon: FiCheck,
        title: 'Increased Deal Value',
        description:
          'Help sellers close higher-value deals faster with product intelligence at their fingertips.',
      },
      {
        icon: FiCheck,
        title: 'Higher Margins',
        description:
          'Surface preferred and complementary products to maximize profit on every sale.',
      },
    ],
  },
}

export default siteConfig

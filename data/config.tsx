const siteConfig = {
  logo: undefined,
  seo: {
    title: 'DimB - Product Intelligence for Sales',
    description:
      'Unlock the full value of your offering for every customer. Product intelligence at your reps fingertips.',
  },
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
}

export default siteConfig

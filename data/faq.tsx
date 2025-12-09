import * as React from 'react'

const faq = {
  title: 'Frequently Asked Questions',
  // description: '',
  items: [
    {
      q: 'What problems does DimB solve?',
      a: (
        <>
          DimB solves three critical challenges: 1) Offerings evolve but legacy
          systems can't keep up, trapping product information in spreadsheets
          and emails. 2) Reps don't have easy access to your complete offering,
          so they sell only what they know. 3) Product experts are overwhelmed
          fielding the same questions repeatedly. DimB centralizes product
          intelligence and gets it into the hands of every rep instantly.
        </>
      ),
    },
    {
      q: 'How does DimB increase deal value?',
      a: 'DimB surfaces complementary, alternative, and preferred products to each rep based on customer needs. This enables reps to confidently recommend higher-value solutions and cross-sell effectively, increasing both revenue per deal and customer satisfaction.',
    },
    {
      q: 'Can DimB integrate with our existing systems?',
      a: "Yes. DimB is designed to work alongside your existing ERP, PIM, CRM, and other enterprise systems. We pull product data from your sources of truth and enrich it with commercial attributes and strategic relationships that your legacy systems can't handle.",
    },
    {
      q: 'How quickly can we get started?',
      a: "We work directly with your team to understand your product structure, customer segments, and sales motion. Implementation timelines vary based on complexity, but we're committed to getting your reps enabled as fast as possible. Contact us to discuss your specific needs.",
    },
    {
      q: 'What if our product offering is complex or constantly changing?',
      a: "That's exactly what DimB is built for. Our dynamic offering management handles complex, evolving product catalogs with multiple categories, industries, and strategic account variations. You define relationships once, and DimB keeps everything organized and up-to-date.",
    },
    {
      q: 'How does DimB handle confidential or strategic product information?',
      a: 'DimB supports granular permissions and access controls. You can define what information different rep segments, accounts, or regions should see. Strategic products can be hidden from general view or restricted to specific teams.',
    },
  ],
}

export default faq

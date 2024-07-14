export default {
  title: 'Pricing for every stage',
  description:
    'Free to use escrow platform. 0.5% Transaction fee applies.',
  plans: [
    {
      id: 'free',
      title: 'Free Membership',
      description: 'Get access to all our high quality components for free.',
      price: 'Free',
      features: [
       {
          title: 'Assign Parties',
          description: 'Easily assign a payer and a payee to the transaction.',
        },
        {
          title: 'Define Scope of Work',
          description: 'Specify the scope of work, including deliverables and timeline.',
        },
        {
          title: 'Fund Escrow',
          description: 'Securely deposit the agreed amount into escrow.',
        },
        {
          title: 'Deliver and Review',
          description: 'The payee delivers the project, and the payer reviews the deliverables.',
        },
        {
          title: 'Mutual Agreement',
          description: 'Both parties agree on the satisfactory completion of the deliverables.',
        },
      ],
      action: {
        href: '#',
      },
    },
  ],
}

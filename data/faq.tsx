import * as React from 'react'

const faq = {
  title: 'Frequently asked questions',
  items: [
    {
      q: 'What is a crypto escrow platform?',
      a: (
        <>
          A crypto escrow platform is a secure service that holds funds in escrow
          until all parties involved in a transaction fulfill their obligations.
          This ensures that both the payer and payee are protected during the transaction process.
        </>
      ),
    },
    {
      q: 'How does the escrow process work?',
      a: (
        <>
          The process involves several steps: 
          1. Assigning parties (payer and payee),
          2. Defining the scope of work and deliverables,
          3. Funding the escrow account,
          4. The payee delivers the project,
          5. The payer reviews and approves the deliverables,
          6. Upon mutual agreement, the funds are released to the payee.
        </>
      ),
    },
    {
      q: 'Is there a fee for using the escrow platform?',
      a: 'Yes, there is a 0.5% transaction fee applied to each transaction to cover the operational costs of the platform.',
    },
    {
      q: 'How are disputes handled?',
      a: (
        <>
          In case of a dispute, our support team will step in to mediate and resolve
          the issue based on the defined scope of work and agreed deliverables. Both
          parties need to provide evidence to support their claims.
        </>
      ),
    },
    {
      q: 'Is my money safe in the escrow?',
      a: 'Yes, the funds are securely held in escrow and are only released when both parties agree to the terms of the transaction.',
    },
    {
      q: 'Can I use the escrow platform for international transactions?',
      a: 'Yes, our platform supports international transactions, allowing you to work with parties from around the world.',
    },
  ],
}

export default faq;

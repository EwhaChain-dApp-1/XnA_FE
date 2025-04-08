// @project
import SvgIcon from '@/components/SvgIcon';
import { DOCS_URL } from '@/path';

export const integration = {
  headLine: 'Topics You Care About',
  captionLine: 'Explore diverse questions across blockchain, development, and real-world XRP use cases — all in one place.',
  primaryBtn: {
    children: 'See More',
    startIcon: <SvgIcon name="tabler-help" color="background.default" />,
    href: DOCS_URL,
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  tagList: [
    { label: 'XRPL Basics' },
    { label: 'Smart Contracts' },
    { label: 'Token Economics' },
    { label: 'Web3 Development' },
    { label: 'Wallet Integration' },
    { label: 'Blockchain Security' },
    { label: 'NFTs on XRPL' },
    { label: 'Decentralized Identity' },
    { label: 'Payment Channels' },
    { label: 'Consensus Algorithm' },
    { label: 'XRP Toolkit' },
    { label: 'Cross-chain Interoperability' },
    { label: 'Dev Tools & SDKs' },
    { label: 'Governance & Voting' },
    { label: 'Real-World Use Cases' }
  ]
};
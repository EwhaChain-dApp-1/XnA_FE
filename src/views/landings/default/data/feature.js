// @project
import branding from '@/branding.json';
import { IconType } from '@/enum';
import { SECTION_PATH, BUY_NOW_URL, ADMIN_PATH, DOCS_URL } from '@/path';

const linkProps = { target: '_blank', rel: 'noopener noreferrer' };
const imagePrefix = '/assets/images/qna';

export const feature2 = {
  heading: 'Culture of Innovation',
  caption:
    'Join a team that embraces forward-thinking ideas, fosters innovation, and cultivates an environment where your creativity can flourish.',
  features: [
    {
      icon: { name: 'tabler-users', type: IconType.STROKE, color: 'grey.900', stroke: 1 },
      title: 'Teamwork',
      content: 'We embrace varied perspectives and backgrounds, creating an inclusive environment.'
    },
    {
      icon: { name: 'tabler-star', type: IconType.STROKE, color: 'grey.900', stroke: 1 },
      title: 'Inclusivity',
      content: 'We embrace varied perspectives and backgrounds, creating an inclusive environment.'
    },
    {
      icon: { name: 'tabler-chart-histogram', type: IconType.STROKE, color: 'grey.900', stroke: 1 },
      title: 'Growth',
      content: 'Our culture prioritizes continuous learning, encouraging personal and professional development. '
    }
  ]
};

export const feature5 = {
  heading: 'Beyond the 9-to-5',
  caption: 'Our benefits go beyond the standard, ensuring your life outside of work is just as fulfilling.',
  image1: '/assets/images/graphics/ai/graphics3-light.svg',
  image2: '/assets/images/graphics/ai/graphics2-light.svg',
  features: [
    {
      icon: 'tabler-coin',
      title: 'Compensation',
      content: 'Enjoy a competitive salary that recognizes your skills and contributions.'
    },
    {
      icon: 'tabler-health-recognition',
      title: 'Healthcare',
      content: "Access to a comprehensive healthcare plan, ensuring you and your family's well-being."
    }
  ],
  features2: [
    {
      icon: 'tabler-briefcase',
      title: 'Automated Scaling',
      content: 'Embrace a flexible work environment, allowing you to balance work.'
    },
    {
      icon: 'tabler-users',
      title: 'Real-Time',
      content: 'Support your family commitments with family-friendly policies and benefits.'
    }
  ],
  profileGroups: {
    avatarGroups: [
      { avatar: '/assets/images/user/avatar1.png' },
      { avatar: '/assets/images/user/avatar2.png' },
      { avatar: '/assets/images/user/avatar3.png' },
      { avatar: '/assets/images/user/avatar4.png' },
      { avatar: '/assets/images/user/avatar5.png' }
    ],
    review: '10k+ Reviews (4.5 out of 5)'
  },
  content: 'Explore diverse career paths within the company through our internal mobility programs.',
  actionBtn: { children: 'Explore all Features', href: '#' }
};

export const feature9 = {
  heading: 'Streamline Your Business with Our CRM Solution',
  caption: 'Discover the features that will transform your customer relationships',
  features: [
    {
      icon: 'custom-brain',
      title: 'AI-Powered Analytics',
      content: 'Leverage AI for Predictive Insights and Sales Opportunities.'
    },
    {
      icon: 'custom-path',
      title: 'Journey Mapping',
      content: 'Customer experiences at every touchpoint with it.'
    },
    {
      icon: 'custom-statastic',
      title: 'Voice & Speech Analytics',
      content: 'Actionable insights from customer interactions through it.'
    },
    {
      icon: 'custom-remote',
      title: 'Sales Gamification',
      content: 'Boost sales team motivation and performance with it.'
    },
    {
      icon: 'custom-lock',
      title: 'Subscription Management',
      content: 'Effortlessly handle and optimize subscriptions with it.'
    },
    {
      icon: 'custom-interface',
      title: 'Intuitive Interface',
      content: 'Simplify user interactions & enhance usability with it.'
    }
  ]
};

export const feature10 = {
  heading: 'Design Seamlessly with Figma',
  caption: 'Use Figma tools like Component Architecture and Dark Mode to speed up your design process.',
  typesetPosition: 'center',
  primaryBtn: { children: 'Buy Figma' },
  secondaryBtn: { children: 'Live Figma Preview' },
  features: [
    {
      animationDelay: 0.1,
      icon: { name: 'tabler-components', type: IconType.STROKE, stroke: 1.25 },
      title: 'Component Architecture',
      content: 'Organize and reuse components for scalable design.'
    },
    {
      animationDelay: 0.2,
      icon: { name: 'tabler-layout-list', type: IconType.STROKE, stroke: 1.25 },
      title: 'Auto-layout',
      content: 'Auto-layout system for effortless design alignment and responsiveness.'
    },
    {
      animationDelay: 0.3,
      icon: { name: 'tabler-clipboard-text', type: IconType.STROKE, stroke: 1.25 },
      title: 'Clear Guidance',
      content: 'Easy-to-follow instructions for seamless navigation & understanding.'
    },
    {
      animationDelay: 0.1,
      icon: { name: 'tabler-devices-code', type: IconType.STROKE, stroke: 1.25 },
      title: 'Responsive',
      content: 'Design adaptable layouts for all screen sizes effortlessly.'
    },

    {
      animationDelay: 0.2,
      icon: { name: 'tabler-keyframe-align-center', type: IconType.STROKE, stroke: 1.25 },
      title: 'Dark Mode',
      content: 'Seamlessly switch to dark mode with a single click.'
    },

    {
      animationDelay: 0.3,
      icon: { name: 'tabler-settings-2', type: IconType.STROKE, stroke: 1.25 },
      title: 'Variables',
      content: 'Manage color and typography settings efficiently with variables.'
    }
  ],
  video: {
    thumbnail: '/assets/images/graphics/ai/background2.svg',
    src: '/assets/videos/test.mp4'
  }
};

export const feature20 = {
  heading: 'A Decentralized QnA Platform Powered by XRPL',
  caption: 'Ask questions, share knowledge, and earn XRP rewards in a fair and transparent way.',
  actionBtn: { children: 'Post a Question', href: '/ask' },
  secondaryBtn: { children: 'Explore Questions', href: '/question-list' },
  features: [
    {
      icon: 'tabler-coin',
      title: 'Earn XRP Rewards',
      content: 'Helpful answers are rewarded with XRP tokens directly via the XRP Ledger.'
    },
    {
      icon: 'tabler-shield-lock',
      title: 'Decentralized & Secure',
      content: 'Built on XRPL for transparency, data integrity, and censorship resistance.'
    },
    {
      icon: 'tabler-wallet',
      title: 'Wallet Integration',
      content: 'Easily connect your XRPL-compatible wallet to manage earnings and interactions.'
    },
    {
      icon: 'tabler-sparkles',
      title: 'Token-Based Incentives',
      content: 'Question askers can set token bounties to encourage high-quality answers.'
    },
    {
      icon: 'tabler-users-group',
      title: 'Community Moderation',
      content: 'Leverage the power of the community to upvote, downvote, and select the best answers.'
    },
    {
      icon: 'tabler-refresh',
      title: 'Transparent History',
      content: 'All actions like posting, answering, and rewarding are immutably recorded on-chain.'
    }
  ]
};

export const feature21 = {
  heading: `Design Faster, Smarter with ${branding.brandName} Figma`,
  caption: 'Unlock Figma’s advanced tools for streamlined, scalable, and responsive SaaS UI design.',
  image: '/assets/images/graphics/ai/desktop1-light.svg',
  primaryBtn: { children: 'Free Figma', href: 'https://www.figma.com/community/file/1425095061180549847', ...linkProps },
  secondaryBtn: {
    children: 'Preview Pro Figma',
    href: 'https://www.figma.com/design/mlkXfeqxUKqIo0GQhPBqPb/SaasAble---UI-Kit---Preview-only?node-id=11-1833&t=JBHOIIEuYZpmN6v8-1',
    ...linkProps
  },
  features: [
    {
      animationDelay: 0.1,
      icon: 'tabler-components',
      title: 'Component Architecture'
    },
    {
      animationDelay: 0.2,
      icon: 'tabler-moon',
      title: 'Dark Mode'
    },
    {
      animationDelay: 0.3,
      icon: 'tabler-brightness-auto',
      title: 'Auto Layout'
    },
    {
      animationDelay: 0.4,
      icon: 'tabler-accessible',
      title: 'WCAG Compliant'
    },
    {
      animationDelay: 0.1,
      icon: 'tabler-icons',
      title: 'Custom Icons'
    },
    {
      animationDelay: 0.2,
      icon: 'tabler-file-stack',
      title: 'Page Demos'
    },
    {
      animationDelay: 0.3,
      icon: 'tabler-brand-matrix',
      title: 'Material 3 Guideline'
    },
    {
      animationDelay: 0.4,
      icon: 'tabler-click',
      title: 'Quick Customization'
    }
  ]
};

export const feature = {
  heading: `What’s Inside of ${branding.brandName} Plus Version`,
  features: [
    {
      image: '/assets/images/shared/react.svg',
      title: 'CRA JavaScript',
      content: 'Ensure accessibility with WCAG compliant design for browsing.'
    },
    {
      image: '/assets/images/shared/next-js.svg',
      title: 'Next.js JavaScript',
      content: 'Tailor typography for optimal readability across all screen sizes.'
    },
    {
      image: '/assets/images/shared/react.svg',
      title: 'CRA TypeScript',
      content: 'Customize Material 3 design MUI components for enhanced aesthetics.'
    },
    {
      image: '/assets/images/shared/next-js.svg',
      title: 'Next.js TypeScript',
      content: 'Adjust content layout for visual coherence on various screen sizes.'
    },
    {
      image: '/assets/images/shared/figma.svg',
      title: 'Figma ',
      content: 'Boost visibility with SEO-friendly features for better search rankings.'
    },
    {
      title: 'Check Out Our Pricing Plan',
      content: 'Choose the plan that aligns with your SaaS product requirements.',
      actionBtn: { children: 'Pricing Plan', href: BUY_NOW_URL, ...linkProps }
    }
  ]
};

export const feature7 = {
  heading: 'Real-Time Performance Insights',
  caption: 'Gain a competitive edge with real-time performance monitoring.',
  testimonials: [
    {
      image: '/assets/images/graphics/ai/graphics6-light.svg',
      features: [
        {
          icon: 'tabler-star',
          title: 'Core Value',
          content: 'Unlock growth potential through continuous monitoring, enabling proactive strategies in a competitive landscape.'
        }
      ]
    },
    {
      image: '/assets/images/graphics/ai/graphics8-light.svg',
      features: [
        {
          icon: 'tabler-route',
          title: 'Multi-Cloud Orchestration',
          content: 'Enhances flexibility and resilience in a multi-cloud environment.'
        }
      ]
    },
    {
      image: '/assets/images/graphics/ai/graphics3-light.svg',
      features: [
        {
          icon: 'tabler-history',
          title: 'Story',
          content: 'Real-time performance insights empower teams to respond swiftly, optimizing operations and driving growth.'
        }
      ]
    }
  ],
  breadcrumbs: [{ title: 'Core Value' }, { title: 'Culture' }, { title: 'Story' }]
};

export const feature23 = {
  heading: 'Culture of Innovation',
  caption:
    'Join a team that embraces forward-thinking ideas, fosters innovation, and cultivates an environment where your creativity can flourish.',
  heading2: 'Growth',
  caption2: 'Our culture prioritizes continuous learning, encouraging personal and professional development. ',
  image: '/assets/images/graphics/default/feature23-light.png',
  primaryBtn: { children: 'Join  Our Team', href: '#' },

  features: [
    {
      icon: 'tabler-users',
      title: 'Teamwork',
      content: 'We embrace varied perspectives and backgrounds, creating an inclusive environment.'
    },
    {
      icon: 'tabler-star',
      title: 'Inclusivity',
      content: 'We embrace varied perspectives and backgrounds, creating an inclusive environment.'
    }
  ]
};

export const feature18 = {
  heading: 'How Our QnA Platform Works',
  caption: 'From asking questions to earning XRP for helpful answers — here’s how it all works on our decentralized knowledge-sharing platform.',
  topics: [
    {
      icon: 'tabler-message-circle-question',
      title: 'Post Your Question',
      title2: 'Ask What You Want to Know',
      description: 'Create a new question and provide context so others can understand and help effectively.',
      image: `${imagePrefix}/ask-flow.svg`,
      list: [
        { primary: 'Write your question with clear details' },
        { primary: 'Tag with relevant topics' },
        { primary: 'Submit to the community' },
        { primary: 'Monitor responses in real time' }
      ],
      actionBtn: { children: 'Ask a Question', href: '/ask' },
      actionBtn2: { children: 'View Questions', href: '/questions' }
    },
    {
      icon: 'tabler-coin',
      title: 'Set a Token Reward',
      title2: 'Incentivize Great Answers',
      description: 'Motivate the community by offering XRP rewards to the best answers.',
      image: '/assets/images/qna/reward-flow.png',
      list: [
        { primary: 'Choose an amount of XRP as a reward' },
        { primary: 'Securely locked in escrow via XRPL' },
        { primary: 'Visible to all answerers' },
        { primary: 'Fully transparent & trustless' }
      ],
      actionBtn: { children: 'Learn About Rewards', href: '/about/rewards' },
      actionBtn2: { children: 'View Token Usage', href: '/wallet' }
    },
    {
      icon: 'tabler-edit',
      title: 'Get Answers',
      title2: 'Engage with the Community',
      description: 'Receive thoughtful responses from knowledgeable users who want to earn your reward.',
      image: '/assets/images/qna/answer-flow.png',
      list: [
        { primary: 'Community members write answers' },
        { primary: 'Upvote helpful content' },
        { primary: 'Discuss and refine solutions' },
        { primary: 'Build a reputation as a helper' }
      ],
      actionBtn: { children: 'Answer Questions', href: '/questions' },
      actionBtn2: { children: 'View Leaderboard', href: '/leaderboard' }
    },
    {
      icon: 'tabler-check',
      title: 'Accept an Answer & Distribute XRP',
      title2: 'Complete the Knowledge Cycle',
      description: 'Select the most helpful answer to automatically release XRP from escrow to the answerer.',
      image: '/assets/images/qna/earn-flow.png',
      list: [
        { primary: 'Select the best answer' },
        { primary: 'XRP is transferred to answerer' },
        { primary: 'Transaction is recorded on-chain' },
        { primary: 'Build a transparent contribution history' }
      ],
      actionBtn: { children: 'View Your Activity', href: '/profile' },
      actionBtn2: { children: 'Track Rewards', href: '/wallet' }
    }
  ]
};
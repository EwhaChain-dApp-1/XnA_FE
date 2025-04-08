// @project
import { PAGE_PATH, SECTION_PATH } from '@/path';

// @asssets
const imagePrefix = '/assets/images/qna';

// @project
import branding from '@/branding.json';

export const other = {
  heading: 'Latest Questions',
  description: 'Browse through the latest questions posted by the community. Click to read answers or contribute your own!',
  primaryBtn: { children: 'View All Questions', href: '/questions' },
  sections: [
    {
      animationDelay: 0.2,
      title: 'How do I connect XUMM wallet to my account?',
      subTitle: 'I’m having trouble connecting my wallet for the first time.',
      image: '/assets/images/qna/wallet.svg',
      link: '/questions/1'
    },
    {
      animationDelay: 0.3,
      title: 'What’s the best way to reward multiple answers with XRP?',
      subTitle: 'Can I split the reward between multiple helpful users?',
      image: '/assets/images/qna/reward.svg',
      link: '/questions/2'
    },
    {
      animationDelay: 0.4,
      title: 'How to track earned XRP in real-time?',
      subTitle: 'I want to see my total rewards from answers.',
      image: '/assets/images/qna/xrp.svg',
      link: '/questions/3'
    },
    {
      animationDelay: 0.2,
      title: 'Can I edit my posted question after submission?',
      subTitle: 'I forgot to add some context to my question.',
      image: '/assets/images/qna/edit.svg',
      link: '/questions/4'
    },
    {
      animationDelay: 0.3,
      title: 'What is the minimum XRP reward I can offer?',
      subTitle: 'Is there a lower limit for setting bounties?',
      image: '/assets/images/qna/min-reward.svg',
      link: '/questions/5'
    },
    {
      animationDelay: 0.4,
      title: 'How do I withdraw XRP from my balance?',
      subTitle: 'I want to transfer my earned XRP to my wallet.',
      image: '/assets/images/qna/withdraw.svg',
      link: '/questions/6'
    }
  ]
};

export const other3 = {
  heading: 'Community Questions You May Like',
  caption: 'Check out other questions asked by users — maybe you can help!',
  other: [
    {
      title: 'Can I change the selected answer after awarding XRP?',
      description: 'I accidentally selected the wrong answer. Can I switch?',
      chips: [
        {
          icon: 'tabler-users',
          name: '2 Answers'
        },
        {
          icon: 'tabler-coin',
          name: '5 XRP Offered'
        }
      ],
      btn: { children: 'View Question', href: '/questions/7' }
    },
    {
      title: 'How does the answer voting system work?',
      description: 'Do votes influence XRP rewards or visibility?',
      chips: [
        {
          icon: 'tabler-users',
          name: '4 Answers'
        },
        {
          icon: 'tabler-thumb-up',
          name: '10 Upvotes'
        }
      ],
      btn: { children: 'View Question', href: '/questions/8' }
    },
    {
      title: 'Can I delete my question?',
      description: 'I want to remove a question I posted by mistake.',
      chips: [
        {
          icon: 'tabler-alert-triangle',
          name: 'Pending'
        },
        {
          icon: 'tabler-history',
          name: 'Asked 1h ago'
        }
      ],
      btn: { children: 'View Question', href: '/questions/9' }
    },
    {
      title: 'Are XRP rewards refundable if no answer is selected?',
      description: 'I didn’t get a good answer. Will my reward be refunded?',
      chips: [
        {
          icon: 'tabler-coin',
          name: 'Unclaimed'
        },
        {
          icon: 'tabler-clock-hour-5',
          name: 'Expires in 3d'
        }
      ],
      btn: { children: 'View Question', href: '/questions/10' }
    }
  ]
};
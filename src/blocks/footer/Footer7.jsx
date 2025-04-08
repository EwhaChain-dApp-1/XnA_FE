'use client';

import NextLink from 'next/link';
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';

import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import { Copyright, FollowUS, Sitemap } from '@/components/footer';
import LogoSection from '@/components/logo';
import SvgIcon from '@/components/SvgIcon';

import { CopyrightType } from '@/enum';
import { SECTION_COMMON_PY } from '@/utils/constant';

// 사이트맵 구성
const data = [
  {
    id: 'about',
    grid: { size: { xs: 6, sm: 'auto' } },
    title: 'About Us',
    menu: [
      { label: 'Ewha-Chain', link: { href: 'https://ewhachain.org', target: '_blank' } },
      { label: 'dApp Team 1', link: { href: '/team' } },
      { label: 'AXRP Korea', link: { href: 'https://xrp.co.kr', target: '_blank' } }
    ]
  },
  {
    id: 'project',
    grid: { size: { xs: 6, sm: 'auto' } },
    title: 'Project',
    menu: [
      { label: 'QnA dApp 소개', link: { href: '/about/project' } },
      { label: '기능 소개', link: { href: '/features' } },
      { label: '기술 스택', link: { href: '/tech' } }
    ]
  },
  {
    id: 'community',
    grid: { size: { xs: 12, sm: 'auto' } },
    title: 'Community',
    menu: [
      { label: 'GitHub', link: { href: 'https://github.com/ewhachain/axrp-qna', target: '_blank' } },
      { label: 'Docs', link: { href: '/docs' } },
      { label: '문의하기', link: { href: '/contact' } }
    ]
  }
];

// 외부 유용 링크
const usefullLinks = [
  {
    icon: <SvgIcon name="tabler-brand-github" color="text.secondary" />,
    title: 'GitHub Repository',
    href: 'https://github.com/ewhachain/axrp-qna'
  },
  {
    icon: <SvgIcon name="tabler-book" color="text.secondary" />,
    title: 'Documentation',
    href: '/docs'
  },
  {
    icon: <SvgIcon name="tabler-rocket" color="text.secondary" />,
    title: 'AXRP Korea Ambassador',
    href: 'https://xrp.co.kr'
  }
];

// 본문
export default function Footer7() {
  const logoFollowContent = (
    <Stack sx={{ alignItems: 'flex-start', gap: { xs: 1.5, sm: 3 } }}>
      <LogoSection />
      <Typography variant="h6" sx={{ maxWidth: { sm: 280 }, mb: { xs: -1, sm: -2.5 } }}>
        Ewha-Chain dApp Team 1
      </Typography>
      <Typography variant="body2" sx={{ maxWidth: { sm: 280 } }}>
        We build decentralized apps with purpose — powered by XRPL and supported by AXRP Korea.
      </Typography>
    </Stack>
  );

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack id="footer-7" role="contentinfo" aria-label="Footer Section" sx={{ gap: { xs: 3, sm: 4, md: 5 } }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
          <Grid container spacing={{ xs: 4, md: 3 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack direction={{ sm: 'row', md: 'column' }} sx={{ gap: 3, justifyContent: 'space-between', height: 1 }}>
                {logoFollowContent}
                <Stack sx={{ gap: { xs: 2, sm: 2.5, md: 3 } }}>
                  {usefullLinks.map((item, index) => (
                    <Stack direction="row" sx={{ gap: 1, alignItems: 'center' }} key={index}>
                      {item.icon}
                      <Link component={NextLink} variant="body2" color="text.secondary" href={item.href} target="_blank" rel="noopener noreferrer">
                        {item.title}
                      </Link>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Sitemap list={data} isMenuDesign />
            </Grid>
          </Grid>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
          <GraphicsCard sx={{ borderRadius: { xs: 6, sm: 8 } }}>
            <Stack
              direction={{ sm: 'row' }}
              sx={{
                alignItems: 'center',
                justifyContent: { xs: 'center', sm: 'space-between' },
                gap: 1.5,
                py: { xs: 2, sm: 1.5 },
                px: { xs: 2, sm: 3 }
              }}
            >
              <Copyright type={CopyrightType.TYPE3} />
              <FollowUS heading={false} color="grey.100" />
            </Stack>
          </GraphicsCard>
        </motion.div>
      </Stack>
    </ContainerWrapper>
  );
}
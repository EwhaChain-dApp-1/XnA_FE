'use client';

import { Box, Button, Chip, Container, Divider, Stack, Typography } from '@mui/material';
import { Navbar10 } from '@/blocks/navbar';
import { NavbarContent10 } from '@/blocks/navbar/navbar-content';
import { Footer7 } from '@/blocks/footer';
import Link from 'next/link'; // Next.js의 Link 컴포넌트 추가


export default function QuestionDetailPage() {
  const mockQuestion = {
    title: 'How does consensus work on the XRPL?',
    body: 'Can someone explain how validators reach consensus in the XRP Ledger and how it differs from Proof-of-Work or Proof-of-Stake systems?',
    createdAt: '2025-04-09',
    tags: ['#XRPL', '#Consensus', '#Validator'],
    reward: 25,
    author: 'rXx...9aBc'
  };

  const otherQuestions = [
    'How to issue a token on XRPL?',
    'Difference between Hooks and Smart Contracts?',
    'How does trustline affect my wallet balance?'
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar10>
        <NavbarContent10 />
      </Navbar10>

      <Container maxWidth="lg" sx={{ flexGrow: 1, py: 8 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 4,
            maxWidth: 1200,
            mx: 'auto'
          }}
        >
          {/* 질문 정보 영역 */}
          <Box
            sx={{
              flex: 4, // 기존 flex: 3에서 4로 증가
              border: '1px solid #ccc',
              borderRadius: 2,
              p: 4,
              minHeight: 500,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <Box>
              <Typography variant="h5" gutterBottom>
                {mockQuestion.title}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 2
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  Posted on: {mockQuestion.createdAt}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Wallet: {mockQuestion.author}
                </Typography>
              </Box>
              <Divider sx={{ my: 2 }} />
              <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap', lineHeight: 1.8 }}>
                {mockQuestion.body}
              </Typography>
            </Box>

            <Stack direction="row" spacing={1} mt={4}>
              {mockQuestion.tags.map((tag, idx) => (
                <Chip key={idx} label={tag} variant="outlined" />
              ))}
            </Stack>
          </Box>

          {/* 사이드바: Reward + 버튼 + 다른 질문들 */}
          <Box
            sx={{
              flex: 2, // 기존 flex: 2에서 1.5로 감소
              minWidth: 200,
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              alignItems: 'center' // 모든 요소를 가운데 정렬
            }}
          >
            <Box sx={{ width: '50%' }}> {/* Reward 섹션 */}
              <Typography variant="subtitle2" color="text.secondary">
                Reward
              </Typography>
              <Typography variant="h6" color="primary" sx={{ mt: 0.5 }}>
                {mockQuestion.reward} XRP
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2, width: '100%' }} // 버튼의 가로 길이를 100%로 설정 (부모의 50%)
              >
                <Link href="/answer" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Answer
                </Link>
              </Button>
            </Box>

            <Divider sx={{ width: '50%' }} /> {/* Divider의 가로 길이 조정 */}

            <Box sx={{ width: '50%' }}> {/* Other Questions 섹션 */}
              <Typography variant="subtitle2" gutterBottom>
                Other Questions
              </Typography>
              <Stack spacing={1}>
                {otherQuestions.map((q, i) => (
                  <Typography key={i} variant="body2" color="text.secondary">
                    {q}
                  </Typography>
                ))}
              </Stack>
            </Box>
          </Box>
        </Box>
      </Container>

      <Footer7 />
    </Box>
  );
}

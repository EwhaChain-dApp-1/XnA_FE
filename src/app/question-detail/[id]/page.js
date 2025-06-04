'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Box, Button, Chip, Container, Divider, Stack, Typography } from '@mui/material';
import { Navbar10 } from '@/blocks/navbar';
import { NavbarContent10 } from '@/blocks/navbar/navbar-content';
import { Footer7 } from '@/blocks/footer';
import Link from 'next/link';

export default function QuestionDetailPage() {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);
  const [recentQuestions, setRecentQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestion = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/questions/${id}`);
      const data = await res.json();
      setQuestion(data);
    };

    const fetchRecent = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/questions/recent`);
      const data = await res.json();
      setRecentQuestions(data.filter((q) => q.id !== Number(id)));
    };

    fetchQuestion();
    fetchRecent();
  }, [id]);

  if (!question) {
    return (
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography>Loading...</Typography>
      </Container>
    );
  }

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
          {/* 질문 본문 영역 */}
          <Box
            sx={{
              flex: 4,
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
                {question.title}
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
                  Posted on: {question.created_at?.slice(0, 10)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Wallet: {question.wallet_address}
                </Typography>
              </Box>
              <Divider sx={{ my: 2 }} />
              <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap', lineHeight: 1.8 }}>
                {question.body}
              </Typography>
            </Box>

            <Stack direction="row" spacing={1} mt={4}>
              {question.tags?.map((tag, idx) => (
                <Chip key={idx} label={`#${tag}`} variant="outlined" />
              ))}
            </Stack>
          </Box>

          {/* 사이드 정보 (보상, 버튼, 추천 질문 등) */}
          <Box
            sx={{
              flex: 2,
              minWidth: 200,
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              alignItems: 'center'
            }}
          >
            <Box sx={{ width: '50%' }}>
              <Typography variant="subtitle2" color="text.secondary">
                Reward
              </Typography>
              <Typography variant="h6" color="primary" sx={{ mt: 0.5 }}>
                {question.reward_xrp} XRP
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2, width: '100%' }}
              >
                <Link href="/answer" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Answer
                </Link>
              </Button>
            </Box>

            <Divider sx={{ width: '50%' }} />

            <Box sx={{ width: '50%' }}>
              <Typography variant="subtitle2" gutterBottom>
                Other Questions
              </Typography>
              <Stack spacing={1}>
                {recentQuestions.map((q) => (
                  <Link key={q.id} href={`/question-detail/${q.id}`} passHref legacyBehavior>
                    <Typography variant="body2" color="text.secondary" component="a">
                      {q.title}
                    </Typography>
                  </Link>
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

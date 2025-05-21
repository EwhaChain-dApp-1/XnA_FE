'use client';

import { useState } from 'react';
import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { Navbar10 } from '@/blocks/navbar';
import { NavbarContent10 } from '@/blocks/navbar/navbar-content';
import { Footer7 } from '@/blocks/footer';

export default function AnswerPage() {
  // 질문 mock 데이터
  const mockQuestion = {
    title: 'How does consensus work on the XRPL?',
    body: 'Can someone explain how validators reach consensus in the XRP Ledger and how it differs from Proof-of-Work or Proof-of-Stake systems?',
    createdAt: '2025-04-09',
    tags: ['#XRPL', '#Consensus', '#Validator'],
    reward: 25,
    author: 'rXx...9aBc'
  };

  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Answer Submitted:', { body });
    setBody('');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar10>
        <NavbarContent10 />
      </Navbar10>

      <Container maxWidth="md" sx={{ py: 8, flexGrow: 1 }}>
        {/* 질문 정보 */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" gutterBottom>
            {mockQuestion.title}
          </Typography>

          <Box sx={{ height: 5 }} />

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 1
            }}
          >            
            <Typography variant="body2" color="text.secondary">
              Posted on: {mockQuestion.createdAt}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Wallet: {mockQuestion.author}
            </Typography>
          </Box>

          <Typography
            variant="body2"
            color="primary"
            sx={{ mb: 2, fontWeight: 500 }}
          >
            Reward: {mockQuestion.reward} XRP
          </Typography>

          {/* 여기에 간격 추가 */}
          <Box sx={{ height: 20 }} />

          <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap', lineHeight: 1.8, mb: 2 }}>
            {mockQuestion.body}
          </Typography>

          <Box sx={{ height: 20 }} />

          <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
            {mockQuestion.tags.map((tag, idx) => (
              <Chip key={idx} label={tag} variant="outlined" />
            ))}
          </Stack>

        </Box>

        <Divider sx={{ mb: 4 }} />

        {/* 답변 입력 폼 */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2
          }}
        >
          <Typography variant="subtitle1">Write your answer</Typography>

          <TextField
            placeholder="Write your answer here..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
            multiline
            rows={6}
            fullWidth
            required
          />

          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </Box>
      </Container>

      <Footer7 />
    </Box>
  );
}

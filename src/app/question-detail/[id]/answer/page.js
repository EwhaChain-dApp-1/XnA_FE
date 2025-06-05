'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Navbar10 } from '@/blocks/navbar';
import { NavbarContent10 } from '@/blocks/navbar/navbar-content';
import { Footer7 } from '@/blocks/footer';

export default function AnswerFormPage() {
  const { id } = useParams();
  const router = useRouter();

  const [question, setQuestion] = useState(null);
  const [body, setBody] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/questions/${id}`);
        setQuestion(response.data);
      } catch (err) {
        console.error('질문 불러오기 실패:', err);
      }
    };

    fetchQuestion();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = localStorage.getItem('user_id');
    if (!userId) {
      setError('로그인이 필요합니다.');
      return;
    }

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/answers`, {
        question_id: Number(id),
        user_id: Number(userId),
        body,
      });
      router.push(`/question-detail/${id}`);
    } catch (err) {
      console.error('답변 등록 실패:', err);
      setError('답변 등록에 실패했습니다.');
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar10>
        <NavbarContent10 />
      </Navbar10>

      <Container maxWidth="md" sx={{ py: 8, flexGrow: 1 }}>
        {question && (
          <>
            {/* 질문 정보 */}
            <Box sx={{ mb: 6 }}>
              <Typography variant="h5" gutterBottom>
                {question.title}
              </Typography>

              <Box sx={{ height: 7 }} />

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 1,
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  Posted on: {new Date(question.created_at).toLocaleDateString()}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Wallet: {question.wallet_address || 'Anonymous'}
                </Typography>
              </Box>

              <Typography
                variant="body2"
                color="primary"
                sx={{ mb: 2, fontWeight: 500 }}
              >
                Reward: {question.reward_xrp} XRP
              </Typography>

              <Divider sx={{ mb: 5 }} />

              <Typography
                variant="body1"
                sx={{ whiteSpace: 'pre-wrap', lineHeight: 1.8, mb: 10 }}
              >
                {question.body}
              </Typography>

              <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                {(question.tags || []).map((tag, idx) => (
                  <Chip key={idx} label={`#${tag}`} variant="outlined" />
                ))}
              </Stack>
            </Box>

            <Divider sx={{ mb: 4 }} />
          </>
        )}

        {/* 답변 입력 폼 */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
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

          {error && (
            <Typography color="error" variant="body2">
              {error}
            </Typography>
          )}

          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button type="submit" variant="contained" color="primary">
              Submit Answer
            </Button>
          </Box>
        </Box>
      </Container>

      <Footer7 />
    </Box>
  );
}

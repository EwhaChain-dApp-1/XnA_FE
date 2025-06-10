'use client';

import { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardActionArea
} from '@mui/material';
import Link from 'next/link';
import { Navbar10 } from '@/blocks/navbar';
import { NavbarContent10 } from '@/blocks/navbar/navbar-content';
import { Footer7 } from '@/blocks/footer';

export default function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/questions`);
        const data = await res.json();
        console.log("📦 questions API 응답:", data); // 여기 출력 필수
        
        setQuestions(data);
      } catch (err) {
        console.error('질문 목록 불러오기 실패:', err);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar10>
        <NavbarContent10 />
      </Navbar10>

      <Container maxWidth="md" sx={{ mt: 8, flexGrow: 1 }}>
        <Typography variant="h4" gutterBottom>
          All Questions
        </Typography>

        <Box display="flex" flexDirection="column" gap={2}>
          {questions.map((q) => (
            <Link key={q.id} href={`/question-detail/${q.id}`} passHref legacyBehavior>
              <Card variant="outlined" component="a" sx={{ textDecoration: 'none' }}>
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h6">{q.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {new Date(q.created_at).toLocaleString()}
                    </Typography>
                    <Typography variant="body2" color="primary" sx={{ mt: 1 }}>
                      Reward: {q.reward_xrp} XRP
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          ))}
        </Box>
      </Container>

      <Footer7 />
    </Box>
  );
}

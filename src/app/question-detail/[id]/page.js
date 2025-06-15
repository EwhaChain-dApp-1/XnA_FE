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
  const [answers, setAnswers] = useState([]);
  const [currentUserId, setCurrentUserId] = useState(null);

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

    const fetchAnswers = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/questions/${id}/answers`);
        const data = await res.json();
        setAnswers(Array.isArray(data) ? data : []);
    };

    if (typeof window !== 'undefined') {
      const userId = localStorage.getItem('user_id');
      setCurrentUserId(Number(userId));
    }
    
    fetchQuestion();
    fetchAnswers();
    fetchRecent();
  }, [id]);

  if (!question) {
    return (
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography>Loading...</Typography>
      </Container>
    );
  }

  console.log('질문 작성자 ID:', question?.user_id, '현재 사용자 ID:', currentUserId);
  console.log('질문 상태:', question?.is_reward_sent);

  const handleAcceptAnswer = async (responderId) => {
    const questionId = Number(id);
    const responderAddress = answers.find(a => a.user_id === responderId)?.wallet_address;

    const answer = answers.find(a => a.user_id === responderId);
    if (!answer) {
      alert('해당 답변을 찾을 수 없습니다.');
      return;
    }

    const answerId = answer.id;
  
    if (!responderAddress) {
      alert('답변자의 지갑 주소를 찾을 수 없습니다.');
      return;
    }
  
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/answers/finish_escrow`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question_id: questionId,
          responder_address: responderAddress,
          answer_id: answerId,
        })
      });
  
      const result = await res.json();
      if (res.ok) {
        alert('채택 및 보상 전송 완료!');
        location.reload();
      } else {
        alert(`오류: ${JSON.stringify(result)}`);
      }
    } catch (err) {
      console.error('채택 실패:', err);
      alert('채택 요청 중 오류 발생');
    }
  };

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
            <Box sx={{ mt: 6 }}>
                <Typography variant="h6" gutterBottom>
                Answers ({answers.length})
                </Typography>

                {answers.length === 0 ? (
                <Typography variant="body2" color="text.secondary">
                    아직 등록된 답변이 없습니다.
                </Typography>
                ) : (
                <Stack spacing={4} mt={2}>
                    {answers.map((answer) => (
                    <Box key={answer.id} sx={{ p: 3, border: '1px solid #ccc', borderRadius: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography variant="body2" color="text.secondary">
                                Wallet: {answer.wallet_address || 'Anonymous'}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {new Date(answer.created_at).toLocaleDateString()}
                            </Typography>
                            </Box>
                            <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap', lineHeight: 1.8 }}>
                                {answer.body}
                            </Typography>
                            {currentUserId !== null &&
                              question.user_id === currentUserId && (
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                                  {answer.is_accepted ? (
                                    <Typography
                                      variant="body1"
                                      color="primary"
                                      sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}
                                    >
                                      ✅ 채택된 답변
                                    </Typography>
                                  ) : (
                                    !question.is_reward_sent && (
                                      <Button
                                        variant="outlined"
                                        size="small"
                                        onClick={() => handleAcceptAnswer(answer.user_id)}
                                      >
                                        채택
                                      </Button>
                                    )
                                  )}
                                </Box>
                              )}
                    </Box>
                    ))}
                </Stack>
                )}
            </Box>
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
              {currentUserId !== null && question.user_id !== currentUserId && (
                <Link href={`/question-detail/${id}/answer`} passHref legacyBehavior>
                  <Button variant="contained" color="primary" sx={{ mt: 2, width: '100%' }} component="a">
                    Answer
                  </Button>
                </Link>
              )}
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

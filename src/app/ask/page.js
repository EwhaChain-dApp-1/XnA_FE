'use client';

import { XummPkce } from 'xumm-oauth2-pkce';
import { XummSdk } from 'xumm-sdk';
import { useState, useEffect } from 'react';
import React from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { Navbar10 } from '@/blocks/navbar';
import { NavbarContent10 } from '@/blocks/navbar/navbar-content';
import { Footer7 } from '@/blocks/footer';
import { useRouter } from 'next/navigation';
import { xrpToDrops, isoTimeToRippleTime } from 'xrpl';


export default function AskPage() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [reward, setReward] = useState('');
  const [signUrl, setSignUrl] = useState('');

  const [hashtags, setHashtags] = useState([]);
  const [hashtagInput, setHashtagInput] = useState('');
  const [xumm, setXumm] = useState(null);
  const Sdk = new XummSdk(process.env.NEXT_PUBLIC_XUMM_API_KEY, process.env.NEXT_PUBLIC_XUMM_API_SECRET);
  const router = useRouter();


  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!xumm) {
    //   alert('Xumm 객체가 초기화되지 않았습니다.');
    //   return;
    // }
  
    const userId = localStorage.getItem('user_id');
    const walletAddress = localStorage.getItem('wallet_address');

    if (!userId) {
      alert('로그인이 필요합니다.');
      return;
    }

    const rewardXRP = parseFloat(reward);

    try {
      // 1. Payment 트랜잭션 준비
      const request = {
        TransactionType: 'Payment',
        Account: walletAddress,
        Destination: "rE8PP6RHQnipSc7wTNjEXhx6p5vfGaQsJR",
        Amount: xrpToDrops(rewardXRP),
        Memos: [
          {
            Memo: {
              MemoData: Buffer.from('Post a new question').toString('hex'),
            },
          },
        ],
      };
  
      // 2. 백엔드로 XUMM Payload 생성 요청
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/questions/xumm/create-payload`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(request),
      });
  
      const payload = await response.json();
  
      if (!payload?.uuid) {
        alert('Payload 생성 실패');
        return;
      }
  
      console.log('Payload 생성 성공:', payload);

      //XUMM SDK를 사용하여 서명 창 띄우기
      const signUrl = payload.next.always;
      const popup = window.open(signUrl, '_blank'); // 새 창에서 서명 URL 열기

      // WebSocket 연결
    const ws = new WebSocket(payload.refs.websocket_status);

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.signed) {
        console.log('서명이 완료되었습니다:', data);

        // WebSocket 연결 종료
        ws.close();

        // 창 닫기
        if (popup) {
          popup.close();
        }

        // 서명된 트랜잭션 데이터 확인
        // const signed_blob = data.tx_blob;
        const txid = data.txid;

        if (!txid) {
          console.error('서명된 트랜잭션 데이터가 없습니다:', { txid });
          alert('서명된 트랜잭션 데이터가 없습니다.');
          return;
        }

        console.log('서명된 트랜잭션 데이터:', { txid });

        // 4. 질문 등록 payload 구성
        const questionPayload = {
          user_id: parseInt(userId),
          title,
          body,
          reward_xrp: rewardXRP,
          tags: hashtags,
          tx_hash: txid,
        };

        // 5. 질문 등록 API 호출
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/questions`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(questionPayload),
        })
          .then((response) => response.json())
          .then((data) => {
            if (!data.id) {
              console.error('❌ 질문 등록은 성공했지만 ID 없음:', data);
              return;
            }
            console.log('✅ 질문 등록 성공:', data);
            alert('질문이 등록되었습니다!');
            router.push(`/question-detail/${data.id}`);
          })
          .catch((error) => {
            console.error('❌ 질문 등록 실패:', error);
            alert('질문 등록 중 오류가 발생했습니다.');
          });
      } else if (data.signed === false) {
        console.log('사용자가 서명을 거부했습니다.');
        alert('사용자가 서명을 거부했습니다.');
        ws.close();
        if (popup) {
          popup.close();
        }
      }
    };

    ws.onerror = (error) => {
      console.error('WebSocket 오류:', error);
      alert('WebSocket 연결 중 오류가 발생했습니다.');
      ws.close();
    };

    ws.onclose = () => {
      console.log('WebSocket 연결이 종료되었습니다.');
    };
    } catch (error) {
      console.error('❌ 질문 등록 실패:', error);
      alert('질문 등록 중 오류가 발생했습니다.');
    }

  };

  const handleHashtagKeyDown = (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && hashtagInput.trim()) {
      e.preventDefault();
      let tag = hashtagInput.trim();
      if (!tag.startsWith('#')) tag = `#${tag}`;
      if (hashtags.length < 3 && !hashtags.includes(tag)) {
        setHashtags([...hashtags, tag]);
      }
      setHashtagInput('');
    }
  };
  
  const handleHashtagDelete = (tagToDelete) => {
    setHashtags(hashtags.filter((tag) => tag !== tagToDelete));
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar10>
        <NavbarContent10 />
      </Navbar10>

      <Container maxWidth="md" sx={{ py: 8, flexGrow: 1 }}>
        <Typography variant="h4" gutterBottom>
          Post a New Question
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            mt: 4,
            mx: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            maxWidth: 600
          }}
        >
          <TextField
            label="Title"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            required
          />
          <TextField
            label="Body"
            variant="outlined"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            fullWidth
            multiline
            rows={20}
            required
          />
          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Hashtags (max 3)
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 1 }}>
              {hashtags.map((tag, index) => (
                <Button
                  key={index}
                  variant="outlined"
                  size="small"
                  sx={{ borderRadius: 20 }}
                  onClick={() => handleHashtagDelete(tag)}
                >
                  {tag} ✕
                </Button>
              ))}
            </Box>

            <TextField
              label="Add a hashtag"
              variant="outlined"
              value={hashtagInput}
              onChange={(e) => setHashtagInput(e.target.value)}
              onKeyDown={handleHashtagKeyDown}
              fullWidth
              placeholder="#example"
              helperText="Press Enter or Space to add (max 3)"
            />
          </Box>
          {/* XRP Reward 필드를 줄이기 */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <TextField
              label="XRP Reward"
              variant="outlined"
              type="number"
              value={reward}
              onChange={(e) => setReward(e.target.value)}
              required
              sx={{ width: '50%' }} // 👈 줄여줌
            />
          </Box>

          {/* Submit 버튼 줄이기 */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button type="submit" variant="contained" color="primary" sx={{ width: 160 }}>
              Submit Question
            </Button>
          </Box>
        </Box>
      </Container>


      <Footer7 />
    </Box>
  );
}
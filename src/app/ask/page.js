'use client';

import { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { Navbar10 } from '@/blocks/navbar';
import { NavbarContent10 } from '@/blocks/navbar/navbar-content';
import { Footer7 } from '@/blocks/footer';

export default function AskPage() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [reward, setReward] = useState('');

  const [hashtags, setHashtags] = useState([]);
  const [hashtagInput, setHashtagInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit Question:', { title, body, reward });
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
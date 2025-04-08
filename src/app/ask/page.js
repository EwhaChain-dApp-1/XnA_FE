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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit Question:', { title, body, reward });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Container maxWidth="md" sx={{ py: 8, flexGrow: 1 }}>
        <Typography variant="h4" gutterBottom>
          Post a New Question
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 3 }}
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
          <TextField
            label="XRP Reward"
            variant="outlined"
            type="number"
            value={reward}
            onChange={(e) => setReward(e.target.value)}
            fullWidth
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Submit Question
          </Button>
        </Box>
      </Container>

      <Footer7 />
    </Box>
  );
}
'use client'

import { useEffect, useState } from 'react'
import { Button, Typography, Container, Box } from '@mui/material'

export default function ConnectWalletPage() {
  const [xummInstance, setXummInstance] = useState(null)
  const [account, setAccount] = useState('')
  const [appName, setAppName] = useState('')

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://xumm.app/assets/cdn/xumm.min.js'
    script.async = true

    script.onload = () => {
      const xumm = new window.Xumm(process.env.NEXT_PUBLIC_XUMM_API_KEY)
      setXummInstance(xumm)

      xumm.on('ready', () => {
        console.log('✅ Xumm SDK Ready')
      })

      xumm.on('success', async () => {
        const account = await xumm.user.account
        setAccount(account)
        console.log('🎉 계정 연결 완료:', account)

         // ✅ 여기에 추가!
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ wallet_address: account })
          })

          const user = await response.json();
          localStorage.setItem('user_id', user.user_id);
          localStorage.setItem('wallet_address', user.wallet_address);
          console.log('✅ 사용자 정보 저장됨:', user);
        } catch (err) {
          console.error('❌ 사용자 저장 실패:', err)
        }

        const jwt = await xumm.environment.jwt
        setAppName(jwt?.app_name || '')
        console.log('✅ App Name:', jwt?.app_name)
      })

      xumm.on('logout', () => {
        console.log('👋 로그아웃됨')
        setAccount('')
      })
    }

    document.body.appendChild(script)
  }, [])

  const handleLogin = () => {
    if (!xummInstance) return
    xummInstance.authorize()
  }

  const handleLogout = () => {
    if (!xummInstance) return
    xummInstance.logout()
    setAccount('')
    localStorage.clear();
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 10, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        {appName || 'Xaman Wallet 연결'}
      </Typography>

      {account ? (
        <Box mt={4}>
          <Typography variant="h6">✅ 연결된 계정: {account}</Typography>
          <Box sx={{ mt: 2, display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Button variant="outlined" onClick={() => window.location.href = '/'}>
              홈으로
            </Button>
            <Button variant="outlined" onClick={handleLogout}>
              로그아웃
            </Button>
          </Box>
        </Box>
      ) : (
        <Button variant="contained" onClick={handleLogin}>
          Connect Xaman Wallet
        </Button>
      )}
    </Container>
  )
}

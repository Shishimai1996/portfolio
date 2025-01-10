import { Stack, Avatar, Box, Paper, Grow } from '@mui/material'
import * as React from 'react'
import { useEffect } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import Link from '@mui/material/Link'

const Profile = () => {
  const [showProfile, setShowProfile] = React.useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      if (scrollTop > 100) {
        // スクロール量が100ピクセルを超えたらPaperを表示
        setShowProfile(true)
      } else {
        setShowProfile(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <Box sx={{ height: 180 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Grow in={showProfile} timeout={2000}>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              '& > :not(style)': {
                m: 1,
                width: '60%',
                height: '300px',
              },
              justifyContent: 'center',
            }}
          >
            <Paper elevation={3}>
              <h1 id="about">About Me</h1>
              <Stack
                direction="row"
                spacing={3}
                sx={{
                  padding: '30px 50px 30px 50px',
                  justifyContent: 'center',
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="/cat.png"
                  sx={{ width: 56, height: 56 }}
                />
                <Stack direction="column" spacing={2} alignItems={'flex-start'}>
                  <p>
                    I am frontend engineer from Japan. I started carrier in this
                    industry since August, 2022.
                  </p>
                  <p>I am passionate about leaning cultural differences.</p>
                </Stack>
              </Stack>
            </Paper>
          </Box>
        </Grow>
        {/* Conditionally applies the timeout prop to change the entry speed. */}
        <Grow
          in={showProfile}
          style={{ transformOrigin: '0 0 0' }}
          {...(showProfile ? { timeout: 3000 } : {})}
        >
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              '& > :not(style)': {
                m: 1,
                width: '60%',
                height: '300px',
              },
              justifyContent: 'center',
              marginBottom: '20px',
            }}
          >
            <Paper elevation={3}>
              <h1 id="contact">Contact address</h1>
              <Stack
                direction="row"
                spacing={3}
                sx={{
                  padding: '30px 50px 30px 50px',
                  justifyContent: 'center',
                }}
              >
                <Stack direction="column" spacing={2} alignItems={'flex-start'}>
                  <GitHubIcon sx={{ width: 40, height: 40 }} />
                  <LinkedInIcon
                    sx={{ width: 40, height: 40 }}
                    color="primary"
                  />
                </Stack>
                <Stack
                  direction="column"
                  spacing={4}
                  alignItems={'flex-start'}
                  justifyContent={'center'}
                >
                  <Link
                    href="https://github.com/Shishimai1996"
                    underline="always"
                  >
                    {'https://github.com/Shishimai1996'}
                  </Link>

                  <Link
                    href="https://www.linkedin.com/in/mai-shimizu-73b2892a8/"
                    underline="always"
                  >
                    {'https://www.linkedin.com/in/mai-shimizu-73b2892a8/'}
                  </Link>
                </Stack>
              </Stack>
            </Paper>
          </Box>
        </Grow>
      </Box>
    </Box>
  )
}

export default Profile

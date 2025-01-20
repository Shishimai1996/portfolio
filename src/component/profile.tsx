import { Stack, Avatar, Box, Paper, Grow, Typography } from '@mui/material'
import * as React from 'react'
import { useEffect } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import Link from '@mui/material/Link'
import { useTranslation } from 'react-i18next'

const Profile = () => {
  const { t } = useTranslation()
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
            <Paper elevation={3} sx={{ p: 5 }}>
              <Typography variant="h5" id="about">
                {t('aboutMe')}
              </Typography>
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
                  <Typography variant="body1">{t('describeMyself')}</Typography>
                  <Typography variant="body1">{t('hobby')}</Typography>
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
            <Paper elevation={3} sx={{ p: 5 }}>
              <Typography variant="h5" id="contact">
                {t('contact')}
              </Typography>
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
                    variant="h5"
                    href="https://github.com/Shishimai1996"
                    underline="always"
                  >
                    {'https://github.com/Shishimai1996'}
                  </Link>

                  <Link
                    variant="h5"
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

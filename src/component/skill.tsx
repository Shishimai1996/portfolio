import * as React from 'react'
import figma from '../image/figma.svg'
import react from '../image/react.jpg'
import html from '../image/html.png'
import css from '../image/css.png'
import express from '../image/express.png'
import github from '../image/github.png'
import javascript from '../image/javascript.png'
import next from '../image/next.png'
import node from '../image/node.png'
import typescript from '../image/typescript.png'
import vscode from '../image/vscode.png'
import { Typography, Popover, Stack, Box, Grid } from '@mui/material'

interface MessageData {
  toolName: string
  countYear: string
}

const Skill = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null)

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  const currentDate: Date = new Date()

  const targetDate = anchorEl?.getAttribute('data-date')
    ? new Date(anchorEl.getAttribute('data-date') ?? '')
    : new Date()

  const diffInMilliSeconds = currentDate.getTime() - targetDate.getTime()

  const diffInYears = diffInMilliSeconds / (1000 * 60 * 60 * 24 * 365.25)

  const messages: MessageData = {
    toolName: String(anchorEl?.getAttribute('alt')),
    countYear: `${Math.round(diffInYears * 10) / 10}`,
  }

  const message = (messages: MessageData) => {
    const item = messages
    return (
      <Typography sx={{ p: 1 }}>
        {item.toolName}: {item.countYear} years
      </Typography>
    )
  }

  return (
    <>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        {open && anchorEl && message(messages)}
      </Popover>
      <Box sx={{ width: '100%', margin: '5%' }}>
        <Grid container rowSpacing={9} columnSpacing={{ xs: 1, sm: 2, md: 9 }}>
          <Grid item xs={6} md={6}>
            <h2 id="language">Programming Language</h2>
            <Stack
              direction="row"
              spacing={3}
              sx={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src={html}
                tabIndex={0}
                data-date="2022-08-01"
                alt="HTML"
                style={{ width: '8%' }}
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={(e) => handlePopoverOpen(e)}
                onMouseLeave={handlePopoverClose}
              />
              <img
                src={css}
                tabIndex={1}
                data-date="2022-08-01"
                alt="CSS"
                style={{ width: '6.3%' }}
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={(e) => handlePopoverOpen(e)}
                onMouseLeave={handlePopoverClose}
              />
              <img
                src={javascript}
                tabIndex={2}
                data-date="2022-08-01"
                alt="Javascript"
                style={{ width: '7%' }}
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={(e) => handlePopoverOpen(e)}
                onMouseLeave={handlePopoverClose}
              />
              <img
                src={typescript}
                alt="Typescript"
                style={{ width: '7%' }}
                tabIndex={3}
                data-date="2023-02-01"
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={(e) => handlePopoverOpen(e)}
                onMouseLeave={handlePopoverClose}
              />
            </Stack>
          </Grid>
          <Grid item xs={6} md={5}>
            <h2 id="framework">Framework</h2>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src={react}
                alt="React.js"
                style={{ width: '9%' }}
                tabIndex={4}
                data-date="2023-02-01"
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={(e) => handlePopoverOpen(e)}
                onMouseLeave={handlePopoverClose}
              />
              <img
                src={next}
                alt="Next.js"
                style={{ width: '7%' }}
                tabIndex={5}
                data-date="2023-03-01"
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={(e) => handlePopoverOpen(e)}
                onMouseLeave={handlePopoverClose}
              />
              <img
                src={node}
                alt="Node.js"
                style={{ width: '7%' }}
                tabIndex={6}
                data-date="2023-03-01"
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={(e) => handlePopoverOpen(e)}
                onMouseLeave={handlePopoverClose}
              />
              <img
                src={express}
                alt="Express.js"
                style={{ width: '7%' }}
                tabIndex={7}
                data-date="2024-01-01"
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={(e) => handlePopoverOpen(e)}
                onMouseLeave={handlePopoverClose}
              />
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <h2 id="design">Design Tool</h2>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src={figma}
                alt="Figma"
                style={{ width: '5%' }}
                tabIndex={8}
                data-date="2022-10-01"
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={(e) => handlePopoverOpen(e)}
                onMouseLeave={handlePopoverClose}
              />
            </Stack>
          </Grid>
          <Grid item xs={6} md={5}>
            <h2 id="development">Development Tool</h2>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src={vscode}
                alt="Visual Studio Code"
                style={{ width: '6%' }}
                tabIndex={9}
                data-date="2022-08-01"
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={(e) => handlePopoverOpen(e)}
                onMouseLeave={handlePopoverClose}
              />
              <img
                src={github}
                alt="GitHub"
                style={{ width: '7%' }}
                tabIndex={10}
                data-date="2022-08-01"
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={(e) => handlePopoverOpen(e)}
                onMouseLeave={handlePopoverClose}
              />
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Skill

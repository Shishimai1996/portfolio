import * as React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import SchoolIcon from '@mui/icons-material/School'
import WorkIcon from '@mui/icons-material/Work'
import { Divider, Stack } from '@mui/material'

export default function Resume() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        margin: '20px',
      }}
    >
      <Paper elevation={3} sx={{ width: '60%', height: '500px' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            padding: '50px',
          }}
        >
          <Stack
            sx={{
              alignItems: 'flex-start',
            }}
            spacing={5}
          >
            <Stack direction="column" spacing={1} sx={{ alignItems: 'center' }}>
              <h3>Mai Shimizu</h3>
              <h4>Frontend Engineer</h4>
            </Stack>
            <Stack
              direction="column"
              spacing={1}
              sx={{
                alignItems: 'center',
              }}
            >
              <SchoolIcon sx={{ color: '#eb76dbc5' }} />
              <p>Sugiyama University</p>
              <p>2015-2019</p>
              <p>Cross-Culture studies</p>
            </Stack>
          </Stack>
          <Divider orientation="vertical" flexItem sx={{ margin: '20px' }} />
          <Stack
            direction="column"
            spacing={1}
            sx={{
              alignItems: 'center',
            }}
          >
            <WorkIcon />
            <p>AISIN Co.</p>
            <p>2019/4~ current</p>
            <p>
              Work as an assistant for reducing ECU costs projects of vehicle
              components.
            </p>
            <p>Woven by Toyota. Inc</p>
            <p>2022/8 - 2024/12</p>
            <p>
              Work as an associate engineer for the Inventor support division.
            </p>
          </Stack>
        </Box>
      </Paper>
    </Box>
  )
}

import * as React from 'react'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Profile from './component/profile'
import Skill from './component/skill'
import Work from './component/work'
import Resume from './component/resume'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const Page = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            aria-label="basic tabs example"
            TabIndicatorProps={{ style: { backgroundColor: '#eb76dbc5' } }} // indicatorの色を変更
          >
            <Tab
              label="Profile"
              {...a11yProps(0)}
              sx={{
                color: '#eb76dbc5', // タブのテキストカラーを変更
                '&.Mui-selected': {
                  color: '#eb76dbc5', // 選択されたタブのテキストカラーを変更
                },
              }}
            />
            <Tab
              label="Skill"
              {...a11yProps(1)}
              sx={{
                color: '#eb76dbc5', // タブのテキストカラーを変更
                '&.Mui-selected': {
                  color: '#eb76dbc5', // 選択されたタブのテキストカラーを変更
                },
              }}
            />
            <Tab
              label="Work"
              {...a11yProps(2)}
              sx={{
                color: '#eb76dbc5', // タブのテキストカラーを変更
                '&.Mui-selected': {
                  color: '#eb76dbc5', // 選択されたタブのテキストカラーを変更
                },
              }}
            />
            <Tab
              label="resume"
              {...a11yProps(3)}
              sx={{
                color: '#eb76dbc5', // タブのテキストカラーを変更
                '&.Mui-selected': {
                  color: '#eb76dbc5', // 選択されたタブのテキストカラーを変更
                },
              }}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Profile />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Skill />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Work />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <Resume />
        </CustomTabPanel>
      </Box>
    </>
  )
}
export default Page

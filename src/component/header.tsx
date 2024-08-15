import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import TranslateIcon from '@mui/icons-material/Translate'
import { useEffect, useState } from 'react'
import { Autocomplete, TextField } from '@mui/material'

interface HeaderComponentProps {
  onValueChange: (value: number) => void
}

export const Header: React.FC<HeaderComponentProps> = ({ onValueChange }) => {
  const [isHeartClicked, setIsHeartClicked] = useState(false)
  const [search, setSearch] = useState<string>('')
  const [debouncedValue, setDebouncedValue] = useState(search)
  interface Search {
    label: string
    keys: string[]
    page: number
  }
  const searchList: Search[] = [
    {
      label: 'Profile',
      keys: ['bio', 'summary', 'overview', 'background'], //summary
      page: 0,
    },
    {
      label: 'Skill',
      keys: [
        'abilities',
        'expertise',
        'competencies',
        'proficiencies',
        'capabilities',
      ],
      page: 0,
    },
    {
      label: 'Work',
      keys: [
        'projects',
        'job',
        'pieces',
        'creations', //
        'examples',
        'portfolio items',
      ],
      page: 2,
    },
    {
      label: 'Resume',
      keys: [
        'cv',
        'career summary',
        'professional history',
        'employment record',
      ],
      page: 3,
    },
    {
      label: 'Contact address',
      keys: [
        'get in touch',
        'reach out',
        'connect',
        'contact information',
        'inquiries',
      ],
      page: 0,
    },
    {
      label: 'About me',
      keys: ['about', 'me', 'introduction', 'personal statement'],
      page: 0,
    },
    {
      label: 'Programming',
      keys: [
        'coding',
        'software development',
        'software engineering',
        'application development',
      ],
      page: 1,
    },
    {
      label: 'Language',
      keys: ['scripting', 'technologies', 'frameworks'], //framework
      page: 1,
    },
    {
      label: 'Framework',
      keys: ['library', 'toolkit', 'Platform', 'architecture', 'system'],
      page: 1,
    },
    { label: 'Design tool', keys: ['graphics tool', 'creative tool'], page: 1 }, //tool

    {
      label: 'Development',
      keys: [
        'engineering',
        'creation', //creation
        'construction',
        'build',
        'implementation',
      ],
      page: 1,
    },
    {
      label: 'Grafana',
      keys: [
        'dashboard',
        'visualization tool',
        'analytics platform', //platform
        'reporting tool',
      ],
      page: 2,
    },
    {
      label: 'Chart',
      keys: [
        'graph',
        'diagram',
        'plot', //plo
        'visualization',
        'figure',
        'data representation',
      ],
      page: 2,
    },
  ]

  const handleInputChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setSearch(value)
  }

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(search)
    }, 300)
    return () => {
      clearTimeout(handler)
    }
  }, [search])

  useEffect(() => {
    const result = searchList.find((item) => {
      // return (
      //   item.keys.includes(debouncedValue.toLowerCase()) ||
      //   item.label.toLowerCase() === debouncedValue.toLowerCase()
      // )
      return (
        item.keys.find((item) => item.includes(debouncedValue.toLowerCase())) ||
        item.label.toLowerCase().includes(debouncedValue.toLowerCase())
      )
    })
    const page = result ? result.page : undefined
    // const searchValue = searchList[debouncedValue as keyof typeof searchList]
    if (page !== undefined) {
      console.log(page)
      onValueChange(page)
    } else {
      console.log('Value not found in searchList')
    }
  }, [debouncedValue, onValueChange])

  const handleClickHeart = () => {
    setIsHeartClicked(true)
    setTimeout(() => {
      setIsHeartClicked(false)
    }, 400)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          color: '#523601dc',
          backgroundColor: '#f2f6f9',
        }}
      >
        <Toolbar>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Portfolio
          </Typography>
          <Box sx={{ width: 300, ml: 10, color: '#523601dc' }}>
            <Autocomplete
              // filterOptions={(options, state) => {
              //   const searchedInput = state.inputValue
              //   if (searchedInput === '') {
              //     return searchList.map((option) => option.label)
              //   }

              //   const result: string[] = []
              //   searchList.forEach((item) => {
              //     if (
              //       item.keys.find((item) =>
              //         item.includes(searchedInput.toLowerCase())
              //       ) ||
              //       item.label
              //         .toLowerCase()
              //         .includes(searchedInput.toLowerCase())
              //     ) {
              //       result.push(item.label)
              //     }
              //   })

              //   return result
              // }}
              filterOptions={(options, state) => {
                const searchedInput = state.inputValue
                if (searchedInput === '') {
                  return searchList.map((option) => option.label)
                }

                const result: string[] = []
                searchList.forEach((item) => {
                  if (
                    item.label
                      .toLowerCase()
                      .includes(searchedInput.toLowerCase())
                  ) {
                    result.push(item.label)
                  }
                  const searchedItem = item.keys.find((item) =>
                    item.toLowerCase().includes(searchedInput.toLowerCase())
                  )
                  if (searchedItem) {
                    result.push(`${item.label} (${searchedItem})`)
                  }
                })

                return result
              }}
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              options={['']} //will be handled by filterOptions
              onChange={handleInputChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      width: '250px',
                      height: '40px',
                      padding: '0',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#523601dc',
                    },
                    '& .MuiInputBase-input': {
                      color: '#523601dc',
                    },
                  }}
                  InputLabelProps={{
                    sx: {
                      top: '-5px', // Adjust this value to align the label
                    },
                  }}
                  InputProps={{
                    ...params.InputProps,
                    type: 'search',
                  }}
                />
              )}
            />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              sx={{ color: isHeartClicked ? 'red' : 'inherit' }}
              onClick={handleClickHeart}
            >
              {isHeartClicked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
            <IconButton size="large" sx={{ color: '#523601dc' }}>
              <TranslateIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import TranslateIcon from '@mui/icons-material/Translate'
import { Autocomplete, TextField } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import * as React from 'react'
import { useEffect, useState } from 'react'

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
      keys: ['bio', 'overview', 'background'],
      page: 0,
    },
    {
      label: 'Skill',
      keys: [
        'Abilities',
        'Expertise',
        'Competencies',
        'Proficiencies',
        'Capabilities',
      ],
      page: 1,
    },
    {
      label: 'Work',
      keys: [
        'Work Style',
        'Projects',
        'Job',
        'Pieces',
        'Creations',
        'Examples',
        'Portfolio Items',
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
      keys: ['scripting', 'technologies'],
      page: 1,
    },
    {
      label: 'Framework',
      keys: ['library', 'toolkit', 'architecture', 'system'],
      page: 1,
    },
    { label: 'Design tool', keys: ['graphics tool', 'creative tool'], page: 1 },

    {
      label: 'Development',
      keys: ['engineering', 'construction', 'build', 'implementation'],
      page: 1,
    },
    {
      label: 'Grafana',
      keys: [
        'dashboard',
        'visualization tool',
        'analytics platform',
        'reporting tool',
      ],
      page: 2,
    },
    {
      label: 'Chart',
      keys: [
        'graph',
        'diagram',
        'plot',
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
    //after the user put something in the search field, this will return the page number which matches searchList and filled words.
    const result = searchList.find((item) => {
      return (
        item.keys.find((item) => item.includes(debouncedValue.toLowerCase())) ||
        item.label.toLowerCase().includes(debouncedValue.toLowerCase())
      )
    })

    const page = result ? result.page : undefined

    if (page !== undefined) {
      onValueChange(page)
    } else {
      console.error('Value not found in searchList')
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
          <h1>Portfolio</h1>

          <Box sx={{ width: 300, ml: 10, color: '#523601dc' }}>
            <Autocomplete
              filterOptions={(options, state) => {
                //user put something in the search field.
                const searchedInput = state.inputValue
                //if the user do not put anything in the search field, it shows list.
                if (searchedInput === '') {
                  return searchList.map((option) => option.label)
                }

                const result: string[] = []
                searchList.forEach((item) => {
                  //if searchList label item includes search input from users, add it to the result array
                  if (
                    item.label
                      .toLowerCase()
                      .includes(searchedInput.toLowerCase())
                  ) {
                    result.push(item.label)
                  }

                  // //if searchList keys includes search input, add it to the result array.
                  const searchedItem = item.keys.find((item) => {
                    return item
                      .toLowerCase()
                      .includes(searchedInput.toLowerCase())
                  })
                  if (searchedItem != undefined) {
                    //result.push(`${item.label} (${searchedItem})`)
                    result.push(searchedItem)
                  }

                  // if the keys words starts with search input
                  // const searchedItem = item.keys.find((item) => {
                  //   //console.log({ item, searchedInput })

                  //   const res = item.split(' ').filter((splitItem) => {
                  //     //console.log({ splitItem, searchedInput })

                  //     return splitItem
                  //       .toLowerCase()
                  //       .startsWith(searchedInput.toLowerCase())
                  //   })

                  //   return result.length != 0
                  // })
                })

                return result.sort()
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

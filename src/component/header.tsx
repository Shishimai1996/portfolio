import * as React from 'react'
// import { styled, alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
// import InputBase from '@mui/material/InputBase'
// import SearchIcon from '@mui/icons-material/Search'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import TranslateIcon from '@mui/icons-material/Translate'
import { useEffect, useState } from 'react'
import {
  Autocomplete,
  // AutocompleteChangeDetails,
  // AutocompleteChangeReason,
  TextField,
} from '@mui/material'

// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(3),
//     width: 'auto',
//   },
// }))

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }))

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
// }))

interface HeaderComponentProps {
  onValueChange: (value: number) => void
}

export const Header: React.FC<HeaderComponentProps> = ({ onValueChange }) => {
  const [isHeartClicked, setIsHeartClicked] = useState(false)
  const [search, setSearch] = useState<string>('')
  const [debouncedValue, setDebouncedValue] = useState(search)

  const searchList = [
    {
      key: 'profile',
      page: 0,
    },
    { key: 'Profile', page: 0 },
    { key: 'PROFILE', page: 0 },
    { key: 'skill', page: 1 },
    { key: 'Skill', page: 1 },
    { key: 'SKILL', page: 1 },
    { key: 'work', page: 2 },
    { key: 'Work', page: 2 },
    { key: 'WORK', page: 2 },
    { key: 'resume', page: 3 },
    { key: 'Resume', page: 3 },
    { key: 'RESUME', page: 3 },
    { key: 'contact', page: 0 },
    { key: 'address', page: 0 },
    { key: 'about', page: 0 },
    { key: 'me', page: 0 },
    { key: 'programming', page: 1 },
    { key: 'language', page: 1 },
    { key: 'framework', page: 1 },
    { key: 'design', page: 1 },
    { key: 'tool', page: 1 },
    { key: 'development', page: 1 },
    { key: 'grafana', page: 2 },
    { key: 'chart', page: 2 },
  ]
  const handleInputChange = (
    // e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    event: React.SyntheticEvent<Element, Event>,
    value: string
    // reason: AutocompleteChangeReason,
    // details?: AutocompleteChangeDetails<string>
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
    const result = searchList.find((item) => item.key === debouncedValue)
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
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Portfolio
          </Typography>
          {/* <Search>
            <SearchIconWrapper sx={{ borderColor: '#523601dc' }}>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={search}
              onChange={handleInputChange}
            />
          </Search> */}
          <Box sx={{ width: 300, ml: 10, color: '#523601dc' }}>
            <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              options={searchList.map((option) => option.key)}
              onChange={handleInputChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search"
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

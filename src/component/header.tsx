import * as React from 'react'
import { styled, alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import TranslateIcon from '@mui/icons-material/Translate'
import { useEffect, useState } from 'react'
import sakura from '../image/sakura.jpg'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}))

interface HeaderComponentProps {
  onValueChange: (value: number) => void
}

export const Header: React.FC<HeaderComponentProps> = ({ onValueChange }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null)
  const [isHeartClicked, setIsHeartClicked] = useState(false)
  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const [search, setSearch] = useState<string>('')
  const [debouncedValue, setDebouncedValue] = useState(search)
  // const [list, setList] = useState<string[]>([])

  // useEffect(() => {
  //   const listItems = Array.from(document.querySelectorAll('ul > li')).map(
  //     (li) => li.textContent ?? ''
  //   )

  //   setList(listItems)
  // }, [])
  const searchList = {
    profile: 0,
    Profile: 0,
    PROFILE: 0,
    skill: 1,
    Skill: 1,
    SKILL: 1,
    work: 2,
    Work: 2,
    WORK: 2,
    resume: 3,
    Resume: 3,
    RESUME: 3,
    contact: 0,
    address: 0,
    about: 0,
    me: 0,
    programming: 1,
    language: 1,
    framework: 1,
    design: 1,
    tool: 1,
    development: 1,
    grafana: 2,
    chart: 2,
  }
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearch(e.currentTarget.value)
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
    const searchValue = searchList[debouncedValue as keyof typeof searchList]
    if (searchValue !== undefined) {
      onValueChange(searchValue)
    } else {
      console.log('Value not found in searchList')
    }
  }, [debouncedValue, onValueChange])
  // const filteredList = list.filter((item) => {
  //   return (
  //     typeof item === 'string' &&
  //     item.toLowerCase().includes(search.toLowerCase())
  //   )
  // })

  // const menuId = 'primary-search-account-menu'
  // const renderMenu = (
  //   <Menu
  //     anchorEl={anchorEl}
  //     anchorOrigin={{
  //       vertical: 'top',
  //       horizontal: 'right',
  //     }}
  //     id={menuId}
  //     keepMounted
  //     transformOrigin={{
  //       vertical: 'top',
  //       horizontal: 'right',
  //     }}
  //     open={isMenuOpen}
  //     onClose={handleMenuClose}
  //   >
  //     <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
  //     <MenuItem onClick={handleMenuClose}>My account</MenuItem>
  //   </Menu>
  // )

  // const mobileMenuId = 'primary-search-account-menu-mobile'
  // const renderMobileMenu = (
  //   <Menu
  //     anchorEl={mobileMoreAnchorEl}
  //     anchorOrigin={{
  //       vertical: 'top',
  //       horizontal: 'right',
  //     }}
  //     id={mobileMenuId}
  //     keepMounted
  //     transformOrigin={{
  //       vertical: 'top',
  //       horizontal: 'right',
  //     }}
  //     open={isMobileMenuOpen}
  //     onClose={handleMobileMenuClose}
  //   ></Menu>
  // )

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
          // height: '400px',
          color: '#523601dc',
          // position: 'relative',
          // overflow: 'hidden',
          backgroundColor: '#f2f6f9',
        }}
      >
        {/* <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${sakura})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(1.5px)',
            zIndex: -1,
          }}
        /> */}
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Portfolio
          </Typography>
          <Search>
            <SearchIconWrapper sx={{ borderColor: '#523601dc' }}>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={search}
              onChange={handleInputChange}
            />
          </Search>
          {/* <ul>
            {filteredList.map((item) => {
              return <li key={item}>{item}</li>
            })}
          </ul> */}
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
      {/* {renderMobileMenu}
      {renderMenu} */}
    </Box>
  )
}

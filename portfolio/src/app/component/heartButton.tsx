'use client'

import React from 'react'
import IconButton from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

export const HeartButton = ({
  isHeartClicked,
  handleClickHeart,
}: {
  isHeartClicked: boolean
  handleClickHeart: () => void
}) => {
  return (
    <>
      <IconButton
        size="large"
        sx={{ color: isHeartClicked ? 'red' : 'inherit' }}
        onClick={handleClickHeart}
      >
        {isHeartClicked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
    </>
  )
}

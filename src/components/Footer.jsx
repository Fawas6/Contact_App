import React from 'react'
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import BookmarkIcon from '@mui/icons-material/Bookmarks';
import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function Footer() {
  const [value, setValue] = useState(0)
  const navigate = useNavigate();
  const theme = createTheme({
    palette:{
      primary: {
        main:"#2eaa2e"
      },
      secondary: {
        main:"#2eaa2e"
      }
    },
  })
  return (
    <ThemeProvider theme={theme}>
     <BottomNavigation sx={{ width: '100%', position: 'absolute', bottom: '0px' }} showLabels
      value={value}
      onChange={(event, newValue) => {
      setValue(newValue);}}>
       <BottomNavigationAction label="Home" icon={<HomeIcon sx={{ fontSize: 35 }} />} onClick={() => navigate("\HomePage")} />
       <p>Built By <a href="https://adeoyemuhdfawas.com/" target="_blank" rel="noreferrer">Fawas</a></p>
       <BottomNavigationAction label="Bookmarks" icon={<BookmarkIcon sx={{ fontSize: 35 }} />} onClick={() => navigate("\BookmarksPage")} />
     </BottomNavigation>
    </ThemeProvider>
  )
}

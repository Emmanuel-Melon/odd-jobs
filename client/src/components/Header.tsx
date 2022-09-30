import * as React from 'react';
import { 
  Stack,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { styled, alpha } from '@mui/material/styles';
import GrassIcon from '@mui/icons-material/Grass';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

// project-password: dtzOf7doUtuJFBi4
// api key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjZmFkaGhra2JpdGtrdHpia3N4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQwMTY1MjIsImV4cCI6MTk3OTU5MjUyMn0.TUYnRPxfKZB1T4pFF7nY7RZQsRFVd1Z_4OoXmXbSGMA
// service role: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjZmFkaGhra2JpdGtrdHpia3N4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NDAxNjUyMiwiZXhwIjoxOTc5NTkyNTIyfQ.wwRWO23y38ffv1sBp5KdJFrQC-sphK2E6WhgqGCE2A0
// url: https://vcfadhhkkbitkktzbksx.supabase.co
export default function Header(){
    return (
      <Stack>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{bgcolor: '#7c6ea7', justifyContent: 'center', height: 80}} position="sticky">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <GrassIcon color="disabled" fontSize="large"/>
          <link rel="stylesheet" href="icons8-coin-67.png" />
          </IconButton>
        <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1 }}>
          ODD JOBS
        </Typography>
        <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
      </Toolbar>
    </AppBar>
    </Box>
    </Stack>
    );
}
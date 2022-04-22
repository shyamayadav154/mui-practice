import {
  AppBar,
  Box,
  styled,
  Toolbar,
  Typography,
  InputBase,
  Badge,
  Avatar,
  Stack
} from '@mui/material';
import React,{useState} from 'react';
import { Pets, Mail, Notifications } from '@mui/icons-material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding:"0 10px",
  borderRadius:theme.shape.borderRadius,
  width:"40%"
}));

const Icons = styled(Box)(({ theme }) => ({
    display:'none',
    gap:"20px",
    alignItems:'center',
    [theme.breakpoints.up('sm')]:{
        display:"flex"
    }

}));

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

function Navbar() {
    const [open, setOpen] = useState(false)
      const handleClick = (event) => {
        setOpen(open);
      };
      const handleClose = () => {
        setOpen(false);
      };
  return (
    <Box position="sticky" sx={{ flexFrow: 1,mb:7,zIndex:999 }}>
      <AppBar>
        <StyledToolbar>
          <Typography
            variant="h6"
            color="initial"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Lama Dev
          </Typography>
          <Pets sx={{ display: { xs: 'block', sm: 'none' } }} />
          <Search>
            <InputBase placeholder="search" />
          </Search>
          <Icons>
            <Badge badgeContent={4} color="secondary">
              <Mail color="action" />
            </Badge>
            <Badge badgeContent={4} color="secondary">
              <Notifications color="action" />
            </Badge>
            <Avatar
              sx={{ width: 30, height: 30 }}
              onClick={(e) => setOpen(true)}
              alt="Remy Sharp"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            />
          </Icons>
          <UserBox>
            <Avatar
              sx={{ width: 30, height: 30 }}
              onClick={(e) => setOpen(true)}
              alt="Remy Sharp"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            />
            <Typography variant="span" color="initial">
              John
            </Typography>
          </UserBox>
        </StyledToolbar>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </AppBar>
    </Box>
  );
}

export default Navbar;

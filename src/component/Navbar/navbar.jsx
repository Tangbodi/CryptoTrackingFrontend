import './navbar.css';
import { useEffect, useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Dialog, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';

const Navbar = () => {

  const [avatarUrl, setAvatarUrl] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openLogoutDialog, setOpenLogoutDialog] = useState(false);
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate(); 

  const userInfoInit = () => {
    const avatarUrlSession = sessionStorage.getItem('crypto-avatarurl');
    setAvatarUrl(avatarUrlSession);
    console.log(avatarUrl)
  };
  useEffect(() => {
    userInfoInit();
  },[]);

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogoutClick = () => {
    setOpenLogoutDialog(true); 
    setAnchorEl(null); 
  };

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      setLoading(true); 
      await signOut(auth); 
      sessionStorage.removeItem('crypto-avatarurl'); 
      setLoading(false); 
      navigate('/login'); 
    } catch (error) {
      setLoading(false); 
      console.error('Error logging out:', error);
    }
  };

  const handleCloseDialog = () => {
    setOpenLogoutDialog(false);
  };
  return (
    <>
      <header className="crypto-header">
      <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand">
                                Crypto Tracking
                            </a>
                        </div>
                    </div>
                </nav>
  
        <div className="crypto-header-right">

              <Avatar
                src={avatarUrl}
                sx={{ width: 50, height: 50 }}
                onClick={handleAvatarClick}
                style={{ cursor: 'pointer' }}
              />
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                style={{ cursor: 'pointer' }}
                onClose={handleCloseMenu}
              >
                <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
              </Menu>

              <Dialog
                className='afk-logout-confirm'
                open={openLogoutDialog}
                onClose={handleCloseDialog}
                aria-labelledby="responsive-dialog-title"
              >
                <DialogContent>
                  <DialogContentText>
                    Confirm to log out of the current account?
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button
                    className='c-btn'
                    onClick={handleCloseDialog}
                    variant="outlined"
                    autoFocus
                  >
                    Cancel
                  </Button>
                  <Button
                    className='s-btn'
                    onClick={() => {
                      setOpenLogoutDialog(false);
                      handleLogout();
                    }}
                    variant="contained"
                    autoFocus
                    disabled={loading}
                  >
                    Confirm
                  </Button>
                </DialogActions>
              </Dialog>       
        </div>    
      </header>
    </>
  );
};

export default Navbar;

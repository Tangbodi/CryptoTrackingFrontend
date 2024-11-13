import { Backdrop, CircularProgress } from '@mui/material';

const BackdropLoading = ({ open }) => {
  return (
    <Backdrop
      sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
      open={open}
      onClick={handleClose}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default BackdropLoading;

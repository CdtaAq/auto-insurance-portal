import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

export default function CustomModal({ open, onClose, title, children }) {
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="modal-title">
      <Box sx={style}>
        <Typography id="modal-title" variant="h6" component="h2" mb={2}>
          {title}
        </Typography>
        {children}
        <Button onClick={onClose} sx={{ mt: 3 }} variant="contained" fullWidth>
          Close
        </Button>
      </Box>
    </Modal>
  );
}

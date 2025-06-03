import React from 'react';
import { Container, Typography, Button } from '@mui/material';

export default function Upload() {
  const handleUpload = () => {
    alert('Upload button clicked');
  };

  return (
    <Container maxWidth="sm" className="mt-10">
      <Typography variant="h4" gutterBottom>
        Upload Documents
      </Typography>
      <Button variant="contained" onClick={handleUpload}>
        Upload Files
      </Button>
    </Container>
  );
}

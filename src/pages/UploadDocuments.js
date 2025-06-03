import React, { useState } from 'react';
import axios from '../api/axiosConfig';

function UploadDocuments() {
  const [file, setFile] = useState(null);

  const upload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post('/files/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Upload successful');
    } catch (err) {
      alert('Upload failed');
    }
  };

  return (
    <div className="container mt-4">
      <h3>Upload Document</h3>
      <input
        className="form-control mb-2"
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button className="btn btn-success" onClick={upload}>Upload</button>
    </div>
  );
}

export default UploadDocuments;

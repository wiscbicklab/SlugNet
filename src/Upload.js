import React , {useState} from 'react';
import './Upload.css';

function Upload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      alert(`File "${file.name}" selected!`);
      // Here, you can implement the actual upload logic (e.g., sending to a backend)
    } else {
      alert("Please select a file first.");
    }
  };

  return (
    <div className="upload-container">
      <h2>Upload a File</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!file}>
        Upload
      </button>
      {file && <p>Selected File: {file.name}</p>}
    </div>
  );
}

export default Upload;
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
      <h2>Register for the SlugNet Program here</h2>
      <h3>The Upload form must be filled out on the google forms website for technical reasons</h3>
      <p><a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeVP6tjcIM4QcWFbuL6Lm6NG9bKOlM6e3ObuUWcBPuyJvGncw/viewform?usp=header">Click Here</a> for Upload Form</p>
    </div>
  );
}

export default Upload;
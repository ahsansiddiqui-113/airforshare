import React, { useState } from 'react';
import './FileUpload.css';
import { FaDownload, FaTrashAlt, FaPlus } from 'react-icons/fa';

const FileUpload = () => {
  const [files, setFiles] = useState([{ name: 'add a doc' }]);

  const handleAddFile = (event) => {
    const newFiles = [...files];
    for (const file of event.target.files) {
      newFiles.push({ name: file.name });
    }
    setFiles(newFiles);
  };

  return (
    <div className="file-upload">
      <h1>Files</h1>
      <div className="file-list">
        {files.map((file, index) => (
          <div className="file-item" key={index}>
            <span>{file.name}</span>
          </div>
        ))}
        <label className="file-add">
          <FaPlus size={24} />
          <span>Add File<br />(up to 5Mb)</span>
          <input type="file" multiple onChange={handleAddFile} style={{ display: 'none' }} />
        </label>
      </div>
      <div className="file-actions">
        <button><FaDownload /> Download All</button>
        <button className="delete"><FaTrashAlt /> Delete All</button>
      </div>
    </div>
  );
}

export default FileUpload;

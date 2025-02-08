import React, { useState } from 'react';
import axios from 'axios';

const DataInput = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('http://localhost:8000/api/upload/', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            alert('File uploaded successfully!');
            console.log(response.data);
        } catch (error) {
            alert('Error uploading file.');
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Upload CSV File</h2>
            <input type="file" accept=".csv" onChange={handleFileChange} />
            <button onClick={handleSubmit}>Upload</button>
        </div>
    );
};

export default DataInput;
import React, { useEffect, useState } from 'react';
import { fetchScores, uploadCSV } from '../api';

function Dashboard() {
    const [scores, setScores] = useState([]);
    const [file, setFile] = useState(null);

    useEffect(() => {
        async function loadScores() {
            const data = await fetchScores();
            setScores(data);
        }
        loadScores();
    }, []);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            alert("Please select a file first.");
            return;
        }
        const result = await uploadCSV(file);
        if (result) {
            alert("CSV Uploaded Successfully!");
            window.location.reload(); // Refresh data
        }
    };

    return (
        <div>
            <h1>Score Dashboard</h1>
            
            {/* File Upload */}
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload CSV</button>

            {/* Display Scores */}
            <ul>
                {scores.map((score) => (
                    <li key={score.id}>{score.name}: {score.score}</li>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;

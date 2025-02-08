import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Comparison = () => {
    const [scoreData, setScoreData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/compare-scores/")
            .then((response) => {
                setScoreData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setError("Failed to load data");
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    // Preparing data for Chart.js
    const labels = scoreData.map((item) => item.name);
    const scores = scoreData.map((item) => item.score);

    const chartData = {
        labels,
        datasets: [
            {
                label: "Scores",
                data: scores,
                backgroundColor: "rgba(75, 192, 192, 0.6)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { position: "top" },
            title: { display: true, text: "Score Comparison" },
        },
    };

    return (
        <div style={{ width: "80%", margin: "auto", textAlign: "center" }}>
            <h2>Score Comparison</h2>
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default Comparison;

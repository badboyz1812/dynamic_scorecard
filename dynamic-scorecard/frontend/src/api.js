import axios from 'axios';

const BASE_URL = "http://127.0.0.1:8000/api/";

export const uploadCSV = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
        const response = await axios.post(`${BASE_URL}upload-csv/`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        return response.data;
    } catch (error) {
        console.error("Error uploading CSV:", error);
        return null;
    }
};

export const fetchGraphData = async () => {
    try {
        const response = await axios.get(`${BASE_URL}graph-data/`);
        return response.data;
    } catch (error) {
        console.error("Error fetching graph data:", error);
        return [];
    }
};

export const fetchScores = async () => {
    try {
        const response = await axios.get(`${BASE_URL}scores/`);
        return response.data;
    } catch (error) {
        console.error("Error fetching scores:", error);
        return [];
    }
};

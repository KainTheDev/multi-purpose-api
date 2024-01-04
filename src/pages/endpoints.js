// pages/endpoints.js
import Head from 'next/head';
import { useEffect } from 'react';

const Endpoints = () => {
    useEffect(() => {
        // Fetch and populate endpoints here
        // Example:
        fetchEndpoints();
    }, []);

    const fetchEndpoints = async () => {
        try {
            const response = await fetch('/api/fetchEndpoints'); // Replace with your actual endpoints URL
            const data = await response.json();
            // Assuming the data is an array of endpoints
            const endpointsContainer = document.getElementById('endpoints');
            const endpoints = data.endpoints
            endpointsContainer.innerHTML = endpoints.map(endpoint =>
                `<div><a href="/api/${endpoint}" target="_blank">${endpoint}</a></div>`
            ).join('')
        } catch (error) {
            console.error('Error fetching endpoints:', error);
        }
    };

    return (
        <div>
            <Head>
                <title>Endpoints - Multi-purpose API</title>
                <link rel="icon" href="MP.png" />
                <link rel="stylesheet" href="endpoints.css" />
            </Head>
            <h1>Endpoints:</h1>
            <div id="endpoints"></div>
        </div>
    );
};

export default Endpoints;

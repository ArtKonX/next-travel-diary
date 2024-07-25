import axios from 'axios';

export const getJourneysData = async () => {
    try {
        const response = await axios.get('../api/journeys');
        if (response.status === 200) {
            console.log('The journeys data was received successfully');
            return JSON.parse(JSON.stringify(response.data));
        }
    } catch (error) {
        console.error('Failed to fetch journeys:', error);
    }
};

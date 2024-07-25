'use client';

import { useEffect, useState } from "react";

import styles from './HeaderGeolocation.module.scss'
import axios from "axios";

export default function HeaderGeolocation() {

    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');


    useEffect(() => {

        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);

            },
            (error) => {
                console.error('Error getting location:', error);
            }
        );

    }, []);

    const getLocationData = async (latitude: number, longitude: number) => {
        const response = await axios.get(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`
        );
        const { city, country } = response.data.address;
        setCity(city);
        setCountry(country)
    };

    if (latitude && longitude) {
        getLocationData(latitude, longitude)
    }

    const cityLocal = window.localStorage.getItem('dataLocationCity')
    const countryLocal = window.localStorage.getItem('dataLocationCountry')

    if (!cityLocal && !countryLocal) {
        window.localStorage.setItem('dataLocationCity', city)
        window.localStorage.setItem('dataLocationCountry', country)
    }


    // localStorage.clear();
    return (
        <div className={styles.container}>
            <span className={styles['city']}>Город - {cityLocal ? cityLocal : 'Не найден'}</span>
        </div>
    )
}
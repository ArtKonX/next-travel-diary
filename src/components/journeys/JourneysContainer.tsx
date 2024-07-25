'use client';

import React, { useState, useEffect } from 'react';
import PostContainer from '@/components/journey/JourneyContainer';
import styles from './JourneysContainer.module.scss';
import { dmSerifDisplay400 } from '@/styles/fonts-project/fonts';

import { getJourneysData } from '@/utils/apiUtils/apiRequests';

const JourneysContainer = () => {

    const [journeys, setJourneys] = useState<string[]>();

    useEffect(() => {
        const fetchJourneys = async () => setJourneys(await getJourneysData())
        if (fetchJourneys) fetchJourneys()
    }, []);

    if (!journeys) return <div>Loading...</div>;

    return (
        <div className={styles['container-journeys']}>
            <div className={`${dmSerifDisplay400.className} ${styles['journeys']}`}>
                <h1 className={styles['journeys__title']}>Все путешествия пользователей:</h1>

                <ul className={styles['journeys__block']}>
                    {journeys.length >= 1 ? (
                        journeys.map((journey: any) => (!(journey.isHidden) ?
                            (<li key={journey._id}><PostContainer journey={journey} /></li>) : ''
                        ))
                    ) : (
                        <li className={styles['journeys__no-journeys']}>{'Нет путешествий('}</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default JourneysContainer;
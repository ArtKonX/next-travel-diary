'use client'

import React, { useState, useEffect } from 'react';

import { dmSerifDisplay400 } from '@/styles/fonts-project/fonts';

import JourneyContainer from '@/components/journey/JourneyContainer'

import { getJourneysData } from '@/utils/apiUtils/apiRequests';

import IJourney from '@/interfaces/journey.interface';

export async function getStaticPaths() {
    const response = await getJourneysData();
    const posts = response.data;

    const paths = posts.map((post: IJourney) => ({
        params: { slug: post._id.toString() },
    }));

    return {
        paths,
        fallback: false,
    };
}

type Params = {
    slug: string
}

export default function JourneyPage({ params }: {
    params: Params
}) {

    const [journeys, setJourneys] = useState<IJourney[]>([]);

    const journeyOnly = journeys.find((post: IJourney) => post._id.toString() === params.slug);

    useEffect(() => {
        const getJourneys = async () => setJourneys(await getJourneysData())
        if (getJourneys) getJourneys()
    }, []);


    if (!journeyOnly) {
        return <div>Loading...</div>;
    }

    return (
        <div className={`${dmSerifDisplay400.className}`}>
            <JourneyContainer journey={journeyOnly} params={params} />
        </div>
    );
}
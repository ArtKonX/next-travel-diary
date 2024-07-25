import WriteAJourneyContainer from '@/components/write/WriteAJourneyContainer'

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'WriteAJourney',
}

const WriteAJourney = () => {

    return (
        <div>
            <WriteAJourneyContainer />
        </div>
    );
};

export default WriteAJourney;
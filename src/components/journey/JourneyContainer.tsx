import JourneyInfo from '@/components/journey/journeyInfo/JourneyInfo'

import styles from './JourneyContainer.module.scss'

import IJourney from '@/interfaces/journey.interface';

type Params = {
    slug: string;
};

const JourneyContainer = ({ journey, params }: { journey: IJourney, params?: Params }) => {

    return (
        <div className={styles['container-journey']}>
            <JourneyInfo
                journey={journey}
            />
        </div>
    );
};

export default JourneyContainer;
import styles from './JourneyInfo.module.scss'
import Link from 'next/link';
import getDate from '@/utils/date';

import ImageJourneyCarousel from '@/components/journey/imageJourneyCarousel/imageJourneyCarousel'

import IJourney from '@/interfaces/journey.interface';

import { useSession } from "next-auth/react";

const JourneyInfo = ({ journey }: { journey: IJourney }) => {


    const { data: session } = useSession();


    return (
        <div>
            <Link href={`/journey/${journey._id}`}>
                <h2 className={styles['journey-title']}>{journey.title}</h2>
            </Link>
            <p className={styles['journey-content']}>{journey.content}</p>
            <ImageJourneyCarousel images={journey.photos} />
            <span className={styles['journey-username']}>Стоимость - {journey.price} руб.</span>
            <span className={styles['journey-username']}>Старна - {journey.location.dataLoc[1]}, Город - {journey.location.dataLoc[0]}</span>

            <span className={styles['journey-username']}>{(journey.email != session?.user?.email) ? `Автор - ${journey.name}` : 'Автор - Вы'}</span>
            <span className={styles['journey-time']}>{getDate(journey.createdAt)}</span>
        </div>
    );
};

export default JourneyInfo;
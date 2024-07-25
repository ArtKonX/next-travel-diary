import { useState } from 'react';
import Image from 'next/image';

import { dmSerifDisplay400 } from '@/styles/fonts-project/fonts';

import styles from './imageJourneyCarousel.module.scss'

const ImageJourneyCarousel = ({ images }: { images: [] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className={styles['carysel-container']}>
            <h2 className={`${dmSerifDisplay400.className} ${styles['carysel-title']}`}>Изображение мест:</h2>
            <div className={styles['carysel']}>
                {images.length > 1 ?
                (<><button className={styles['carysel__btn']} onClick={handlePrev}>{'<'}</button>
                    <Image width={500} height={500} className={styles['carysel__image']} src={images[currentIndex]} alt={`Image ${currentIndex}`} />
                    <button className={styles['carysel__btn']} onClick={handleNext}>{'>'}</button></>)
                    : (<Image width={500} height={500} className={styles['carysel__image']} src={images[currentIndex]} alt={`Image ${currentIndex}`} />)}
            </div>
        </div>
    );
};

export default ImageJourneyCarousel
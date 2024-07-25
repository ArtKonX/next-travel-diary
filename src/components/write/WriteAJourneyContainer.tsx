'use client';

import React from 'react';
import { WriteAJourneyForm } from './writeAJourneyForm/WriteAJourneyForm'
import styles from './WriteAJourneyContainer.module.scss'
export default function WriteAPostContainer() {
  return (
    <div className={styles['container-post']}>
      <h1 className={styles.title}>Напишите Ваше путешествие:</h1>
      <WriteAJourneyForm />
    </div>
  );
}
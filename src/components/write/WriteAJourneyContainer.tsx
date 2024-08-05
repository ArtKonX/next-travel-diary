'use client';

import React from 'react';
import { WriteAJourneyForm } from './writeAJourneyForm/WriteAJourneyForm'
import styles from './WriteAJourneyContainer.module.scss'
import { useSession } from 'next-auth/react';
export default function WriteAPostContainer() {

  const { data: session } = useSession();

  if (!session?.user) return (<h1 className={styles.title}>Вы не вошли в аккаунт</h1>)

  return (
    <div className={styles['container-post']}>
      <h1 className={styles.title}>Напишите Ваше путешествие:</h1>
      <WriteAJourneyForm />
    </div>
  );
}
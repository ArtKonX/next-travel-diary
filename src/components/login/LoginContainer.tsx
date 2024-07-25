'use client'

import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

import styles from './LoginContainer.module.scss';
import { dmSerifDisplay400 } from '../../styles/fonts-project/fonts';

import LoginForm from './loginForm/LoginForm';

import LoginLink from './loginLink/LoginLink';

export default function LoginContainer() {
    const router = useRouter();
    const { status: sessionStatus } = useSession();

    useEffect(() => {
        if (sessionStatus === 'authenticated') {
            router.replace('/home');
        }
    }, [sessionStatus, router]);

    if (sessionStatus === 'loading') {
        return <h1>Loading...</h1>;
    }

    return (
        <div className={styles['container-login']}>
            <div className={`${dmSerifDisplay400.className} ${styles['card']}`}>
                <h1 className={styles['card__title']}>Войти в аккаунт</h1>
                <LoginForm />
                <LoginLink text={'Зарегистрироваться если нет аккаунта'} href={'/register'} />
                <LoginLink text={'На главную'} href={'/home'} />
            </div>
        </div>
    );
}

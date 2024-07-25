'use client';

import styles from './HeaderLogin.module.scss';
import LoginLogoutButton from './loginLogoutButton/LoginLogoutButton';
import UserLoginName from './userLoginName/UserLoginName';
import { useSession } from 'next-auth/react';

export default function HeaderAccount() {

    const { data: session } = useSession();

    return (
        <div className={styles.container}>
            {session && (<UserLoginName />)}
            <LoginLogoutButton />
        </div>
    )
}
'use client'

import Link from 'next/link';
import { useSession } from "next-auth/react";
import styles from './UserLoginName.module.scss';

export default function UserLoginName() {
    const { data: session } = useSession();

    return (
        <div>
            <Link className={styles['user-link']} href={session ? "/account" : '/home'}>{session?.user?.name}</Link>
        </div>

    )
}

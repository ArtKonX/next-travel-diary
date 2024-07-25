'use client';

import { useSession } from 'next-auth/react';
import MenuLink from './menuLink/MenuLink';
import useActiveLink from '@/hooks/useActiveLink'
import { dmSerifDisplay400 } from '@/styles/fonts-project/fonts';
import styles from './HeaderMenu.module.scss';

export default function HeaderMenu() {
    const { data: session }: any = useSession();
    const isHomeActive = useActiveLink('/home');
    const isWriteActive = useActiveLink('/write-a-journey');
    const isAboutUsActive = useActiveLink('/about-us');

    return (
        <div>
            <nav className={styles.navigation}>
                <ul className={`${dmSerifDisplay400.className} ${styles.menu}`}>
                    <li>
                        <MenuLink href="/home" isActive={isHomeActive}>
                            Путешествия
                        </MenuLink>
                    </li>
                    {session && (
                        <li>
                            <MenuLink href="/write-a-journey" isActive={isWriteActive}>
                                Написать
                            </MenuLink>
                        </li>
                    )}
                    <li>
                        <MenuLink href="/about-us" isActive={isAboutUsActive}>
                            О нас
                        </MenuLink>
                    </li>
                </ul>
            </nav>
        </div>

    );
}
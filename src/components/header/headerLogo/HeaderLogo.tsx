'use client';

import Link from 'next/link';

import styles from './HeaderLogo.module.scss';
import { pacifico, russoOne } from '../../../styles/fonts-project/fonts';

export default function HeaderLogo() {

    return (
        <div className={styles['header-logo']}>
            <Link className={styles['header-logo__link']} href="/home" replace>
                <span className={`${pacifico.className} ${styles['logo-text']}`}>Travel<span className={`${russoOne.className} ${styles['logo-text_color']}`}>Notes</span></span>
            </Link>
        </div>
    )
}
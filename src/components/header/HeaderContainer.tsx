'use client';

import HeaderLogo from './headerLogo/HeaderLogo';
import HeaderMenu from './headerMenu/HeaderMenu';
import HeaderAccount from './headerLogin/HeaderLogin';

import HeaderGeolocation from './headerGeolocation/HeaderGeolocation';
import styles from './HeaderContainer.module.scss'

export default function HeaderContainer () {

    return (
        <div className={styles['container-header']}>
            <HeaderLogo/>
            <HeaderMenu/>
            <HeaderGeolocation />
            <HeaderAccount/>
        </div>
    )
}
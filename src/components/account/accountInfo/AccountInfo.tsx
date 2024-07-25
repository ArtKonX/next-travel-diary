import styles from './AccountInfo.module.scss';
import { useSession } from "next-auth/react";

export default function AccountInfo() {

    const { data: session } = useSession();

    return (
        <div className={styles['account-info']}>
            <h1 className={styles['account-info__title']}>Информация о Вашем аккаунте:</h1>
            <span className={styles['account-info__info-about-user']}>Ваше имя: {session?.user?.name}</span>
            <span className={styles['account-info__info-about-user']}>Ваша электронная почта: {session?.user?.email}</span>
        </div>
    );
}
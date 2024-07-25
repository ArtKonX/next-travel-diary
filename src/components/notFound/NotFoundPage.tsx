import Image from "next/image"

import styles from './NotFoundPage.module.scss'

export default function NotFound() {
     return (
          <div className={styles['wrapper-img']}>
               <Image alt="картинка" className={styles['not-found-img']} src={'/images/404.jpg'} width={1000} height={666} />
          </div>
     )
}
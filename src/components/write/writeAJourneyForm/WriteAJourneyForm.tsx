'use client';

import React, { useState, useRef } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { roboto, dmSerifDisplay400 } from '@/styles/fonts-project/fonts';
import styles from './WriteAJourneyForm.module.scss'
import axios from 'axios';

import autoResizeTextarea from '@/utils/autoTextareaUtils/autoResizeTextarea'

export const WriteAJourneyForm = () => {
    const { data: session } = useSession();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const [files, setFiles] = useState<File[]>([]);

    const [price, setPrice] = useState(0);


    const router = useRouter();
    const titleRef = useRef(null);
    const contentRef = useRef(null);

    const [imageData, setImageData] = useState<string[]>([]);

    const cityLoc = window.localStorage.getItem('dataLocationCity')
    const countryLoc = window.localStorage.getItem('dataLocationCountry')

    const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const files = Array.from(event.target.files);
            setFiles(files);

            const base64Files = await Promise.all(files.map(convertToBase64));
            setImageData(base64Files);
        }
    };

    console.log(files)



    const convertToBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result as string);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    const handleSubmit = async () => {

        try {
            if (cityLoc && countryLoc) {
                const data = {
                    email: session?.user?.email,
                    name: session?.user?.name,
                    title,
                    content,
                    photos: imageData,
                    price,
                    city: cityLoc,
                    country: countryLoc
                };

                const response = await axios.post('../api/journeys', data);

                setImageData([]);

                if (response.status === 200) {
                    router.push('/home');
                    console.log('Journey created');

                }

            }

        } catch (error) {
            console.error('Error creating journey:', error);
        }
    };

    return (
        <div>
            <form className={`${dmSerifDisplay400.className} ${styles.form}`} onSubmit={(e) => { [handleSubmit(), e.preventDefault()] }}>

                <div className={styles['form__input-block']}>
                    <label className={styles['label-title']}>Заголовок:</label>
                    <input ref={titleRef} className={`${roboto.className} ${styles.input}`} type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className={styles['form__textarea-block']}>
                    <label className={styles['label-title']}>Весь контент:</label>
                    <textarea
                        ref={contentRef}
                        className={`${roboto.className} ${styles.textarea}`}
                        rows={1}
                        contentEditable="true"
                        onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                            autoResizeTextarea(e);
                            setContent(e.target.value)
                        }}
                    />
                </div>
                <div className={styles['form__price-input-block']}>
                    <label className={styles['label-title']}>Стоимость путешествия:</label>
                    <input ref={titleRef} className={`${roboto.className} ${styles.input}`} type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
                </div>

                <div className={styles['file-upload-block']}>
                    <label className={styles['file-upload']}>
                        Загрузить изображения<input className={styles['file-upload__input']} accept="image/png, image/gif, image/jpeg" type="file" multiple onChange={handleImageUpload} />
                    </label>
                    <label className={styles['label-title']}>Список файлов:</label>
                    <ul className={styles['list-files']}>
                        {files.length >= 1 ? files?.map((file) => (<li className={styles['file-elem']} key={file.lastModified}>{file.name}</li>)) : (<li className={styles['file-elem']}>Файлы не выбраны</li>)}
                    </ul>
                </div>


                <button className={styles['form__btn-submit']} type='submit'>
                    Создать путешествие
                </button>
            </form>
        </div>

    );
};
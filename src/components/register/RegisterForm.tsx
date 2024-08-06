'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import InputBlock from './inputBlock/InputBlock'


import React from 'react';
import axios from 'axios';
import RegisterLink from './registerLink/RegisterLink';

import styles from './RegisterForm.module.scss';
import { dmSerifDisplay400 } from '../../styles/fonts-project/fonts';

type InputsType = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    subscriptions: object;
    posts: object;
};

const RegisterForm = () => {
    const params = useSearchParams();
    const router = useRouter();
    let callbackUrl = params.get('callbackUrl') || '/';

    const { register, handleSubmit, getValues, formState } = useForm<InputsType>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            subscriptions: [],
            posts: [],
        },
    });

    const { isSubmitting } = formState;

    const handleFormSubmit: SubmitHandler<InputsType> = async (form) => {
        const { name, email, password, subscriptions } = form;

        try {
            const res = await axios.post('/api/auth/register', {
                name,
                email,
                password,
                subscriptions
            });

            if (res.status === 200) {
                console.log('Registration was successful')
                router.push(
                    '/login'
                )
            }
        } catch (error: any) {
            console.error('Failed registration request:', error);
        }
    };

    return (
        <div className={styles['container-register']}>
            <div className={`${dmSerifDisplay400.className} ${styles['card']}`}>
                <h1 className={styles['card__title']}>Регистрация нового пользователя:</h1>
                <form className={styles['card__form']} onSubmit={handleSubmit(handleFormSubmit)}>
                    <InputBlock
                        label="Имя"
                        id="name"
                        placeholder="Имя..."
                        register={register('name')}
                    />
                    <InputBlock
                        label="Электронная почта"
                        id="email"
                        placeholder="Электронная почта..."
                        register={register('email', {
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Email is invalid',
                            },
                        })}
                    />
                    <InputBlock
                        label="Пароль"
                        id="password"
                        placeholder="Пароль..."
                        register={register('password')}
                    />
                    <InputBlock
                        label="Подтвердите пароль"
                        id="confirmPassword"
                        placeholder="Повторите пароль..."
                        register={register('confirmPassword', {
                            validate: (value) => {
                                const { password } = getValues();
                                return password === value || 'Passwords should match!';
                            },
                        })}
                    />
                    <div className={styles['form__btn-register-block']}>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={styles['btn-register']}
                        >
                            Регистрация
                        </button>
                    </div>
                </form>
                <div>
                    <span className={styles['card__span-login']}>Есть аккаунт?</span>
                    <RegisterLink text={'Войти в аккаунт'} href={`/login?callbackUrl=${callbackUrl}`} />
                </div>
                <div>
                    <RegisterLink text={'На главную'} href={'/'} />
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
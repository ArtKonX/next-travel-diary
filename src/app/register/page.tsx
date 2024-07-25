import { Metadata } from 'next'
import RegisterForm from '@/components/register/RegisterForm'

export const metadata: Metadata = {
    title: 'Register',
}

export default async function RegisterPage() {
    return (
        <div>
            <RegisterForm />
        </div>
    )
}
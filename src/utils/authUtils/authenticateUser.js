import { signIn } from "next-auth/react";

export default async function authenticateUser(e) {
    e.preventDefault()
    const email = e.target[0].value;
    const password = e.target[1].value;

    await signIn('credentials', {
        redirect: false,
        email,
        password,
    });
};
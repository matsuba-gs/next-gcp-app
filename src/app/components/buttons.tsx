"use client";

import { signIn, signOut } from "next-auth/react";

// ログインボタン
export const LoginButton = (props: { provider: string }) => {
    return (
        <button style={{marginRight: 10}} onClick={() => signIn(props.provider)}>
            Sign in w/ {props.provider}
        </button>
    );
};

// ログアウトボタン
export const LogoutButton = () => {
    return (
        <button style={{marginRight: 10}} onClick={() => signOut()}>
            Sign Out
        </button>
    );
};
"use client"
import Link from "next/link";
import { useState } from "react"

export default function Login() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleClick = (e) => {
        console.log(user +" "+ password);
    }
    return (
        <>
            <h1>Login</h1>
            <input
                type="text"
                value={user}
                placeholder="User"
                onChange={(e) => setUser(e.target.value)}
            >
            </input>
            <input
                type="text"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            >
            </input>
            <button
                onClick={() => handleClick(user, password)}
            >
                Enviar
            </button>
        </>
    )
}
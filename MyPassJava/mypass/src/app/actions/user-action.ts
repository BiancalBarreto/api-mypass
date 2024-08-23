
'use server'

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function login(prevState: any, formData: FormData) {

    const user = {
        username: formData.get('username'),
        password: formData.get('password'),
    }

    const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })

    if (!response.ok) {
        return {
            response: "acesso negado",
        }
    }

    const json = await response.json()
    const token = json.token
    const username = json.username
    
    cookies().set("token", token)
    cookies().set("user", username)
    redirect('/home')


}

export async function logout() {
    cookies().delete("token")
    redirect('/')
}
"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function getPasswords(){
    const response = await fetch('http://localhost:8080/pass', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookies().get('token')?.value}`,
        },
    })

    if(response.status === 401 || response.status === 403){
        redirect('/')
    }

    if (!response.ok) {
        throw new Error('Erro ao buscar senhas. ' + response.status)
    }

    const json = await response.json()
    return json
}
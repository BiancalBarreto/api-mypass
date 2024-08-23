'use client'
import { LogOut } from "lucide-react"
import { Button } from "./button"
import { logout } from "@/app/actions/user-action"

export default function Logout(props: { username: string | undefined }) {

    function handleLogout() {
        logout()
    }

    return (
        <div className="space-x-2">
            <span>{props.username}</span>
            <Button onClick={handleLogout}>
            <LogOut size={16}/>
            </Button>
        </div>
    )
}
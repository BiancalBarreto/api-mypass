'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormState } from "react-dom";
import { login } from "./actions/user-action";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

const initialState = {
  response: ''
}
export default function Home() {

  const [ state, handleSubmit ] = useFormState(login, initialState)

  return (
    <main className="flex min-h-screen flex-col items-center space-y-10 p-24">
      <h1 className="text-4xl font-bold">MyPass</h1>
      <form action={handleSubmit} className="space-y-5">
        <div>
          <Label htmlFor="username">Username</Label>
          <Input type="username" name="username"/>
        </div>
        <div>
          <Label htmlFor="password">Senha</Label>
          <Input type="password" name="password"/>
        </div>
        <Button>Entrar</Button>
        
        { state?.response && 
                <Alert variant={"destructive"}>
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Erro</AlertTitle>
                  <AlertDescription>
                    {state.response}
                  </AlertDescription>
              </Alert>
        }
      </form>
    </main>
  );
}

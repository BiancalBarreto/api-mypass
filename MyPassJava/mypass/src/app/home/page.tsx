import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button";
import { KeyRound, Link, LogOut, User } from "lucide-react";
import { logout } from "../actions/user-action";
import { getPasswords } from "../actions/passwords-actions";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Logout from "@/components/ui/logout";

export default async function Home() {

  const data = await getPasswords()
  const user = cookies().get('user')?.value

  return (
    <main className="flex min-h-screen flex-col space-y-10 p-24">

      <nav className="absolute top-2 right-2">
        <Logout username={ user }/>
      </nav>

      <h1 className="text-4xl font-bold">MyPass</h1>
      <h2 className="text-xl font-semibold">Minhas Senhas</h2>

      <section>
        <Accordion type="single" collapsible className="w-full">
          {
            data.map((item: Password, index: number) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.url}</AccordionTrigger>
                <AccordionContent className="grid gap-4">
                  <div className="flex items-center gap-2">
                    <User size={24} />
                    <span>{item.username}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <KeyRound size={24} />
                    <span>{item.password}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link size={24} />
                    <a href={item.url} target="_blank">{item.url}</a>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))
          }
        </Accordion>

      </section>
    </main>
  );
}

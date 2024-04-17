import { Icon } from "@/components/Icon";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen p-24">
      <div><img src="/image1.png" alt="barber" className="w-11/12"/></div>
      <div className="flex flex-col justify-start items-center mx-auto pt-12">
        <Icon/>
        <p className="text-stone-700 font-bold text-4xl text-center mt-40">SEJA BEM-VINDO!</p>
        <Link href={"./register/barbearia"}>
          <Button className="bg-cerulean-blue-700 m-8 text-2xl" variant="solid">Eu sou uma barbearia</Button>
        </Link>   
        <Link href={"./register/cliente"}>
          <Button className="bg-cerulean-blue-700 text-2xl" variant="shadow">Eu sou um cliente</Button>
        </Link>
      </div>
    </main>
  );
}

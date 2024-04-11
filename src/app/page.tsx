import { Icon } from "@/components/Icon";
import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="flex min-h-screen p-24">
      <div><img src="/image1.png" alt="barber" className=""/></div>
      <div className="flex flex-col justify-start items-center mx-auto pt-12">
        <Icon/>
        <p className="text-stone-700 font-bold text-4xl text-center mt-40">SEJA BEM-VINDO!</p>
        <Button className="bg-cerulean-blue-700 m-8 text-2xl">Eu sou uma barbearia</Button>
        <Button className="bg-cerulean-blue-700 text-2xl">Eu sou um cliente</Button>
      </div>
    </main>
  );
}

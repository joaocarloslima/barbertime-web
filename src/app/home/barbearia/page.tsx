import { getBarbearias } from "@/app/actions/barbearia/get";
import Barbearia from "@/app/register/barbearia/page";
import { BarbeariaItem } from "./BarbeariaItem";

interface Barbearia {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  cnpj: string;
}


export default async function Barbearias() {

  const barbearias: Barbearia[] = await getBarbearias()

  return (
    <main className="flex min-h-screen flex-col items-center ">

      <section className="bg-slate-900 rounded min-w-[500px] p-6 m-4">
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold" >Barbearia Cadastradas</h2>
        </div>

        <div id="data">
          {barbearias.map(Barbearia => <BarbeariaItem barbearia={Barbearia} />)}
        </div>

      </section>

    </main>
  );
}
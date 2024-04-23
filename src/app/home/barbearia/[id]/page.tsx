
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { Detalhar } from "./Detalhar";
import { getById } from "@/app/actions/barbearia/get-by-id";


export default async function DetalharBarbearia({params}: Params) {
  const { id } = params

  const barbearia: Barbearia = await getById(id)

  return (
    <main className="flex min-h-screen flex-col items-center ">

      <Detalhar {...barbearia} />

    </main>
  );
}

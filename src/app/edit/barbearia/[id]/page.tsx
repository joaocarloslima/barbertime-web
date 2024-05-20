
import { EditForm } from "../../../edit/barbearia/[id]/EditForm";
import { getById } from "@/app/actions/barbearia/get-by-id";

interface Params {
  params: {
    id: number
  }
}

export default async function EditarBarbearia({params}: Params) {
  const { id } = params

  const barbearia: Barbearia = await getById(id)

  return (
    <main className="flex min-h-screen flex-col items-center ">

      <EditForm {...barbearia} />

    </main>
  );
}

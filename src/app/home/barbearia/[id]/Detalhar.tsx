"use client"

import { destroy } from "@/app/actions/barbearia/destroy";
import { update } from "@/app/actions/barbearia/update";
import { DropDownActions } from "@/components/DropDownActions";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";


const initialState = {
    messageNome: '',
}

export function Detalhar(barbearia: Barbearia) {
    const [state, formAction] = useFormState(update, initialState)
    const router = useRouter()
    
    function handleDelete(){
        toast.promise(
            destroy(barbearia.id),
             {
               loading: 'excluindo...',
               success: "Excluída com sucesso!",
               error: "Erro ao excluir.",
             }
           );
    }

    return (

        <form action={formAction} className="flex flex-col items-center bg-slate-700 rounded min-w-[500px] p-6 m-4">
            <input type="hidden" name="id" value={barbearia.id} />
            <h2 className="text-2xl font-bold">Barbearia: {barbearia.nome}</h2>
            <p>EMAIL: {barbearia.email}</p>
            <p>TELEFONE: {barbearia.telefone}</p>
            <p>CNPJ: {barbearia.cnpj}</p>
            <DropDownActions 
                onEdit={() => router.push(`/edit/barbearia/${barbearia.id}`)}
                onDelete={handleDelete} 
            />
            <Link href={"/home/barbearia"}>
            <Button color="primary" variant="ghost" className="text-2xl mt-5">Voltar</Button>
            </Link>
            
        </form>
    )
}

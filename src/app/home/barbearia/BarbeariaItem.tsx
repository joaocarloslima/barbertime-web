"use client"

import { DropDownActions } from "@/components/DropDownActions";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { destroy } from "@/app/actions/barbearia/destroy";
interface BarbeariaItemProps {
    barbearia: Barbearia
}

export function BarbeariaItem(props: BarbeariaItemProps){
    const router = useRouter()
    const { barbearia: barbearia } = props

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
        <div key={barbearia.id} className="flex justify-between py-2" id="data-row">
            <div className="flex gap-1 items-center">
                <span>{barbearia.nome}</span>
                <span>{barbearia.email}</span>
                <span>{barbearia.telefone}</span>
                <span>{barbearia.cnpj}</span>
            </div>
           
            <DropDownActions 
                onEdit={() => router.push(`/barbearia/${barbearia.id}`)}
                onDelete={handleDelete} 
            />
        </div>
    )
}
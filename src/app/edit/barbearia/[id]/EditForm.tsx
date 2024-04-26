"use client"

import { update } from "@/app/actions/barbearia/update";
import { SubmitButton } from "@/components/SubmitButton";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useFormState } from "react-dom";


const initialState = {
    messageNome: '',
}

export function EditForm(barbearia: Barbearia) {
    const [state, formAction] = useFormState(update, initialState)

    return (

        <form action={formAction} className="flex flex-col gap-3 bg-slate-700 rounded min-w-[500px] p-6 m-4">
            <input type="hidden" name="id" value={barbearia.id} />
            <h2 className="text-2xl font-bold">Editar Barbearia: {barbearia.nome}</h2>
            <Input
                key="nome"
                label={
                    <span className="text-cerulean-blue-300">Nome</span>
                }
                name="nome"
                defaultValue={barbearia.nome}
                variant="bordered"
                labelPlacement={"outside"}
                isInvalid={state?.messageNome != ''}
                errorMessage={state?.messageNome}
            />

            <Input
                key="email"
                label={
                    <span className="text-cerulean-blue-300">Email</span>
                }
                name="email"
                defaultValue={barbearia.email}
                variant="bordered"
                labelPlacement={"outside"}
                isInvalid={state?.messageNome != ''}
                errorMessage={state?.messageNome}
            />
            <Input
                key="tel"
                label={
                    <span className="text-cerulean-blue-300">Telefone</span>
                }
                name="tel"
                defaultValue={barbearia.telefone}
                variant="bordered"
                labelPlacement={"outside"}
                isInvalid={state?.messageNome != ''}
                errorMessage={state?.messageNome}
            />
            <Input
                key="cnpj"
                label={
                    <span className="text-cerulean-blue-300">CNPJ</span>
                }
                name="cnpj"
                defaultValue={barbearia.cnpj}
                variant="bordered"
                labelPlacement={"outside"}
                isInvalid={state?.messageNome != ''}
                errorMessage={state?.messageNome}
            />
            <div className="flex justify-around mt-4">
                <Link href="/home/barbearia">
                    <Button variant="bordered" className="text-2xl" color="primary">cancelar</Button>
                </Link>
                <SubmitButton name="salvar" />         
            </div>
        </form>
    )
}
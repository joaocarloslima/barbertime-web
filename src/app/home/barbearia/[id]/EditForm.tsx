"use client"

import { update } from "@/app/actions/barbearia/update";
import { Icon } from "@/components/Icon";
import { SubmitButton } from "@/components/SubmitButton";
import { Button } from "@nextui-org/button";
import { Autocomplete, AutocompleteItem, Input } from "@nextui-org/react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useFormState } from "react-dom";


const initialState = {
    messageNome: '',
}

export function EditForm(barbearia: Barbearia) {
    const [state, formAction] = useFormState(update, initialState)

    return (

        <form action={formAction} className="flex flex-col gap-3 bg-slate-900 p-6 m-6 rounded min-w-[500px]">
            <input type="hidden" name="id" value={barbearia.id} />
            <h2 className="text-2xl font-bold">Editar Categoria {barbearia.nome}</h2>
            <Input
                key="nome"
                label="Nome"
                name="nome"
                defaultValue={barbearia.nome}
                variant="bordered"
                labelPlacement={"outside"}
                isInvalid={state?.messageNome != ''}
                errorMessage={state?.messageNome}
            />
            <div className="flex justify-around mt-4">
                <Link href="/categorias">
                    <Button variant="bordered" startContent={<ArrowLeft />} >cancelar</Button>
                </Link>
                <SubmitButton />
            </div>
        </form>
    )
}
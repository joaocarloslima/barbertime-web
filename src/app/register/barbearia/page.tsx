'use client'
import { create } from "@/app/actions/barbearia/create";
import { Icon } from "@/components/Icon";
import { SubmitButton } from "@/components/SubmitButton";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { useFormState } from "react-dom";

const initialState = {
    messageNome: '',
}

export default async function Barbearia() {
    const [state, formAction] = useFormState(create, initialState)

    return (
        <main className="flex min-h-screen p-24">
            <div className="flex flex-col mx-auto pt-12">
                <Icon />
                <form action={formAction} className="flex flex-col gap-3 p-6 m-6 rounded min-w-[500px]">
                    <h2 className="text-3xl font-bold text-stone-700">CRIE SUA CONTA</h2>
                    <Input
                        key="nome"
                        label="Nome"
                        name="nome"
                        labelPlacement={"outside"}
                        placeholder="Digite o nome da barbearia"
                        variant="underlined"
                        isInvalid={state?.messageNome != ''}
                        errorMessage={state?.messageNome}
                    />

                    <Input
                        key="tel"
                        label="Telefone"
                        name="tel"
                        labelPlacement={"outside"}
                        placeholder="Digite o telefone da barbearia"
                        variant="underlined"
                        isInvalid={state?.messageNome != ''}
                        errorMessage={state?.messageNome}
                    />
                    <Input
                        key="email"
                        label="Email"
                        name="email"
                        labelPlacement={"outside"}
                        placeholder="Digite o email da barbearia"
                        variant="underlined"
                        isInvalid={state?.messageNome != ''}
                        errorMessage={state?.messageNome}
                    />
                    <Input
                        key="cnpj"
                        label="CNPJ"
                        name="cnpj"
                        labelPlacement={"outside"}
                        placeholder="Digite o CNPJ da barbearia"
                        variant="underlined"
                        isInvalid={state?.messageNome != ''}
                        errorMessage={state?.messageNome}
                    />
                    <div className="flex justify-around mt-4">
                        < SubmitButton />
                        <Link href="./">
                            <Button className="bg-cerulean-blue-700 text-2xl" variant="shadow">Já tenho cadastro</Button>
                        </Link>
                    </div>
                </form>
            </div>
            <div className=""><img src="/image2.png" alt="barber" className="w-11/12" /></div>
        </main>
    );

}
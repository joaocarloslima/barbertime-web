import { Icon } from "@/components/Icon";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";


export default function Cliente() {

    return (
        <main className="flex min-h-screen p-15">
            <div className="flex flex-col justify-start items-center mx-auto pt-12">
                <Icon />
                <form className="flex flex-col gap-3 p-6 m-6 rounded min-w-[500px]  ">
                    <h2 className="text-3xl font-bold text-stone-700">CADASTRE A SUA BARBEARIA</h2>
                    <Input
                        key="nome"
                        label="Nome"
                        name="nome"
                        labelPlacement={"outside"}
                        placeholder="Digite o seu nome"
                        variant="underlined"
                    />
                    <Input
                        key="cep"
                        label="CEP"
                        name="cep"
                        labelPlacement={"outside"}
                        placeholder="Digite o seu CEP"
                        variant="underlined"
                    />
                    <Input
                        key="tel"
                        label="Telefone"
                        name="tel"
                        labelPlacement={"outside"}
                        placeholder="Digite o seu telefone"
                        variant="underlined"
                    />
                    <Input
                        key="email"
                        label="Email"
                        name="email"
                        labelPlacement={"outside"}
                        placeholder="Digite o seu email"
                        variant="underlined"
                    />
                    <Input
                        key="date"
                        label="Data de Nascimento"
                        name="date"
                        labelPlacement={"outside"}
                        placeholder="Digite o CNPJ da barbearia"
                        variant="underlined"
                    />
                    <div className="flex justify-around mt-4">
                        <Link href="./">
                            <Button className="bg-cerulean-blue-700 text-2xl" variant="shadow">Cadastrar</Button>
                        </Link>
                        <Link href="./">
                            <Button className="bg-cerulean-blue-700 text-2xl" variant="shadow">Já tenho cadastro</Button>
                        </Link>
                    </div>
                </form>
            </div>
            <div className=""><img src="/image3.png" alt="barber" className="w-11/12" /></div>
        </main>
    );

}
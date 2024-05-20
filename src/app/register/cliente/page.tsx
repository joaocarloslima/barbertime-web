import { Icon } from "@/components/Icon";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";


export default function Cliente() {

    return (
        <main className="flex min-h-screen p-15">
            <div className="flex flex-col justify-start items-center mx-auto pt-12">
                <Icon />
                <form className="flex flex-col gap-3 p-6 m-6 rounded min-w-[500px] mt-20 ">
                    <h2 className="text-3xl font-bold text-stone-700 text-center">SITE EM DESENVOLVIMENTO</h2>
                    <div className="flex justify-around mt-10">
                        <Link href="/home/barbearia/">
                            <Button className="bg-cerulean-blue-700 text-2xl" variant="shadow">Ver as barbearias</Button>
                        </Link>
                    </div>
                    <div className="flex justify-around mt-10">
                        <Link href="../">
                            <Button className="bg-cerulean-blue-700 text-2xl" variant="shadow">Voltar</Button>
                        </Link>
                    </div>
                </form>
            </div>
            <div className=""><img src="/image3.png" alt="barber" className="w-11/12" /></div>
        </main>
    );

}
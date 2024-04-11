import { Button } from "@nextui-org/react";
import Link from "next/link";


export default function TelaLogin() {

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center m-auto">
                <h2 className="text-stone-900 text-3xl">TELA DE LOGIN</h2>
                <Link href="./">
                    <Button className="bg-cerulean-blue-700 text-2xl" variant="shadow">
                        Voltar
                    </Button>
                </Link>
            </div>
        </div>
    )

}
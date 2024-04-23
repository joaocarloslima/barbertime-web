"use client"

import { Button } from "@nextui-org/react";
import Link from "next/link";
interface BarbeariaItemProps {
    barbearia: Barbearia
}

export function BarbeariaItem(props: BarbeariaItemProps){
    const { barbearia: barbearia } = props


    return (
        <div key={barbearia.id} className="flex justify-between py-2" id="data-row">
            <div className="flex gap-1 items-center">
                <span>NOME: {barbearia.nome}</span>
            </div>

            <Link href={`/home/barbearia/${barbearia.id}`}>
                <Button>Detalhar</Button>
            </Link>
            
 
        </div>
    )
}
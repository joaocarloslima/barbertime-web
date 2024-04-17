'use client'

import { Button } from "@nextui-org/react";
import { Check } from "lucide-react";
import { useFormStatus } from "react-dom";

export function SubmitButton(){
    const { pending } = useFormStatus()

    return (
        <Button type="submit" className="bg-cerulean-blue-700 text-2xl" variant="shadow" isLoading={pending}>
            Cadastrar
        </Button>
    )
}
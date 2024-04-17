"use server"

export async function getById(id: number){

    const resp = await fetch(`${process.env.API_BASE_URL}/barbearia/${id}`, {next: {revalidate: 0}})

    if (!resp.ok){
        throw new Error("Barbearia não encontrada")
    }

    return await resp.json()

}
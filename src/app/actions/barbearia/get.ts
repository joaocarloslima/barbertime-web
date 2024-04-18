export async function getBarbearias() {
    const resp = await fetch(`${process.env.API_BASE_URL}/barbearia`, { next: { revalidate: 0 } })
    return await resp.json()
}
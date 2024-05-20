export async function getBarbearias() {
    try {
      const resp = await fetch(`${process.env.API_BASE_URL}/barbearia`, { next: { revalidate: 0 } });
      const data = await resp.json();
      return data._embedded.barbeariaList;
    } catch (error) {
      console.error('Failed to fetch barbearias:', error);
      throw error;
    }
  }
  
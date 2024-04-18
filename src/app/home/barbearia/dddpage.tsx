// import React, { useState, useEffect } from 'react';

// // Assuming an interface for Barbearia data (adjust properties as needed)
// interface Barbearia {
//   id: number;
//   nome: string;
//   email: string;
//   telefone: string;
//   cnpj: string;
// }

// async function getBarbearia(): Promise<Barbearia[]> {
//   try {
//     const response = await fetch('http://localhost:8080/barbearia');
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return []; // Return empty array to handle errors gracefully
//   }
// }

// export default function Home(): React.FC {
//   const [dados, setDados] = useState<Barbearia[]>([]);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     getBarbearia()
//       .then((data) => setDados(data))
//       .catch((error) => setError(error.message));
//   }, []);

//   return (
//     <main>
//       <h2>Barbearia</h2>
//       {error ? (
//         <p>Erro ao carregar dados: {error}</p>
//       ) : dados.length > 0 ? (
//         <ul>
//           {dados.map((item: Barbearia) => (
//             <li key={item.id}>
//               Nome: {item.nome}
//               <br />
//               Email: {item.email}
//               <br />
//               Telefone: {item.telefone}
//               <br />
//               CNPJ: {item.cnpj}
//               <br />
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>Carregando dados...</p>
//       )}
//     </main>
//   );
// }

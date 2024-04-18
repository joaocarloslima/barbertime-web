'use client'
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/barbearia')
      .then((response) => response.json())
      .then((data) => setDados(data));
  }, []);

  return (
    <main>
      <h2>Barbearia</h2>
      {dados.length > 0 ? (
        <ul>
          {dados.map((item) => (
            <li key={item.id}>
              Nome: {item.nome} <br />
              Email: {item.email} <br />
              Telefone: {item.telefone} <br />
              CNPJ: {item.cnpj} <br />
            </li>
          ))}
        </ul>
      ) : (
        <p>Carregando dados...</p>
      )}
    </main>
  );
}

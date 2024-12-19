import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getLivros } from '../../../servicos/livros';
import Input from '../input';
import { postFavorito } from '../../../servicos/favoritos';


const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 10px 0 50%;
    height: 55%;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: start;
`;

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
`;

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`;

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`;

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([]);
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        fetchLivros();
    }, []);

    async function fetchLivros() {
        try {
            const livrosApi = await getLivros();
            console.log("Livros retornados:", livrosApi); // Adicione esta linha para verificar os dados retornados
            setLivros(livrosApi);
        } catch (error) {
            console.error("Erro ao buscar livros:", error);
        }
    }

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            const textoDigitado = event.target.value.toLowerCase();
            const resultadoPesquisa = livros.filter(livro =>
                livro.nome.toLowerCase().includes(textoDigitado)
            );
            setLivrosPesquisados(resultadoPesquisa);
        }
    }

    async function insertFavorito(id){
        await postFavorito(id)
        alert(`Livro de id:${id} inserido com sucesso !`);
      }

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro na nossa estante.</Subtitulo>
            <Input
                placeholder="Escreva sua próxima leitura"
                onKeyDown={handleKeyDown}
            />
            {livrosPesquisados.map((livro, index) => (
                <Resultado key={index} onClick={() => insertFavorito(livro.id)}>
                    <p>{livro.nome}</p>
                   
                </Resultado>
            ))}
        </PesquisaContainer>
    );
}

export default Pesquisa;
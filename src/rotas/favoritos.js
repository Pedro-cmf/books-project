import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { deleteFavorito, getFavoritos } from '../servicos/favoritos';
import livroImg from '../imagens/livro.png'
import { Titulo } from '../componentes/principal/Titulo';

const AppContainer = styled.div`
    width: 100vw;
    height: 400vh;
    background-image: linear-gradient(90deg,#002F52 25%,#326589 165%);

`

const ResultadoContainer = styled.div`
    width: 100vw;
    height: 60vh;
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 10px;
    flex-wrap: wrap;
    transition: .35s;
    
    cursor: pointer;

    &:hover > *:not(:hover) {
        opacity: .4;
        transform: scale(0.9);
    }
    
`

const TituloLivro = styled.p`
    font-family: 'Lucida Sans';
    margin-top: 10px;
    font-size: 100%;
    color: #FFF
`

const Resultado = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1%;
    padding: 10px;
    flex-direction: column;
`

function Favoritos() {
  const [favoritos, setFavoritos] = useState([])
  
  async function fetchFavoritos() {
    const favoritosDaApi = await getFavoritos()
    setFavoritos(favoritosDaApi);
    
  }

async function deletarFavorito(id){
  await deleteFavorito(id)
  await fetchFavoritos()
  alert ('Livro deletado com sucesso')
}

  useEffect(() => {
      fetchFavoritos();
  },[])
  
  return (
    <AppContainer>
      <Titulo>Aqui estão seus livros favoritos:</Titulo>
      <ResultadoContainer>
        {
          favoritos.length !== 0 ? favoritos.map( favorito =>(
            <Resultado onClick={() => deletarFavorito(favorito.id)}>
              <img src = {livroImg} alt='Livro'></img>
              <TituloLivro>{favorito.nome}</TituloLivro>
            </Resultado>
          )): <p>Nenhum favorito encontrado.</p>
        }
        </ResultadoContainer>
    </AppContainer>
  );
}

export default Favoritos;

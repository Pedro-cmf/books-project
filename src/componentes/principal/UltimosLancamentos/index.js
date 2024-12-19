import styled from "styled-components";
import {Titulo} from "../Titulo"
import { livros } from "./dadosUltimosLancamentos";
import CardRecomenda from "../cardRecomenda";
import imagemLivro from "../../../imagens/livro2.png"

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`


const NovosLivrosContainer = styled.div`
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 70px;
    width: 100%;
    max-width: 70%;
    justify-content: center;
    cursor: pointer;

    flex-wrap: wrap;
    transition: .35s;

    &:hover > *:not(:hover) {
        opacity: .4;
        transform: scale(0.9);
    }
`

function UltimosLancamentos(){
    return(

        <UltimosLancamentosContainer>
            
            <Titulo cor="#EB9B00" 
            tamanhoFonte = "36px"
            >
                Ultimos Lançamentos
                </Titulo>
                <NovosLivrosContainer>
                    {livros.map ( livro => (
                        <img src={livro.src} alt={livro.nome}></img>
            ))}
            </NovosLivrosContainer>

            <CardRecomenda
                titulo="Talvez você se interesse por"
                subtitulo="Angular 11"
                descricao="Construindo uma aplicação com a plataforma Google"
                img= {imagemLivro}
                marginTop= '2%'
            />
              
        </UltimosLancamentosContainer>
        
    )
    
}

export default UltimosLancamentos;
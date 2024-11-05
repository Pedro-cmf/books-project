import styled from 'styled-components';

const Opcao = styled.li`
  justify-content: center;
  align-items: center;
  font-size: 16px;
  display: flex;
  text-align: center;
  min-width: 120px;
  height: 100%;
  cursor: pointer;
  padding: 3px;
`
const Opcoes = styled.ul`
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
`
const textoOpcao = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function opcaoHearder(){
    return (
        <header className="App-header">
          <Opcoes>
            { textoOpcao.map((texto) => (
              <Opcao><p>{texto}</p></Opcao>
            ) ) }
           
          </Opcoes>
      </header>
    )
}

export default opcaoHearder;
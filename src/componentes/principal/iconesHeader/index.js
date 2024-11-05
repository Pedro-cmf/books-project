import perfil from '../../../imagens/perfil.svg'
import sacola from '../../../imagens/sacola.svg'
import styled from 'styled-components'

const icones = [perfil, sacola]
const Icone = styled.li`
    margin-right: 90%;
    list-style: none;
    
`
const Icones = styled.ul`

    display: flex;
    align-items: center;
    margin-left: 3%;
    padding: 0;
  
`

function iconesHeader(){
    return (
        <Icones>
              { icones.map((icone) => (
                <Icone><img src={icone}></img></Icone>
              )) }
            </Icones>
        
    )
}

export default iconesHeader;
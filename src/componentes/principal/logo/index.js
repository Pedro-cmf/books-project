import logo from '../../../imagens/log.svg'
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: 1%;
    
`
const LogoImage = styled.img`
    margin-right: 10px;
`
const tituloSite = styled.p`
    color: black;
    
`
function Logo(){
    return(
        <LogoContainer>
            <LogoImage 
            src={logo} 
            alt='logo'
            ></LogoImage>
            <tituloSite><strong>Alura</strong> Books</tituloSite>
        </LogoContainer>
    )
}

export default Logo;
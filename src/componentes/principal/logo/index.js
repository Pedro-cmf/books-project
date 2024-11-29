import logo from '../../../imagens/log.svg'
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    
`
const LogoImage = styled.img`
    margin-right: 17px;
`
const TituloSite = styled.p`
    color: black;
    margin-right: 10px;
    
`
function Logo(){
    return(
        <LogoContainer>
            <LogoImage 
            src={logo} 
            alt='logo'
            ></LogoImage>
            <TituloSite><strong>CesarBooks</strong></TituloSite>
        </LogoContainer>
    )
}

export default Logo;
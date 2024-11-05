import Logo from '../logo';
import OpcaoHearder from '../opcaoHeader';
import IconesHeader from '../iconesHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
`

function Header(){
    return(
        <HeaderContainer>
          <Logo/>
          <OpcaoHearder></OpcaoHearder>
          <IconesHeader></IconesHeader>
      </HeaderContainer>
    )
}

export default Header;
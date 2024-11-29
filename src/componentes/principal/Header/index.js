import Logo from '../logo';
import OpcaoHearder from '../opcaoHeader';
import IconesHeader from '../iconesHeader';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
`

function Header() {
    return (
        <HeaderContainer>
            <Link to ='/'>
                <Logo />
            </Link>
            <OpcaoHearder></OpcaoHearder>
            <IconesHeader></IconesHeader>
        </HeaderContainer>
    )
}

export default Header;
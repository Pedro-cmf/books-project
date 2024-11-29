import styled from "styled-components";

export const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    color: ${props => props.cor || '#FFF'};
    font-size: ${props => props.tamanhoFonte || '36px;'};
    text-align: center;
    margin: 0;
`

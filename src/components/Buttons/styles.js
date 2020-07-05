import styled from 'styled-components';
import { Link as LinkRouter } from "@reach/router";

export const Button = styled.button`
    color: #FCFCFC;
    display: flex;
    font-size: 1.5em;
    background-color: #DE18AD;
    padding: 8px 50px;
    border-radius: 50px;
    margin: 30px auto;
`;

export const Link = styled(LinkRouter)`
    color: #FCFCFC;
    font-size: 1.5em;
    background-color: #DE18AD;
    padding: 8px 50px;
    border-radius: 50px;
`;
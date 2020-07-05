import styled from "styled-components";

export const Wrap = styled.div`
    /* Positioning */
    /* (Box-model) */
    margin: 20px auto;
    height: 500px;
    width: 1200px;
    max-width: 1200px;
    display: grid;
    justify-content: center;
    align-content: center;
    /* Typography */
    /* Visual */
    /* Misc */
`;

export const SectionForm = styled.section`
    width: 500px;
    border: 5px solid #DE18AD;
    border-radius: 20px;
    padding: 30px 60px;
    font-family: 'Lato', sans-serif;

    h2{
        text-align: center;
        margin-bottom: 20px;
    }

    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    div:last-child{
        display: flex;
        justify-content: center;
    }

    input{
        outline: none;
        border: 1px solid #02B3B1;
        border-radius: 10px;
        padding: 7px 0px;
        text-align: center;
        width: 80%;

        &::placeholder{
            color: rgba(47,47,47, 0.5);
        }
    }

    button{
        color: #FCFCFC;
        display: flex;
        font-size: 1.5em;
        background-color: #DE18AD;
        padding: 8px 50px;
        border-radius: 50px;
        margin: 30px auto;
    }

`;
import styled from "styled-components";

export const Wrap = styled.div`
    /* Positioning */
    /* (Box-model) */
    margin: 20px auto;
    width: 1200px;
    max-width: 1200px;
    display: grid;
    padding: 0px 20px;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 50px;
    /* Typography */
    /* Visual */
    /* Misc */
`;

export const SectionAbout = styled.section`

    h3{
        font-size: 2em;
        margin-bottom: 20px;
    }

    p{
        margin-bottom: 20px;
        text-align: justify;
        line-height: 25px;
    }
`;

export const SectionMembers = styled.section`
    color: #2F2F2F;

    h3{
        font-size: 2em;
        margin-bottom: 20px;
    }

    span{
        position: absolute;
        margin: -10px 0px 0px -10px;
    }

    div#name{
        width: 87%;
        margin-left: 80px;
        border-bottom: 1px solid #02B3B1;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;

        div{
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: #C4C4C4;
        }
    }

    p#project{
        margin-top: 10px;
        text-align: center;
    }
`;
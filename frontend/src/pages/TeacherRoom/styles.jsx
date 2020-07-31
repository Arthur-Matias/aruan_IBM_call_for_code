import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 2fr 4fr 2fr;
    grid-template-rows: 50% 50%;
    grid-template-areas: "ListaTurmas DadosTurma Ranking"
                         "ListaTurmas AlunosAtencao Ranking"
`;

export const Button = styled.button`
    padding: 10px 20px;
    background-color: var(--white);
    border: 5px solid var(--blue);
    border-radius: 12px;
    grid-area: ListaTurmas;
    max-height: 50px;
    align-self: end;
    text-align: center;
    color: var(--blue);
    font-weight: bold;
    font-size: 20px;
    align-items: center;
    transition: background-color .2s;
    transition: color .2s;
    
    &:hover{
        background-color: var(--blue);
        color: var(--white);
    }
`;
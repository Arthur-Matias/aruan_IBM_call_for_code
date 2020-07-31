import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 2fr 4fr 2fr;
    grid-template-rows: 50% 50%;
    grid-template-areas: "ListaTurmas DadosTurma Ranking"
                         "ListaTurmas AlunosAtencao Ranking"
`;

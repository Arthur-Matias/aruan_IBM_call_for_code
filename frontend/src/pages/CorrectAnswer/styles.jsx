import styled from 'styled-components';
import { CheckCircle } from 'styled-icons/boxicons-solid';

export const Container = styled.div`
    text-align: center;
    padding: 20px;
`;

export const Text = styled.p`
    font-size: 20px;
`;

export const CorrectIcon = styled(CheckCircle)`
    height: 15em;
    margin: 1em;
    color: #22F200;
`;

export const Button = styled.div`
    text-align: center;
    font-weight: bold;
    border: 2px solid var(--blue);
    border-radius: 4px;
    color: var(--blue);
    cursor: pointer;
    padding: 5px 15px;
    margin: 1em;

    &:hover{
        background-color: var(--blue);
        color: var(--white);
    }
`;

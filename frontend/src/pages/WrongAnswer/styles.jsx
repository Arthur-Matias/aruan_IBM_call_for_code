import styled from 'styled-components';
import { CloseCircle } from 'styled-icons/ionicons-solid';

export const Container = styled.div`
    text-align: center;
    padding: 20px;
`;

export const Text = styled.p`
    font-size: 20px;
    margin: .4em;
`;

export const SmallText = styled.p`
    font-size: 16px;
    margin: .4em;
`;

export const WrongIcon = styled(CloseCircle)`
    height: 15em;
    margin: 1em;
    color: var(--red);
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

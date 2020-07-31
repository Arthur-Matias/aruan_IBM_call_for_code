import styled from 'styled-components';
import { ArrowLeftOutline, CloseOutline } from 'styled-icons/evaicons-outline';

export const Container = styled.div`
    position: fixed;
    max-height: 10%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-align: center;
`;

export const Title = styled.h2`
    font-size: 20px;
    font-weight: bold;
    color: var(--main-blue);
`;

export const BackButton = styled(ArrowLeftOutline)`
    height: 2em;
    margin-left: 1em;
    color: var(--main-blue);
    cursor: pointer;
    &:hover{
        color: var(--blue);
    }
`;

export const CloseButton = styled(CloseOutline)`
    height: 2em;
    margin-right: 1em;
    color: var(--red);
    cursor: pointer;
    &:hover{
        color: #891502;
    }
`;
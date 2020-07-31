import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const LogoWrapper = styled.div`
    margin-bottom: 50px;    
    >img{
        height: 8em;
    }
`;

export const Welcome = styled.div`
    >p{
        color: var(--main-blue);
        font-weight: bold;
        font-size: 16px;
    }
`;

export const ButtonWrapper = styled.div`
    margin: 20px;
`;

export const Button = styled.div`
    background-color: var(--main-blue);
    width: 300px;
    text-align: center;
    color: var(--white);
    padding: 20px 30px;
    border-radius: 12px;
    margin: 1em;
    cursor: pointer;
    transition: background-color 100ms;
    &:hover{
        background-color: var(--blue);
    }
`;

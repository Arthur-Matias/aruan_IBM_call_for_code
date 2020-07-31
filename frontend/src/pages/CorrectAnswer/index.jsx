import React from 'react';
import { Container, Text, CorrectIcon, Button } from './styles'
import TitleBar from '../../components/TitleBar'

export default function CorrectAnswer({ history }){

    async function handleClick(){
        history.push('simple-question');
    }
    return(
        <>
            <TitleBar title="Aprenda Brincando" />
            <Container>
                <Text>Parabéns</Text>
                <Text>Você Acertou !!!</Text>
                <CorrectIcon />
                <Button onClick={ e => handleClick() }>Voltar</Button>
            </Container>
        </>
    )
}
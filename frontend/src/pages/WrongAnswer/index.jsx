import React from 'react';
import { Container, Text, SmallText, WrongIcon, Button } from './styles'
import TitleBar from '../../components/TitleBar'

export default function WrongAnswer(props){

    return(
        <>
            <TitleBar title="Aprenda Brincando" />
            <Container>
                <Text>Oops, Você errou :( </Text>
                <SmallText>Não desanime</SmallText>
                <SmallText>Na próxima você acerta !</SmallText>
                <WrongIcon />
                <Button>Voltar</Button>
            </Container>
        </>
    )
}
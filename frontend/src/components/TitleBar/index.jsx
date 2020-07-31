import React from 'react';
import { Container, Title, CloseButton, BackButton  } from './styles'

export default function TitleBar({ history, hasClose, title}){
    return(
        <>
            <Container>
                {hasClose?<BackButton/>:''}
                <Title>{title}</Title>
                {hasClose?<CloseButton />:''}
            </Container>
        </>
    )
}
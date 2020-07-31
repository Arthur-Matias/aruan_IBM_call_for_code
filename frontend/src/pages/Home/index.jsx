import React from 'react';
import { Container, LogoWrapper, Welcome, ButtonWrapper, Button  } from './styles'
import Logo from '../../assets/logotipo.svg';
import api from '../../services/api';

export default function Home({ history }){
    async function handleTeacherClick(){
        const teacher_info = {
                "name" : "Ariel",
                "materia" : "Geografia"
        }
        const response = await api.post('/createTeacher', { teacher_info });
        const { statun } = response.data;
        if(statun === "OK"){
            history.push('/teacher-room')
        }
        
    }
    async function handleStudentClick(){
        history.push('/simple-question');
    }
    return(
        <>
            <Container>
                <LogoWrapper>
                    <img src={Logo} alt="logo"/>
                </LogoWrapper>
                <Welcome>
                    <p>Bem Vindo(a)!</p>
                    <p>Faça login para continuar</p>
                </Welcome>
                <ButtonWrapper>
                    <div id="teacherBtn" onClick={handleTeacherClick}>
                        <Button>Professor(a)</Button>
                    </div>
                    <Button id="studentBtn" type='submit' onClick={handleStudentClick}>
                        Aluno(a)
                    </Button>
                    
                </ButtonWrapper>
            </Container>
            
        </>
    )
}
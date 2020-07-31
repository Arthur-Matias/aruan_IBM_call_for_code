import React from 'react';
import { Container, Button } from './styles'
import ListagemTurmas from '../../components/ListagemTurmas'
import TitleBar from '../../components/TitleBar'
import DadosTurma from '../../components/DadosTurma'
import AlunosAtencao from '../../components/AlunosAtencao'
import Ranking from '../../components/Ranking'
import api from '../../services/api'



export default function TeacherRoom({ history }){
    async function handleLoad(){
        const getItems = await api.get('/');
        const { lof_teachers } = getItems.data
        const { classes } = lof_teachers[0]
        var convertida = classes.map(classe => {
            return Object.keys(classe).map(chave => {
                return classe[chave];
            });
        });
        console.log(convertida);
    }
    async function handleClick(){
        const response = await api.post('/createClassroom',{
            teacher_name: "Ariel",
            turma: "35689"
        });
        const { teacher } = response.data;
        const { classes } = teacher;
        console.log(classes);
    }
    return(
        <>
        <TitleBar hasClose title="Sala dos Professores" />
            <Container>
                <DadosTurma 
                    media="82"
                    porcentualAcertos="75%"
                >
                </DadosTurma>
                <ListagemTurmas
                    turmas={[
                        "2º ano - Turma D",
                        "4º ano - Turma A",
                        "4º ano - Turma B",
                        "5º ano - Turma E"
                    ]}
                />
                <AlunosAtencao 
                    alunos={[
                        {
                            name : "Italo Silva",
                            pic : "I"
                        },
                        {
                            name : "Patrícia Santos",
                            pic : "P"
                        },
                        {
                            name : "Carlos Nascimento",
                            pic : "C"
                        },
                        {
                            name : "Maria Joana",
                            pic : "M"
                        },
                        {
                            name : "Italo Silva",
                            pic : "I"
                        }
                    ]}
                />
                <Ranking 
                    alunos={[
                        {
                            name : "Italo Silva",
                            pic : "I"
                        },
                        {
                            name : "Patrícia Santos",
                            pic : "P"
                        },
                        {
                            name : "Carlos Nascimento",
                            pic : "C"
                        },
                        {
                            name : "Maria Joana",
                            pic : "M"
                        },
                        {
                            name : "Italo Silva",
                            pic : "I"
                        }
                    ]}
                />
                <Button onClick={handleLoad}>Criar Turma</Button>
            </Container>
        </>
    )
}
import React from 'react';
import { Container } from './styles'
import ListagemTurmas from '../../components/ListagemTurmas'
import TitleBar from '../../components/TitleBar'
import DadosTurma from '../../components/DadosTurma'
import AlunosAtencao from '../../components/AlunosAtencao'
import Ranking from '../../components/Ranking'
import api from '../../services/api'



export default function CreateQuestion({ history }){
    function handleLoad(){
        
    }
    return(
        <>
        <form action="" id="class-creation-form">
            <textarea name="" id="" cols="30" rows="3"></textarea>
            <input type="text"/>
            <input type="text"/>
            <button>Criar Turma</button>

        </form>
        </>
    )
}
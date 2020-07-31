import React from 'react';
import './styles.css';

export default function ListagemTurmas({ turmas }){
    const ListTurmas = turmas.map( (turma,index) => 
            <div key={index} className="item-container">
                <li key={"item"+index}>{ turma }</li>
            </div>
    )
    return(
        <>
            <div className="container">
                <ul>
                    { ListTurmas }
                </ul>
            </div>
        </>
    )
}
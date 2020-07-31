import React from 'react';
import './styles.css'

import TitleBar from '../../components/TitleBar'

export default function SimpleQuestions({ history }){
    function Question({ history, selectedValue, options, question, correctAnswer }){
        async function handleChange(e){
            if(e === correctAnswer){
                console.log(e);
            }else{
                console.log(e);
            }
        }
        const listAnswers = options.map((answer, index)=> 
                <div className="question-container" key={"tbody"+index}>
                    <label  className="answerOption" key={"thead"+index}>
                    <input 
                        key={index}
                        type="radio"
                        value={ options[index] } 
                        name="option" 
                        onChange={ e => handleChange(e.target.value) }
                        /><li key={answer}>{ answer }</li>
                    </label>
                </div>
        )
            return(
            <>
                    <ol>
                    <h2 className="title">{question}</h2>
                        { listAnswers }
                    </ol>
            </>
        )
    }
    function handleClick(){
        
    }
    return(
        <>
        <TitleBar 
            title = "Aprenda Brincando!"
        />
            <div className="question-content">
                <Question 
                    question="Quais elementos são importantes para o processo da fotossíntese? Assinale a alternativa correta."
                    options={[
                        "Energia da luz, gás carbônico e água",
                        "Nuvens, ambiente fechado, peixes",
                        "Andar de carro, fazer churrasco e comer mel",
                    ]}
                    correctAnswer="0"
                />
                <button onClick={handleClick}>Proxima</button>
            </div>
        </>
    )
}
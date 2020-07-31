import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home'
import SimpleQuestions from './pages/SimpleQuestions';
import CorrectAnswer from './pages/CorrectAnswer'
import WrongAnswer from './pages/WrongAnswer'
import TeacherRoom from './pages/TeacherRoom'
import ClassPage from './pages/ClassPage'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/simple-question" exact component={SimpleQuestions}/>
                <Route path="/simple-question/correct-answer" component={CorrectAnswer}/>
                <Route path="/simple-question/wrong-answer" component={WrongAnswer}/>
                <Route path="/teacher-room" component={TeacherRoom}/>
                <Route path="/class-page" component={ClassPage}/>
            </Switch>
        </BrowserRouter>
    )
}
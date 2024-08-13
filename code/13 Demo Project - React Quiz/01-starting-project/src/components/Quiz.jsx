import {useCallback, useState} from "react";
import QUESTION from '../question.js';
import quizCompleteImg from '../assets/quiz-complete.png'
import QuestionTimer from "./QuestionTimer.jsx";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;

    const quizIsComplete = activeQuestionIndex === QUESTION.length;

    const handleSelectAnswer = useCallback(
        function handleSelectAnswer(selectedAnswer){
            setUserAnswers((prevUserAnswers)=> {
                return [...prevUserAnswers, selectedAnswer]
            });
        },[]
    );

    const handleSkipAnswer = useCallback(()=> handleSelectAnswer(null), [handleSelectAnswer]);

    if(quizIsComplete) {
        return (
            <div id="summary">
                <img src={quizCompleteImg} alt="Trophy icon" />
                <h2>퀴즈완료</h2>
            </div>
        );
    }

    const shffledAnswers = [...QUESTION[activeQuestionIndex].answers];
    shffledAnswers.sort(() => Math.random() - 0.5);

    return(
        <div id="quiz">
            <div id="question">
                <QuestionTimer timeout={10000} onTimeout={handleSkipAnswer} key={activeQuestionIndex} />
                <h2>{QUESTION[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {shffledAnswers.map((answer) => (
                        <li key={answer} className="answer">
                            <button onClick={()=> handleSelectAnswer(answer)}>{answer}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
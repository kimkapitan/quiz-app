import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { IAnswer } from "../interfaces/IAnswer"
import { IQuestion } from "../interfaces/IQuestion"
import { Answer } from "./answers/answer"
import { Navigation } from "./navigation"

// Main function component
export const MainComponent: React.FC = () => {
    const [questions, setQuestions] = useState<IQuestion[]>([])
    const [index, setIndex] = useState<number>(0)
    const [answers, setAnswers] = useState<IAnswer[]>([])
    // Set answer for selected question
    const SetQuestionsAnswer = (questionId: number, value?: string) => {
        if (value != null) {
            if (answers.some(x => x.QuestionId === questionId) && value != null) {
                answers.find(x => x.QuestionId === questionId)!.Answer = value
            }
            else {
                const newAnswer: IAnswer = {
                    Answer: value,
                    QuestionId: questionId
                }
                answers.push(newAnswer)
            }
            setAnswers(answers)
        }
    }
    //Fetch data from API 
    // It must be in another place (I don't know where)
    const url = "https://localhost:44384/api"
    const getUrl = (controller: string, method: string) => [url, controller, method].join("/");
    // Analog componentDidMount
    useEffect(() => {
        fetch(getUrl("Questions", ""))
        .then(res => res.json())
        .then(data => setQuestions(data));
    }, 
    []);
    // Post answers to API
    const postAnswers = () => {
        fetch(getUrl("Answers", ""),{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(answers)
        })
        .then(redirectToHome)
        .catch((error) => {
            alert(error)
          });
    }

    // Redirect to end component
    const history = useHistory()
    const redirectToHome = (res: Response) => {
        if( res.status === 200 ){
            history.push("/thankyou")
        }
    }

    const render = () => {
        if (questions && questions.length > 0)
            return <>
                <div className='question-section'>
                    <div className='question-count'>
                        <span>Вопросы {index + 1}/{questions.length}</span>
                    </div>
                    <div className='question-text'>{questions[index].text}</div>
                </div>
                <Answer question={questions[index]} SetAnswer={SetQuestionsAnswer} value={answers.find(x => x.QuestionId === questions[index].id)?.Answer} />
                <Navigation questions={questions} setIndex={setIndex} />
                <button className="waves-effect waves-light btn" onClick={postAnswers}>Завершить тест</button>
            </>
        return <h1>Loading..</h1>
    }
    
    return render()
}

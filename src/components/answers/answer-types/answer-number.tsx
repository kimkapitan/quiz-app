import React, { useState } from "react"
import { IBaseAnswer } from "../../../interfaces/IBaseAnswer"

// Props for Answer as number
interface AnswerNumberProps extends IBaseAnswer{
    defaultValue?: string
}
// Function component for consume answers as number
export const AnswerNumber: React.FC<AnswerNumberProps> = ({SetAnswer, defaultValue, questionId}) => {
    const [answerValue, SetAnswerValue] = useState<string>((typeof defaultValue === 'string') ? defaultValue : '')
    function HandleChange(event: React.ChangeEvent<HTMLInputElement>) {
        SetAnswer(questionId, event.target.value)
        SetAnswerValue(event.target.value)
    }

    return <input placeholder="введите ответ на вопрос" type="number" value={answerValue} className="validate" onChange={HandleChange}/>
}
import React, { useState } from "react"
import { IBaseAnswer } from "../../../interfaces/IBaseAnswer"

// Props for Answer as string
interface AnswerStringProps extends IBaseAnswer{
    defaultValue?: string
}
// Function component for consume answers as string
export const AnswerString: React.FC<AnswerStringProps> = ({SetAnswer, defaultValue, questionId}) => {
    const [answerValue, SetAnswerValue] = useState<string>((typeof defaultValue === 'string') ? defaultValue : '')
    function HandleChange(event: React.ChangeEvent<HTMLInputElement>) {
        SetAnswer(questionId, event.target.value)
        SetAnswerValue(event.target.value)
    }

    return <input placeholder="введите ответ на вопрос" type="text" value={answerValue} className="validate" onChange={HandleChange}/>
}
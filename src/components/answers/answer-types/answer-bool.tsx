import React, { useState } from "react"
import { IBaseAnswer } from "../../../interfaces/IBaseAnswer"

// Props for Answer as bool
interface AnswerBoolProps extends IBaseAnswer{
    defaultValue?:boolean
}

// Function component for consume answers as bool
export const AnswerBool: React.FC<AnswerBoolProps> = ({SetAnswer, defaultValue, questionId}) => {

    const [answerValue, SetAnswerValue] = useState<boolean>((typeof defaultValue === 'boolean') ? defaultValue : false)

    function HandleChange(event: React.ChangeEvent<HTMLInputElement>) {
        SetAnswer(questionId, JSON.stringify(event.target.checked))
        SetAnswerValue(event.target.checked)
    }

    return <><label>
        <input type="checkbox" value="true" checked={answerValue} onChange={HandleChange}/>
        <span>test</span>
        </label></>

}
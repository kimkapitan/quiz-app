import React, { useState } from "react"
import { IBaseAnswer } from "../../../interfaces/IBaseAnswer"

// Props for Answer as enum
interface AnswerEnumProps extends IBaseAnswer{
    options: string[],
    defaultIndex: number
}
// Function component for consume answers as enum
export const AnswerEnum: React.FC<AnswerEnumProps> = ({SetAnswer, defaultIndex, questionId, options }) => {
    const [answerValue, SetAnswerValue] = useState<number>((typeof defaultIndex === 'number') ? defaultIndex : 0)
    function HandleChange(event: React.ChangeEvent<HTMLSelectElement>) {
        SetAnswer(questionId, event.target.selectedIndex.toString())
        SetAnswerValue(event.target.selectedIndex)
    }

    return <div className="input-field col s12">
                <select className="browser-default" onChange={HandleChange}>
                    {options.map((key, index) => (
                        <option value={index} selected={answerValue === index}>{key}</option>
                    ))}
                </select>
            </div>
}



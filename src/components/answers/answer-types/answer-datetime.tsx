import React, { useState } from "react"
import { IBaseAnswer } from "../../../interfaces/IBaseAnswer";
import DatePicker from "../../infrastructure/datepicker";

// Props for Answer as Date
interface AnswerDatetimeProps extends IBaseAnswer{
    defaultValue?:Date
}
// Function component for consume answers as Date
export const AnswerDateTime: React.FC<AnswerDatetimeProps> = ({SetAnswer, defaultValue, questionId}) => {

    const [answerValue, SetAnswerValue] = useState<Date>(defaultValue && defaultValue !== null ? defaultValue : new Date())

    function HandleChange(date: Date) {
        SetAnswer(questionId, JSON.stringify(date))
        SetAnswerValue(new Date(date))
    }

    return <DatePicker value={answerValue} onChange={HandleChange}/>
}
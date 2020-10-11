import React from "react"
import { MartialStatusEnum } from "../../enums/martial-status-enum"
import { QuestionTypeEnum } from "../../enums/question-type-enum"
import { SexEnum } from "../../enums/sex-enum"
import { IQuestion } from "../../interfaces/IQuestion"
import { AnswerBool } from "./answer-types/answer-bool"
import { AnswerDateTime } from "./answer-types/answer-datetime"
import { AnswerEnum } from "./answer-types/answer-enum"
import { AnswerNumber } from "./answer-types/answer-number"
import { AnswerString } from "./answer-types/answer-string"

// Props for Answer
interface AnswerProps {
    question: IQuestion
    SetAnswer(index: number, value?: string): void
    value?: string
}
// Function component for consume answers
export const Answer: React.FC<AnswerProps> = ({ question, SetAnswer, value }) => {
    
    const StringIsNumber = (value: any) => isNaN(Number(value)) === false;
    
    const EnumToArray = (enumm: any) => {
        return Object.keys(enumm)
        .filter(StringIsNumber)
        .map(key => enumm[key]);
    }

    const render = () => {
        switch (question.questionTypeEnum) {
            case QuestionTypeEnum.QuestionString: return <AnswerString
                                                            SetAnswer={SetAnswer}
                                                            defaultValue={value}
                                                            questionId={question.id} />
            case QuestionTypeEnum.QuestionBool: return <AnswerBool 
                                                            SetAnswer={SetAnswer} 
                                                            defaultValue={(typeof value === 'string') ? JSON.parse(value) : false} 
                                                            questionId={question.id} />
            case QuestionTypeEnum.QuestionDateTime: return <AnswerDateTime 
                                                            SetAnswer={SetAnswer} 
                                                            defaultValue={value ? JSON.parse(value) : new Date()} 
                                                            questionId={question.id} />
            case QuestionTypeEnum.QuestionInt: return <AnswerNumber
                                                            SetAnswer={SetAnswer} 
                                                            defaultValue={value} 
                                                            questionId={question.id} />
            case QuestionTypeEnum.QuestionMaritalStatusEnum: return <AnswerEnum 
                                                            options={EnumToArray(MartialStatusEnum)}
                                                            SetAnswer={SetAnswer} 
                                                            defaultIndex={(typeof value === 'string') ? JSON.parse(value) : 0} 
                                                            questionId={question.id} />
            case QuestionTypeEnum.QuestionSexEnum: return <AnswerEnum 
                                                            options={EnumToArray(SexEnum)}
                                                            SetAnswer={SetAnswer} 
                                                            defaultIndex={(typeof value === 'string') ? JSON.parse(value) : 0} 
                                                            questionId={question.id} />
        }
    }

    return <>{render()}</>
}
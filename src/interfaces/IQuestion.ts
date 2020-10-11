import { QuestionTypeEnum } from "../enums/question-type-enum";

// Question consume interface
export interface IQuestion{
    id: number
    text: string
    questionTypeEnum: QuestionTypeEnum
}
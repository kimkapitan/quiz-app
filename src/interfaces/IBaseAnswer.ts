// Base answer props interface
export interface IBaseAnswer{
    SetAnswer(questionId: number, value?: string): void
    questionId: number
}
import React, { useState } from "react"
import { IQuestion } from "../interfaces/IQuestion";
// Props for question navigation
interface NavigationProps {
    questions: IQuestion[],
    setIndex(index: number): void
}
// Function component for question navigation
export const Navigation: React.FC<NavigationProps> = ({questions, setIndex}) => {
    const [navIndex, setNavIndex] = useState<number>(0)
    // Next question click
    const handleNextQuestionOptionClick = () => {
        setQuestionIndex(navIndex + 1)
    };
    // Prev question click
    const handlePrevQuestionOptionClick = () => {
        setQuestionIndex(navIndex - 1);
    };
    // Navigate to question by index
    const handleNavigateToQuestionOptionClick = (i: number) => {
        setQuestionIndex(i);
    };
    // Set Question index
    const setQuestionIndex = (newIndex: number) => {
        if (newIndex >= 0 && newIndex < questions.length) {
            setNavIndex(newIndex)
            setIndex(newIndex)
        }
    }
    
    return <>
        <ul className="pagination">
            <li
                className={navIndex === 0 ? "disabled" : ""}
                onClick={() => handlePrevQuestionOptionClick()}>
                <a href="#!"><i className="material-icons">chevron_left</i></a>
            </li>

            {questions.map((key, i) => {
                return (<li key={key.id}
                    className={navIndex === i ? "active" : ""}
                    onClick={() => handleNavigateToQuestionOptionClick(i)}><a href="#!">{i + 1}</a></li>)
            })}

            <li
                className={navIndex === questions.length - 1 ? "disabled" : ""}
                onClick={() => handleNextQuestionOptionClick()}>
                <a href="#!"><i className="material-icons">chevron_right</i></a>
            </li>
        </ul>
    </>
}
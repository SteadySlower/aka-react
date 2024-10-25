import { createContext, useContext, useState } from "react";

const AnswerContext = createContext();

export function AnswerContextProvider({ children }) {
    const [answers, setAnswers] = useState([]);
    const getAnswer = (id) => {
        const found = answers.find((answer) => answer.id === id);
        return found ? found.answer : undefined;
    };
    const setAnswer = (id, newAnswer) => {
        const prevAnswer = getAnswer(id);
        if (prevAnswer !== undefined && prevAnswer !== newAnswer) {
            setAnswers(
                answers.map((answer) => {
                    if (answer.id === id) {
                        return { ...answer, answer: newAnswer };
                    }
                    return answer;
                })
            );
        } else if (prevAnswer !== undefined && prevAnswer === newAnswer) {
            setAnswers(answers.filter((answer) => answer.id !== id));
        } else {
            setAnswers([...answers, { id, answer: newAnswer }]);
        }
    };

    return (
        <AnswerContext.Provider value={{ answers, getAnswer, setAnswer }}>
            {children}
        </AnswerContext.Provider>
    );
}

export function useAnswerContext() {
    return useContext(AnswerContext);
}

import { createContext, useContext, useState } from "react";

const AnswerContext = createContext();

export function AnswerContextProvider({ children }) {
    const [answers, setAnswers] = useState({});
    const getAnswer = (id) => {
        return answers[id];
    };
    const setAnswer = (id, newAnswer) => {
        return setAnswers((prev) => ({
            ...prev,
            [id]: newAnswer,
        }));
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

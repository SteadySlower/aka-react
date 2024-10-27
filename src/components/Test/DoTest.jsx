import React, { useState } from "react";
import Question from "./Question";
import AnswerTable from "./AnswerTable";
import { AnswerContextProvider } from "../../context/AnswerContext";
import { useLocation } from "react-router-dom";

function DoTest() {
    const {
        state: {
            test: { questions },
        },
    } = useLocation();
    const [index, setIndex] = useState(0);
    const handleTableClick = (index) => {
        setIndex(index);
    };

    return (
        <AnswerContextProvider>
            <AnswerTable
                ids={questions.map((q) => q.id)}
                onClick={handleTableClick}
            />
            <Question question={questions[index]} />
        </AnswerContextProvider>
    );
}

export default DoTest;

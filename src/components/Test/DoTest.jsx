import React, { useState } from "react";
import { QUESTIONS } from "../../dummyData";
import Question from "./Question";
import AnswerTable from "./AnswerTable";
import { AnswerContextProvider } from "../../context/AnswerContext";
import { useParams } from "react-router-dom";

function DoTest() {
    const { id: testId } = useParams();
    const [index, setIndex] = useState(0);
    const handleTableClick = (index) => {
        setIndex(index);
    };

    // TODO: fetch Test in useEffect

    return (
        <AnswerContextProvider>
            <AnswerTable
                ids={QUESTIONS.map((q) => q.id)}
                onClick={handleTableClick}
            />
            <Question question={QUESTIONS[index]} />
        </AnswerContextProvider>
    );
}

export default DoTest;

import React, { useState } from "react";
import { QUESTIONS } from "../../dummyData";
import Question from "./Question";
import { useAnswerContext } from "../../context/AnswerContext";
import AnswerTable from "./AnswerTable";

function DoTest() {
    const [index, setIndex] = useState(0);
    const handleTableClick = (index) => {
        setIndex(index);
    };

    return (
        <>
            <AnswerTable
                ids={QUESTIONS.map((q) => q.id)}
                onClick={handleTableClick}
            />
            <Question question={QUESTIONS[index]} />
        </>
    );
}

export default DoTest;

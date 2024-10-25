import React, { useState } from "react";
import { QUESTIONS } from "../../dummyData";
import Question from "./Question";
import { useAnswerContext } from "../../context/AnswerContext";

function DoTest() {
    const [index, setIndex] = useState(0);
    const handleSelect = (e) => {
        setIndex(e.target.value);
    };
    const { answers } = useAnswerContext();

    return (
        <>
            <select id="select" onChange={handleSelect} value={index}>
                {QUESTIONS.map((_, index) => (
                    <option key={index} value={index}>
                        {index + 1}
                    </option>
                ))}
            </select>
            <Question question={QUESTIONS[index]} />
        </>
    );
}

export default DoTest;

import React, { useState } from "react";
import { QUESTIONS } from "../../dummyData";
import Question from "./Question";

function DoTest() {
    const [index, setIndex] = useState(0);
    const handleSelect = (e) => setIndex(e.target.value);

    return (
        <>
            <select id="select" onChange={handleSelect} value={index}>
                {QUESTIONS.map((_, index) => (
                    <option key={index}>{index + 1}</option>
                ))}
            </select>
            <Question />
        </>
    );
}

export default DoTest;

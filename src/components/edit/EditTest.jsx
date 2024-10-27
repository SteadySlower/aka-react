import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import useTest from "../../hooks/useTest";
import QuestionSelector from "./QuestionSelector";
import QuestionEditor from "./QuestionEditor";

function EditTest() {
    const {
        state: { test },
    } = useLocation();
    const {
        questionsQuery: { isLoading, data: questions },
    } = useTest(test.id);
    const [index, setIndex] = useState(0);
    const handleQuestionEdited = (question) => {
        // TODO: call api
        console.log(question);
    };
    const handleQuestionDeleted = (index) => {
        // TODO: call api
        console.log(index);
    };

    if (isLoading) {
        return <p>is Loading...</p>;
    }

    return (
        <>
            <h2>{test.title} 수정하기</h2>
            <QuestionSelector
                questions={questions}
                toEditSelected={setIndex}
                toDeleteSelected={handleQuestionDeleted}
            />
            <QuestionEditor
                question={questions[index]}
                onQuestionEdited={handleQuestionEdited}
            />
        </>
    );
}

export default EditTest;

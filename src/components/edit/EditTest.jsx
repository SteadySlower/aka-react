import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import useTest from "../../hooks/useTest";
import QuestionSelector from "./QuestionSelector";
import QuestionEditor from "./QuestionEditor";
import useValidation from "../../hooks/useValidation";

function EditTest() {
    const {
        state: {
            test,
            test: { questions },
        },
    } = useLocation();
    const { editTest } = useTest(test.id);
    const { validateTest } = useValidation();
    const [index, setIndex] = useState(0);
    const handleQuestionEdited = (edited) => {
        const newTest = {
            ...test,
            questions: questions.map((q) => {
                if (q.id === edited.id) {
                    return edited;
                }
                return q;
            }),
        };
        validateTest(test);
        editTest.mutate(
            { test: newTest },
            {
                onSuccess: () => {
                    alert("테스트가 성공적으로 수정되었습니다.");
                },
            }
        );
    };
    const handleQuestionDeleted = (index) => {
        const newTest = {
            ...test,
            questions: questions.filter((_, i) => i !== index),
        };
        validateTest(test);
        editTest.mutate(
            { test: newTest },
            {
                onSuccess: () => {
                    alert("문제가 성공적으로 삭제되었습니다.");
                },
            }
        );
    };

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

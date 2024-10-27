import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useTest from "../../hooks/useTest";
import QuestionSelector from "./QuestionSelector";
import QuestionEditor from "./QuestionEditor";
import useValidation from "../../hooks/useValidation";

function EditTest() {
    const {
        state: { test: toEdit },
    } = useLocation();
    const [test, setTest] = useState(toEdit);
    const { editTest } = useTest(toEdit.id);
    const { validateTest } = useValidation();
    const [index, setIndex] = useState(0);
    const handleQuestionEdited = (edited) => {
        const newTest = {
            ...test,
            questions: test.questions.map((q) => {
                if (q.id === edited.id) {
                    return edited;
                }
                return q;
            }),
        };
        const alertMessage = validateTest(newTest);
        if (alertMessage) {
            alert(alertMessage);
            return;
        }
        editTest.mutate(
            { test: newTest },
            {
                onSuccess: () => {
                    alert("테스트가 성공적으로 수정되었습니다.");
                    setTest(newTest);
                },
            }
        );
    };
    const handleQuestionDeleted = (index) => {
        const newTest = {
            ...test,
            questions: test.questions.filter((_, i) => i !== index),
        };
        const alertMessage = validateTest(newTest);
        if (alertMessage) {
            alert(alertMessage);
            return;
        }
        editTest.mutate(
            { test: newTest },
            {
                onSuccess: () => {
                    alert("문제가 성공적으로 삭제되었습니다.");
                    setTest(newTest);
                },
            }
        );
    };

    if (test === undefined) {
        return <p>is Loading...</p>;
    }
    return (
        <>
            <h2>{test.title} 수정하기</h2>
            <QuestionSelector
                questions={test.questions}
                toEditSelected={setIndex}
                toDeleteSelected={handleQuestionDeleted}
            />
            <QuestionEditor
                question={test.questions[index]}
                onQuestionEdited={handleQuestionEdited}
            />
        </>
    );
}

export default EditTest;

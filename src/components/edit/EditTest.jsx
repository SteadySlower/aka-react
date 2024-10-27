import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useTest from "../../hooks/useTest";
import QuestionSelector from "./QuestionSelector";
import QuestionEditor from "./QuestionEditor";
import useValidation from "../../hooks/useValidation";

function EditTest() {
    const { id: testId } = useParams();
    const {
        testQuery: { isLoading, data: test },
    } = useTest(testId);
    const { editTest } = useTest(testId);
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
                },
            }
        );
    };

    if (isLoading) {
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

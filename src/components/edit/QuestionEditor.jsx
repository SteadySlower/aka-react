import React, { useEffect, useState } from "react";
import InsertChoice from "../insert/InsertChoice";
import useValidation from "../../hooks/useValidation";
import style from "./EditTest.module.scss";

function QuestionEditor({ question, onQuestionEdited }) {
    const [edited, setEdited] = useState(question);
    const { validateQuestion } = useValidation();

    useEffect(() => {
        setEdited(question);
    }, [question]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEdited((prev) => ({ ...prev, [name]: value }));
    };
    const handleChoiceAdded = (choice) => {
        if (edited.choices.length === 4) {
            alert("선택지는 4개까지만 추가할 수 있습니다.");
            return;
        }
        setEdited((prev) => ({
            ...prev,
            choices: [...prev.choices, choice],
        }));
    };
    const handleChoiceDeleted = (index) => {
        const newChoices = edited.choices.filter((_, i) => i !== index);
        setEdited((prev) => ({
            ...prev,
            choices: newChoices,
        }));
    };
    const handleAnswerSelected = (index) => {
        setEdited((prev) => ({
            ...prev,
            answer: index,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const alertMessage = validateQuestion(edited);
        if (alertMessage) {
            alert(alertMessage);
            return;
        }
        onQuestionEdited(edited);
    };
    return (
        <section className={style.editorContainer}>
            <form className={style.inputContainer} onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="instruction"
                    value={edited.instruction}
                    placeholder="질문"
                    required
                    onChange={handleChange}
                />
                <textarea
                    name="passage"
                    value={edited.passage}
                    placeholder="지문"
                    required
                    onChange={handleChange}
                />
            </form>
            <InsertChoice
                choices={edited.choices}
                answer={edited.answer}
                onChoiceAdded={handleChoiceAdded}
                onChoiceDeleted={handleChoiceDeleted}
                onAnswerSelected={handleAnswerSelected}
            />
            <button onClick={handleSubmit}>수정 완료</button>
        </section>
    );
}

export default QuestionEditor;

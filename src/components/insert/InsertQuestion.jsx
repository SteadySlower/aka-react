import React, { useState } from "react";
import InsertChoice from "./InsertChoice";
import { v4 as uuidv4 } from "uuid";
import useValidation from "../../hooks/useValidation";
import style from "./InsertTest.module.scss";
import Button from "../ui/Button";

function InsertQuestion({ onQuestionAdded }) {
    const [question, setQuestion] = useState({
        instruction: "",
        passage: "",
        choices: [],
    });
    const { validateQuestion } = useValidation();
    const handleSubmit = (e) => {
        e.preventDefault();
        const alertMessage = validateQuestion(question);
        if (alertMessage) {
            alert(alertMessage);
            return;
        }
        onQuestionAdded({ ...question, id: uuidv4() });
        setQuestion({
            instruction: "",
            passage: "",
            choices: [],
        });
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setQuestion((question) => ({ ...question, [name]: value }));
    };
    const handleChoiceAdded = (choice) => {
        if (question.choices.length === 4) {
            alert("선택지는 4개까지만 추가할 수 있습니다.");
            return;
        }
        setQuestion((question) => ({
            ...question,
            choices: [...question.choices, choice],
        }));
    };
    const handleChoiceDeleted = (index) => {
        const newChoices = question.choices.filter((_, i) => i !== index);
        setQuestion((question) => ({
            ...question,
            choices: newChoices,
        }));
    };
    const handleAnswerSelected = (index) => {
        setQuestion((prev) => ({
            ...prev,
            answer: index,
        }));
    };

    return (
        <section className={style.questionContainer}>
            <h3>새로운 시험 문제 등록</h3>
            <form onSubmit={handleSubmit} className={style.inputs}>
                <input
                    type="text"
                    name="instruction"
                    value={question.instruction}
                    placeholder="질문"
                    required
                    onChange={handleChange}
                />
                <textarea
                    name="passage"
                    value={question.passage}
                    placeholder="지문"
                    required
                    onChange={handleChange}
                    className={style.passage}
                />
            </form>
            <InsertChoice
                choices={question.choices}
                answer={question.answer}
                onChoiceAdded={handleChoiceAdded}
                onChoiceDeleted={handleChoiceDeleted}
                onAnswerSelected={handleAnswerSelected}
            />
            <Button text="문제 추가" onClick={handleSubmit} />
        </section>
    );
}

export default InsertQuestion;

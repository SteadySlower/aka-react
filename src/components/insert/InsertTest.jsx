import React, { useState } from "react";
import InsertQuestion from "./InsertQuestion";
import QuestionCard from "./QuestionCard";
import useTest from "../../hooks/useTest";
import { v4 as uuidv4 } from "uuid";
import useValidation from "../../hooks/useValidation";
import style from "./InsertTest.module.scss";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

function InsertTest() {
    const [title, setTitle] = useState("");
    const navigate = useNavigate();
    const [questions, setQuestions] = useState([]);
    const { addTest } = useTest();
    const { validateTest } = useValidation();
    const handleChange = (e) => {
        setTitle(e.target.value);
    };
    const handleQuestionAdded = (question) => {
        setQuestions((questions) => [
            ...questions,
            {
                ...question,
                number: questions.length + 1,
            },
        ]);
    };
    const handleOnClick = () => {
        const newTest = {
            id: uuidv4(),
            title: title,
            questions: questions,
        };
        const alertMessage = validateTest(newTest);
        if (alertMessage) {
            alert(alertMessage);
            return;
        }
        addTest.mutate(
            { test: newTest },
            {
                onSuccess: () => {
                    alert("테스트가 성공적으로 추가되었습니다.");
                    navigate(`/test`);
                },
            }
        );
    };

    return (
        <div className={style.container}>
            <ul>
                {questions.map((q, i) => (
                    <li key={i}>
                        <QuestionCard question={q} />
                    </li>
                ))}
            </ul>
            <div className={style.inputContainer}>
                <div className={style.titleContainer}>
                    <h3>테스트 제목</h3>
                    <input
                        type="text"
                        value={title}
                        placeholder="테스트 제목"
                        required
                        onChange={handleChange}
                    />
                    <Button text="테스트 추가" onClick={handleOnClick} />
                </div>
                <InsertQuestion onQuestionAdded={handleQuestionAdded} />
            </div>
        </div>
    );
}

export default InsertTest;

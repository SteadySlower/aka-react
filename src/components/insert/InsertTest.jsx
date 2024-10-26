import React, { useState } from "react";
import InsertQuestion from "./InsertQuestion";
import QuestionCard from "./QuestionCard";
import useTest from "../../hooks/useTest";
import { v4 as uuidv4 } from "uuid";

function InsertTest() {
    const [title, setTitle] = useState("");
    const [questions, setQuestions] = useState([]);
    const { addTest } = useTest();
    const handleChange = (e) => {
        setTitle(e.target.value);
    };
    const handleQuestionAdded = (question) => {
        setQuestions((questions) => [...questions, question]);
    };
    const handleOnClick = () => {
        // TODO: validate test
        const newTest = {
            id: uuidv4(),
            title: title,
            questions: questions,
        };
        addTest.mutate(
            { test: newTest },
            {
                onSuccess: () => {
                    alert("테스트가 성공적으로 추가되었습니다.");
                    setTitle("");
                    setQuestions([]);
                },
            }
        );
    };

    return (
        <div>
            <ol>
                {questions.map((q, i) => (
                    <li key={i}>
                        <QuestionCard question={q} />
                    </li>
                ))}
            </ol>
            <input
                type="text"
                value={title}
                placeholder="테스트 제목"
                required
                onChange={handleChange}
            />
            <button onClick={handleOnClick}>새로운 시험지 등록 완료</button>
            <InsertQuestion onQuestionAdded={handleQuestionAdded} />
        </div>
    );
}

export default InsertTest;

import React, { useState } from "react";
import InsertQuestion from "./InsertQuestion";
import QuestionCard from "./QuestionCard";

function InsertTest() {
    const [title, setTitle] = useState("");
    const [questions, setQuestions] = useState([]);
    const handleChange = (e) => {
        setTitle(e.target.value);
    };
    const handleQuestionAdded = (question) => {
        setQuestions((questions) => [...questions, question]);
    };
    const handleOnClick = () => {
        // TODO: validate test
        const newTest = {
            title: title,
            questions: questions,
        };
        console.log(newTest);
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

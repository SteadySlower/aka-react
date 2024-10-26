import React, { useState } from "react";
import InsertQuestion from "./InsertQuestion";
import QuestionCard from "./QuestionCard";

function InsertTest() {
    const [questions, setQuestions] = useState([]);
    const handleQuestionAdded = (question) => {
        setQuestions((questions) => [...questions, question]);
    };
    const handleOnClick = () => {
        const newTest = {
            title: "",
            questions: questions
        }
        console.log(newTest)
    }

    return (
        <div>
            <ol>
                {questions.map((q, i) => (
                    <li key={i}><QuestionCard question={q} /></li>
                ))}
            </ol>
            <button onClick={handleOnClick}>새로운 시험지 등록 완료</button>
            <InsertQuestion onQuestionAdded={handleQuestionAdded} />
        </div>
    );
}

export default InsertTest;

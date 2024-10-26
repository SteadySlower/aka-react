import React from "react";

function QuestionSelector({ questions }) {
    return (
        <ul>
            {questions.map((q) => (
                <li key={q.id}>
                    {`${q.number}번`}
                    <button>수정</button>
                    <button>삭제</button>
                </li>
            ))}
        </ul>
    );
}

export default QuestionSelector;

import React from "react";

function QuestionSelector({ questions, toEditSelected, toDeleteSelected }) {
    return (
        <ul>
            {questions.map((q, i) => (
                <li key={q.id}>
                    {`${q.number}번`}
                    <button onClick={() => toEditSelected(i)}>수정</button>
                    <button onClick={() => toDeleteSelected(i)}>삭제</button>
                </li>
            ))}
        </ul>
    );
}

export default QuestionSelector;

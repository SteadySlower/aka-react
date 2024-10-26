import React from "react";

function QuestionCard({ question: { instruction, passage, choices } }) {
    return (
        <div>
            <h6>{instruction}</h6>
            <p>{passage}</p>
            <ol>
                {choices.map((c, i) => (
                    <li key={i}>{c}</li>
                ))}
            </ol>
        </div>
    );
}

export default QuestionCard;

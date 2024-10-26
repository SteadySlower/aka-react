import React from "react";
import { useAnswerContext } from "../../context/AnswerContext";

function Question({ question: { id, number, instruction, passage, choices } }) {
    const { getAnswer, setAnswer } = useAnswerContext();
    const handleClick = (index) => {
        setAnswer(id, index);
    };

    return (
        <section>
            <div>
                <h3>
                    {number}. {instruction}
                </h3>
                <p>{passage}</p>
            </div>
            <ol>
                {choices.map((choice, index) => (
                    <li key={index} onClick={() => handleClick(index)}>
                        {choice}
                    </li>
                ))}
            </ol>
            {getAnswer(id) !== undefined && `선택된 답: ${getAnswer(id) + 1}`}
        </section>
    );
}

export default Question;

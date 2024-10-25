import React from "react";
import { useAnswerContext } from "../../context/AnswerContext";

function Question({ question: { id, passage, choices } }) {
    const { getAnswer, setAnswer } = useAnswerContext();
    const handleClick = (index) => {
        setAnswer(id, index);
    };

    return (
        <section>
            <div>
                <h3>{id + 1}. 빈칸에 들어갈 단어로 적절한 것을 고르시오</h3>
                <p>{passage}</p>
            </div>
            <ul>
                {choices.map((choice, index) => (
                    <li key={index} onClick={() => handleClick(index)}>
                        {choice}
                    </li>
                ))}
            </ul>
            {getAnswer(id) !== undefined && `선택된 답: ${getAnswer(id) + 1}`}
        </section>
    );
}

export default Question;

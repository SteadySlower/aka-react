import React, { useState } from "react";

function Question({ question: { id, passage, choices } }) {
    const [answer, setAnswer] = useState(undefined);
    const handleClick = (index) => {
        if (index === answer) {
            setAnswer(undefined);
            return;
        }
        setAnswer(index);
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
            {answer !== undefined && `선택된 답: ${answer + 1}`}
        </section>
    );
}

export default Question;

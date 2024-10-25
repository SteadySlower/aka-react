import React, { useState } from "react";
import { LOREM_IPSUM, CHOICES } from "../../dummyData";

function Question() {
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
                <h3>빈칸에 들어갈 단어로 적절한 것을 고르시오</h3>
                <p>{LOREM_IPSUM}</p>
            </div>
            <ul>
                {CHOICES.map((choice, index) => (
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

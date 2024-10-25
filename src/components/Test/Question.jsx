import React, { useState } from "react";

const LOREM_IPSUM =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
const CHOICES = ["Apple", "Pear", "Orange", "Grape"];

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

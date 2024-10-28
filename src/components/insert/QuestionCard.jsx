import React from "react";
import Mark from "../test/Mark";
import style from "./InsertTest.module.scss";

function QuestionCard({
    question: { number, instruction, passage, choices, answer },
}) {
    return (
        <div className={style.cardContainer}>
            <p className={style.title}>
                {`${number}. `}
                {instruction}
            </p>
            <p className={style.passage}>{passage}</p>
            <ul>
                {choices.map((c, i) => (
                    <li key={i}>
                        <Mark
                            number={i + 1}
                            color={answer === i ? "green" : null}
                        />{" "}
                        <span className={answer === i ? style.green : ""}>
                            {c}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default QuestionCard;

import React from "react";
import { useAnswerContext } from "../../context/AnswerContext";
import style from "./DoTest.module.scss";
import Mark from "./Mark";
import Button from "../ui/Button";

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
                <p className={style.passage}>{passage}</p>
            </div>
            <ul>
                {choices.map((choice, index) => (
                    <li
                        className={
                            getAnswer(id) === index
                                ? style.choiceChosen
                                : style.choice
                        }
                        key={index}
                        onClick={() => handleClick(index)}
                    >
                        <div className={style.choice}>
                            <Mark
                                number={index + 1}
                                isSelected={getAnswer(id) === index}
                            />
                            {choice}
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Question;

import React from "react";
import { useAnswerContext } from "../../context/AnswerContext";
import style from "./DoTest.module.scss";
import {
    TbCircleNumber1,
    TbCircleNumber1Filled,
    TbCircleNumber2,
    TbCircleNumber2Filled,
    TbCircleNumber3,
    TbCircleNumber3Filled,
    TbCircleNumber4,
    TbCircleNumber4Filled,
} from "react-icons/tb";

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
            <ul>
                {choices.map((choice, index) => (
                    <li className={getAnswer(id) === index ? style.choiceChosen : style.choice} key={index} onClick={() => handleClick(index)}>
                        <div className={style.choice}>
                            <Mark number={index + 1} isSelected={getAnswer(id) === index} />
                            {choice}
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

function Mark({ number, isSelected }) {
    switch (number) {
        case 1:
            return isSelected ? (
                <TbCircleNumber1Filled className={style.circleChosen} />
            ) : (
                <TbCircleNumber1 className={style.circle} />
            );
        case 2:
            return isSelected ? (
                <TbCircleNumber2Filled className={style.circleChosen} />
            ) : (
                <TbCircleNumber2 className={style.circle} />
            );
        case 3:
            return isSelected ? (
                <TbCircleNumber3Filled className={style.circleChosen} />
            ) : (
                <TbCircleNumber3 className={style.circle} />
            );
        case 4:
            return isSelected ? (
                <TbCircleNumber4Filled className={style.circleChosen} />
            ) : (
                <TbCircleNumber4 className={style.circle} />
            );
        default:
            return isSelected ? (
                <TbCircleNumber1Filled className={style.circleChosen} />
            ) : (
                <TbCircleNumber1Filled className={style.circle} />
            );
    }
}

export default Question;

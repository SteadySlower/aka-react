import React from "react";
import style from "./EditTest.module.scss";
import Button from "../ui/Button";

function QuestionSelector({ questions, toEditSelected, toDeleteSelected }) {
    return (
        <div className={style.selectorContainer}>
            <ul>
                {questions.map((q, i) => (
                    <li key={q.id}>
                        <span>{`${q.number}번`}</span>
                        <div className={style.buttonContainer}>
                            <Button
                                text="수정"
                                onClick={() => toEditSelected(i)}
                            />
                            <Button
                                text="삭제"
                                onClick={() => toDeleteSelected(i)}
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default QuestionSelector;

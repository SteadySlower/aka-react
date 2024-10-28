import React, { useState } from "react";
import style from "./InsertChoice.module.scss";
import Button from "../ui/Button";
import Mark from "../test/Mark";

function InsertChoice({
    choices,
    answer,
    onChoiceAdded,
    onChoiceDeleted,
    onAnswerSelected,
}) {
    const [choice, setChoice] = useState("");
    const handleChange = (e) => {
        setChoice(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (choice.trim().length === 0) {
            alert("선택지가 비어 있습니다.");
            return;
        }
        onChoiceAdded(choice);
        setChoice("");
    };

    return (
        <div className={style.container}>
            <ul>
                {choices &&
                    choices.map((c, i) => (
                        <li key={i}>
                            <Mark
                                number={i + 1}
                                color={answer === i ? "green" : null}
                            />
                            <span className={answer === i ? style.colored : ""}>
                                {c}
                            </span>
                            <Button
                                text="정답"
                                onClick={() => onAnswerSelected(i)}
                            />
                            <Button
                                text="삭제"
                                onClick={() => onChoiceDeleted(i)}
                            />
                        </li>
                    ))}
            </ul>
            <form onSubmit={handleSubmit} className={style.inputContainer}>
                <input
                    type="text"
                    name="instruction"
                    value={choice}
                    placeholder="선택지"
                    required
                    onChange={handleChange}
                />
                <Button text="추가" onClick={handleSubmit} />
            </form>
        </div>
    );
}

export default InsertChoice;

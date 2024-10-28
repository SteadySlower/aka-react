import React, { useState } from "react";
import Question from "./Question";
import AnswerTable from "./AnswerTable";
import { useAnswerContext } from "../../context/AnswerContext";
import { useLocation, useNavigate } from "react-router-dom";
import useTest from "../../hooks/useTest";
import style from "./DoTest.module.scss";
import Button from "../ui/Button";

function DoTest() {
    const {
        state: {
            test,
            test: { questions },
        },
    } = useLocation();
    const navigate = useNavigate();
    const { answers, clearAnswers } = useAnswerContext();
    const { submitAnswers } = useTest(test.id);
    const [index, setIndex] = useState(0);
    const handleTableClick = (index) => {
        setIndex(index);
    };
    const handleClick = () => {
        const numOfAnswers = Object.values(answers).filter(
            (value) => value !== undefined
        ).length;
        if (numOfAnswers < questions.length) {
            if (
                window.confirm(
                    "아직 풀지 않은 문제가 있습니다. 정말 제출하시겠습니까?"
                )
            ) {
                submitAnswer();
            } else {
                return;
            }
        } else {
            submitAnswer();
        }
    };

    const submitAnswer = () => {
        submitAnswers.mutate(
            { answers },
            {
                onSuccess: () => {
                    alert("결과가 성공적으로 전송되었습니다.");
                    clearAnswers();
                    navigate(`/aka-react/test`);
                },
            }
        );
    };
    return (
        <div className={style.container}>
            <div>
                <div className={style.buttonContainer}>
                    <Button text="답안 제출" onClick={handleClick} />
                    {index !== questions.length - 1 && (
                        <Button
                            text="다음 문제"
                            onClick={() => setIndex((prev) => prev + 1)}
                        />
                    )}
                    {index !== 0 && (
                        <Button
                            text="이전 문제"
                            onClick={() => setIndex((prev) => prev - 1)}
                        />
                    )}
                </div>
                <Question
                    showPrevButton={index !== 0}
                    showNextButton={index !== questions.length - 1}
                    onPrevButtonClicked={() => setIndex((prev) => prev - 1)}
                    onNextButtonClicked={() => setIndex((prev) => prev + 1)}
                    question={questions[index]}
                />
            </div>
            <AnswerTable
                ids={questions.map((q) => q.id)}
                nowIndex={index}
                onClick={handleTableClick}
            />
        </div>
    );
}

export default DoTest;

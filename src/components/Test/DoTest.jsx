import React, { useState } from "react";
import Question from "./Question";
import AnswerTable from "./AnswerTable";
import { useAnswerContext } from "../../context/AnswerContext";
import { useLocation, useNavigate } from "react-router-dom";
import useTest from "../../hooks/useTest";
import style from "./DoTest.module.scss";

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
        // TODO: validate
        submitAnswers.mutate(
            { answers },
            {
                onSuccess: () => {
                    alert("결과가 성공적으로 전송되었습니다.");
                    clearAnswers();
                    navigate(`/test`);
                },
            }
        );
    };

    return (
        <div className={style.container}>
            <Question question={questions[index]} />
            <AnswerTable
                ids={questions.map((q) => q.id)}
                nowIndex={index}
                onClick={handleTableClick}
            />
        </div>
    );
}

export default DoTest;

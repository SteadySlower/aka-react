import React from "react";
import { useParams, useLocation } from "react-router-dom";
import useTest from "../../hooks/useTest";
import style from "./Result.module.scss";
import Mark from "../test/Mark";

function Result() {
    const {
        state: {
            test: { questions },
        },
    } = useLocation();
    const { id: testId } = useParams();
    const {
        answersQuery: { isLoading, data: answers },
    } = useTest(testId);

    if (isLoading) {
        return <p>is Loading...</p>;
    }

    return (
        <table className={style.resultTable}>
            <thead>
                <tr>
                    <td>문제</td>
                    <td>정답</td>
                    <td>고른 답</td>
                </tr>
            </thead>
            <tbody>
                {questions.map((q) => (
                    <tr key={q.id}>
                        <td>{q.number}</td>
                        <td>
                            <Mark number={q.answer + 1} isSelected={false} />
                        </td>
                        <td>
                            {answers[q.id] !== undefined ? (
                                <Mark
                                    number={answers[q.id] + 1}
                                    isSelected={false}
                                    color={
                                        answers[q.id] === q.answer
                                            ? "green"
                                            : "red"
                                    }
                                />
                            ) : (
                                "-"
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Result;

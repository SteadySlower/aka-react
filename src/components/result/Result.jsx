import React from "react";
import { useParams, useLocation } from "react-router-dom";
import useTest from "../../hooks/useTest";

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
        <table>
            <thead>
                <tr>
                    <td>문제</td>
                    <td>정답</td>
                    <td>고른 답</td>
                    <td>결과</td>
                </tr>
            </thead>
            <tbody>
                {questions.map((q) => (
                    <tr key={q.id}>
                        <td>{q.number}</td>
                        <td>{q.answer}</td>
                        <td>
                            {answers[q.id] !== undefined ? answers[q.id] : "-"}
                        </td>
                        <td>{answers[q.id] === q.answer ? "O" : "X"}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Result;

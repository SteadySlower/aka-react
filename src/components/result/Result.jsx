import React, { useMemo } from "react";
import { QUESTIONS } from "../../dummyData";

function Result() {
    const answers = [
        { id: 0, answer: 0 },
        { id: 1, answer: 1 },
        { id: 2, answer: 2 },
        { id: 3, answer: 3 },
        { id: 4, answer: 0 },
        { id: 5, answer: 1 },
        { id: 6, answer: 2 },
        { id: 7, answer: 3 },
        { id: 8, answer: 0 },
        { id: 9, answer: 1 },
        { id: 10, answer: 2 },
    ];

    const getUserAnswer = (id) => {
        const found = answers.find((a) => a.id === id);
        return found ? `${found.answer + 1}` : "-";
    };

    const getQuestionResult = (question) => {
        const userAnswer = answers.find((a) => a.id === question.id);
        if (userAnswer === undefined) {
            return "X";
        }
        return userAnswer.answer === question.answer ? "O" : "X";
    };

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
                {QUESTIONS.map((q) => (
                    <tr key={q.id}>
                        <td>{q.id + 1}</td>
                        <td>{q.answer}</td>
                        <td>{getUserAnswer(q.id)}</td>
                        <td>{getQuestionResult(q)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Result;

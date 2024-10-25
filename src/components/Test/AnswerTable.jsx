import React from "react";
import { useAnswerContext } from "../../context/AnswerContext";

function AnswerTable({ ids }) {
    const { getAnswer } = useAnswerContext();
    const getBodyData = (id) => {
        const answer = getAnswer(id);
        return answer !== undefined ? `${answer + 1}` : "X";
    };

    return (
        <table>
            <thead>
                <tr>
                    {ids.map((id) => (
                        <td key={id}>{id + 1}</td>
                    ))}
                </tr>
            </thead>
            <tbody>
                <tr>
                    {ids.map((id) => (
                        <td key={id}>{getBodyData(id)}</td>
                    ))}
                </tr>
            </tbody>
        </table>
    );
}

export default AnswerTable;

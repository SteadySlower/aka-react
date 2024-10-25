import React from "react";
import { useAnswerContext } from "../../context/AnswerContext";

function AnswerTable({ ids, onClick }) {
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
                        <td key={id} onClick={() => onClick(id)}>
                            {id + 1}
                        </td>
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

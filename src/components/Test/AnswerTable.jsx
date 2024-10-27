import React from "react";
import { useAnswerContext } from "../../context/AnswerContext";
import style from "./DoTest.module.scss";
import Mark from "./Mark";

function AnswerTable({ ids, nowIndex, onClick }) {
    const { getAnswer } = useAnswerContext();
    const getBodyData = (id) => {
        const answer = getAnswer(id);
        return answer !== undefined ? `${answer + 1}` : "-";
    };

    return (
        <div className={style.tableContainer}>
            <table className={style.answerTable}>
                <thead>
                    <tr>
                        <td>문제</td>
                        <td>고른 답</td>
                    </tr>
                </thead>
                <tbody>
                    {ids.map((id, i) => (
                        <tr>
                            <td
                                className={
                                    nowIndex === i
                                        ? style.questionCellChosen
                                        : style.questionCell
                                }
                                key={id}
                                onClick={() => onClick(id)}
                            >
                                {id + 1}
                            </td>
                            <td key={id}>
                                {getAnswer(id) ? (
                                    <Mark number={getAnswer(id) + 1} />
                                ) : (
                                    "-"
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AnswerTable;

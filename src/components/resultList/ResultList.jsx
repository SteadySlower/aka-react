import React from "react";
import { useNavigate } from "react-router-dom";
import useTest from "../../hooks/useTest";
import listStyle from "../../styles/list.module.scss";
import Button from "../ui/Button";

function ResultList() {
    const navigate = useNavigate();
    const {
        answeredTestsQuery: { isLoading, data: tests },
    } = useTest();

    if (isLoading) {
        return <p>isLoading...</p>;
    }

    return (
        <ul className={listStyle.testList}>
            {tests.map((t) => (
                <li key={t.id}>
                    <span>{t.title}</span>
                    {t.hasResult && (
                        <div className={listStyle.buttons}>
                            <Button
                                text="결과 보기"
                                onClick={() => {
                                    navigate(`/aka-react/result/${t.id}`, {
                                        state: { test: t },
                                    });
                                }}
                            />
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
}

export default ResultList;

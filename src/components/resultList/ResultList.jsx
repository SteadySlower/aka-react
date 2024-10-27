import React from "react";
import { useNavigate } from "react-router-dom";
import useTest from "../../hooks/useTest";

function ResultList() {
    const navigate = useNavigate();
    const {
        testListQuery: { isLoading, data: tests },
    } = useTest();

    if (isLoading) {
        return <p>isLoading...</p>;
    }

    return (
        <div>
            <ul>
                {tests.map((t) => (
                    <li key={t.id}>
                        <div>
                            {t.title}
                            {t.hasResult && (
                                <button
                                    onClick={() => {
                                        navigate(`/result/${t.id}`, {
                                            state: { test: t },
                                        });
                                    }}
                                >
                                    결과 보기
                                </button>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ResultList;

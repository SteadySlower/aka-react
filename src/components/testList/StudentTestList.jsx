import React from "react";
import { useNavigate } from "react-router-dom";
import useTest from "../../hooks/useTest";
import listStyle from "../../styles/list.module.scss";
import Button from "../ui/Button";

function StudentTestList() {
    const navigate = useNavigate();
    const {
        testListQuery: { isLoading, data: tests },
    } = useTest();

    if (isLoading) {
        return <p>isLoading...</p>;
    }

    return (
        <div>
            <h2>문제를 풀 테스트를 선택해주세요</h2>
            <ul className={listStyle.testList}>
                {tests.map((t) => (
                    <li key={t.id}>
                        <span>{t.title}</span>
                        <div>
                            <Button
                                text="시험 시작"
                                onClick={() => {
                                    navigate(`/aka-react/dotest/${t.id}`, {
                                        state: { test: t },
                                    });
                                }}
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default StudentTestList;

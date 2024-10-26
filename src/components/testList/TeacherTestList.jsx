import React from "react";
import { useNavigate } from "react-router-dom";
import useTest from "../../hooks/useTest";

function TeacherTestList(props) {
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
                            <button
                                onClick={() => {
                                    navigate(`/dotest/${t.id}`);
                                }}
                            >
                                문제 보기
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TeacherTestList;

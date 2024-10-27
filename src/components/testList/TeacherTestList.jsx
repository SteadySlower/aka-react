import React from "react";
import { useNavigate } from "react-router-dom";
import useTest from "../../hooks/useTest";

function TeacherTestList(props) {
    const navigate = useNavigate();
    const {
        testListQuery: { isLoading, data: tests },
        deleteTest,
    } = useTest();
    const handleEditClick = (test) => {
        navigate(`/edit/${test.id}`);
    };
    const handleDeleteClick = (id) => {
        deleteTest.mutate(
            { id },
            {
                onSuccess: () => {
                    alert("테스트가 성공적으로 삭제되었습니다.");
                },
            }
        );
    };
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
                                    handleEditClick(t);
                                }}
                            >
                                수정
                            </button>
                            <button
                                onClick={() => {
                                    handleDeleteClick(t.id);
                                }}
                            >
                                삭제
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TeacherTestList;

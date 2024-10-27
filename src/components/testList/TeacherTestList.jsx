import React from "react";
import { useNavigate } from "react-router-dom";
import useTest from "../../hooks/useTest";
import listStyle from "../../styles/list.module.scss";
import Button from "../ui/Button";

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
            <h2>테스트를 수정하거나 삭제할 수 있습니다.</h2>
            <ul className={listStyle.testList}>
                {tests.map((t) => (
                    <li key={t.id}>
                        <span>{t.title}</span>
                        <div className={listStyle.buttons}>
                            <Button
                                text="수정"
                                onClick={() => {
                                    handleEditClick(t);
                                }}
                            />
                            <Button
                                text="삭제"
                                onClick={() => {
                                    handleDeleteClick(t.id);
                                }}
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TeacherTestList;

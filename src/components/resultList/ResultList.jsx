import React, { useState } from "react";
import { TESTS } from "../../dummyData";
import { useNavigate } from "react-router-dom";

function ResultList() {
    const [tests, setTests] = useState(TESTS);
    const navigate = useNavigate();

    return (
        <div>
            <ul>
                {tests.map((t) => (
                    <li key={t.id}>
                        <div>
                            {`${t.id}번 테스트`}
                            <button
                                onClick={() => {
                                    navigate(`/result/${t.id}`);
                                }}
                            >
                                결과 보기
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ResultList;

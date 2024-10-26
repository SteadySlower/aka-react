import React, { useState } from "react";
import { TESTS } from "../../dummyData";

function TeacherTestList(props) {
    const [tests, setTests] = useState(TESTS);

    return (
        <div>
            <ul>
                {tests.map((t) => (
                    <li key={t.id}>
                        <div>
                            {`${t.id}번 테스트`}
                            <button>문제 보기</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TeacherTestList;

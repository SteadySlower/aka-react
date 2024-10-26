import React, { useState } from "react";
import { TESTS } from "../../dummyData";

function StudentTestList() {
    const [tests, setTests] = useState(TESTS);

    return (
        <div>
            <ul>
                {tests.map((t) => (
                    <li key={t.id}>
                        <div>
                            {`${t.id}번 테스트`}
                            <button>시험 시작</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default StudentTestList;

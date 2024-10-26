import React, { useState } from "react";

function InsertTest() {
    const [question, setQuestion] = useState({});
    const handleSubmit = () => {};
    const handleChange = (e) => {
        const { name, value } = e.target;
        setQuestion((question) => ({ ...question, [name]: value }));
    };

    return (
        <section>
            <h2>새로운 시험 문제 등록</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="instruction"
                    value={question.instruction}
                    placeholder="질문"
                    required
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="passage"
                    value={question.passage}
                    placeholder="지문"
                    required
                    onChange={handleChange}
                />
            </form>
        </section>
    );
}

export default InsertTest;

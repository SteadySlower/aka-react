import React, { useState } from "react";
import InsertChoice from "./InsertChoice";

function InsertTest() {
    const [question, setQuestion] = useState({ choices: [] });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(question);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setQuestion((question) => ({ ...question, [name]: value }));
    };
    const handleChoiceAdded = (choice) => {
        if (question.choices.length === 4) {
            alert("선택지는 4개까지만 추가할 수 있습니다.");
            return;
        }
        setQuestion((question) => ({
            ...question,
            choices: [...question.choices, choice],
        }));
    };
    const handleChoiceDeleted = (index) => {
        const newChoices = question.choices.filter((_, i) => i !== index);
        setQuestion((question) => ({
            ...question,
            choices: newChoices,
        }));
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
            <InsertChoice
                choices={question.choices}
                onChoiceAdded={handleChoiceAdded}
                onChoiceDeleted={handleChoiceDeleted}
            />
        </section>
    );
}

export default InsertTest;

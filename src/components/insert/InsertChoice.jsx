import React, { useState } from "react";

function InsertChoice({ choices, onChoiceAdded, onChoiceDeleted }) {
    const [choice, setChoice] = useState("");
    const handleChange = (e) => {
        setChoice(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        onChoiceAdded(choice);
        setChoice("");
    };

    return (
        <div>
            <ol>
                {choices &&
                    choices.map((c, i) => (
                        <li key={i}>
                            <div>
                                {c}
                                <button onClick={() => onChoiceDeleted(i)}>
                                    ❌
                                </button>
                            </div>
                        </li>
                    ))}
            </ol>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="instruction"
                    value={choice}
                    placeholder="선택지"
                    required
                    onChange={handleChange}
                />
                <button>추가</button>
            </form>
        </div>
    );
}

export default InsertChoice;

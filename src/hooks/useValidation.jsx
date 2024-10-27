import React from 'react';

function useValidation() {

    const validateQuestion = (question) => {
        if (question.instruction.trim().length === 0) {
            return "질문이 비어 있습니다."
        }
        if (question.passage.trim().length === 0) {
            return "지문이 비어 있습니다."
        }
        if (question.choices.length !== 4) {
            return "선택지를 4개 입력해야합니다."
        }
        if (question.answer === undefined) {
            return "정답을 골라야합니다."
        }
        return null
    }

    return { validateQuestion }
}

export default useValidation;
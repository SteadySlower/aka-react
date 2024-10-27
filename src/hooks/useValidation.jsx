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

    const validateTest = (test) => {
        if (test.title.trim().length === 0) {
            return "테스트 제목을 입력해야 합니다"
        }
        if (test.questions.length < 1) {
            return "문제를 하나 이상 입력해주세요."
        }
        return null
    }

    return { validateQuestion, validateTest }
}

export default useValidation;
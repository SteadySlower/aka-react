export const LOREM_IPSUM =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
export const CHOICES = ["Apple", "Pear", "Orange", "Grape"];
export const QUESTION = {
    id: 0,
    passage: LOREM_IPSUM,
    choices: CHOICES,
    answer: 0,
};
export const QUESTIONS = [...Array(20)].map((_, i) => {
    return {
        ...QUESTION,
        id: i,
    };
});
export const TESTS = [...Array(20)].map((_, i) => {
    return {
        questions: QUESTIONS,
        id: i,
    };
});
export const USERS = [
    {
        id: "akastudent",
        password: "test1234",
        isTeacher: false,
    },
    {
        id: "akateacher",
        password: "test1234",
        isTeacher: true,
    },
];

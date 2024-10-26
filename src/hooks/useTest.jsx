import client from "../api/DummyClient";
import { useQuery } from "@tanstack/react-query";

function useTest(testId) {
    const testListQuery = useQuery({
        queryKey: ["test list"],
        queryFn: client.getTests,
        staleTime: 1000 * 60,
    });
    const questionsQuery = useQuery({
        queryKey: ["questions", testId],
        queryFn: () => {
            console.log("실행")
            return client.getQuestions(testId)
        },
        staleTime: 1000 * 60,
    });
    return { testListQuery, questionsQuery };
}

export default useTest;

import client from "../api/DummyClient";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

function useTest(testId) {
    const queryClient = useQueryClient();

    const TEST_LIST_QUERY_KEY = ["test list"];

    const testListQuery = useQuery({
        queryKey: TEST_LIST_QUERY_KEY,
        queryFn: client.getTests,
        staleTime: 1000 * 60,
    });
    const answersQuery = useQuery({
        queryKey: ["answersQuery", testId],
        queryFn: () => client.getAnswers(testId),
        staleTime: 1000 * 60,
    });
    const addTest = useMutation({
        mutationFn: ({ test }) => client.postTest(test),
        onSuccess: () => queryClient.invalidateQueries(TEST_LIST_QUERY_KEY),
    });
    const deleteTest = useMutation({
        mutationFn: ({ id }) => client.deleteTest(id),
        onSuccess: () => queryClient.invalidateQueries(TEST_LIST_QUERY_KEY),
    });
    const editTest = useMutation({
        mutationFn: ({ test }) => client.editTest(test),
        onSuccess: () => queryClient.invalidateQueries(TEST_LIST_QUERY_KEY),
    });
    return {
        testListQuery,
        answersQuery,
        addTest,
        deleteTest,
        editTest,
    };
}

export default useTest;

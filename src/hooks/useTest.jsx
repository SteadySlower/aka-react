import client from "../api/FirebaseClient";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuthContext } from "../context/AuthContext";

function useTest(testId) {
    const queryClient = useQueryClient();
    const { user } = useAuthContext();

    const TEST_LIST_QUERY_KEY = ["test list"];

    const testListQuery = useQuery({
        queryKey: TEST_LIST_QUERY_KEY,
        queryFn: client.getTests,
        staleTime: 1000 * 60,
    });
    const testQuery = useQuery({
        queryKey: ["test", testId],
        queryFn: () => client.getTest(testId),
        staleTime: 1000 * 60,
    });
    const answersQuery = useQuery({
        queryKey: ["answersQuery", testId, user.id],
        queryFn: () => client.getAnswers(user.id, testId),
        staleTime: 1000 * 60,
        enabled: !!user.id,
    });
    const answeredTestsQuery = useQuery({
        queryKey: ["answeredTestsQuery", user.id],
        queryFn: () => client.getAnsweredTests(user.id),
        staleTime: 1000 * 60,
        enabled: !!user.id,
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
        onSuccess: () => {
            queryClient.invalidateQueries(TEST_LIST_QUERY_KEY);
            queryClient.invalidateQueries(["test", testId]);
        },
    });
    const submitAnswers = useMutation({
        mutationFn: ({ answers }) =>
            client.postAnswers(user.id, testId, answers),
        onSuccess: () =>
            queryClient.invalidateQueries(["answersQuery", testId, user.id]),
    });
    return {
        testListQuery,
        testQuery,
        answeredTestsQuery,
        answersQuery,
        submitAnswers,
        addTest,
        deleteTest,
        editTest,
    };
}

export default useTest;

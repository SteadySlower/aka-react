import client from "../api/DummyClient";
import { useQuery } from "@tanstack/react-query";

function useTest() {
    const testListQuery = useQuery({
        queryKey: ["test list"],
        queryFn: client.getTests,
        staleTime: 1000 * 60,
    });
    return { testListQuery };
}

export default useTest;

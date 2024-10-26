import axios from "axios";

class DummyClient {
    async getTests() {
        return axios.get("/dummyData/tests.json").then((res) => res.data);
    }

    async getQuestions(id) {
        return axios.get("/dummyData/questions.json").then((res) => res.data);
    }
}

const client = new DummyClient();
export default client;

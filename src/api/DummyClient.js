import axios from "axios";

export default class DummyClient {
    async getTests() {
        return axios.get("/dummyData/tests.json");
    }
}
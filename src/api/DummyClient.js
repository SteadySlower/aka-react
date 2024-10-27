import axios from "axios";

class DummyClient {
    async getTests() {
        return axios.get("/dummyData/tests.json").then((res) => res.data);
    }

    async getQuestions(id) {
        return axios.get("/dummyData/questions.json").then((res) => res.data);
    }

    async getAnswers(id) {
        return axios.get("/dummyData/answers.json").then((res) => res.data);
    }

    async postTest(test) {
        console.log(`test posted: ${JSON.stringify(test)}`);
    }

    async deleteTest(id) {
        console.log(`test deleted: ${id}`);
    }

    async editTest(test) {
        console.log(`test edited: ${JSON.stringify(test)}`);
    }
}

const client = new DummyClient();
export default client;

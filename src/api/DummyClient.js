import axios from "axios";

class DummyClient {
    async getTests() {
        return Promise.all([
            axios.get("/dummyData/tests.json").then((res) => res.data),
            axios.get("/dummyData/questions.json").then((res) => res.data),
        ]).then(([tests, questions]) =>
            tests.map((test) => ({
                ...test,
                questions,
            }))
        );
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

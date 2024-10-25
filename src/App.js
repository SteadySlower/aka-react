import "./App.css";
import DoTest from "./components/Test/DoTest";
import { AnswerContextProvider } from "./context/AnswerContext";

function App() {
    return (
        <AnswerContextProvider>
            <DoTest />
        </AnswerContextProvider>
    );
}

export default App;

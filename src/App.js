import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./login/login";
import { ToDoTable } from "./to-do-task/taskTable";
import Edit from "./to-do-task/edit-task";
import NewTask from "./to-do-task/newtask";
import Joke from "./Joke/joke";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<SignIn />} />
          <Route path="/viewTask" element={<ToDoTable />} />
          <Route path="/edit-task/:id" element={<Edit />} />
          <Route path="/create-task" element={<NewTask />} />
          <Route path="/jokeSpot" element={<Joke />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

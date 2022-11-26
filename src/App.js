import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateTodo from "./Components/CreateTodo";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateTodo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

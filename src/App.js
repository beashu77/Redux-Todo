//PRE-CLASS

// import TodoList from './Pre-class/Components/TodoList';
// import Todoinput from './Pre-class/Components/Todoinput';
import "./App.css";

//CLASS
import CounterApp from "./Class/Pages/CounterApp";
import Navbar from "./Class/Components/Navbar";
import { Routes, Route } from "react-router-dom";
import TodoApp from "./Class/Pages/TodoApp";

function App() {
  console.log("hi");
  return (
    <div className="App">
      {/* PRE-CLASS --TODO */}
      {/* <Todoinput/>
     <TodoList/> */}

      {/* CLASS-TODO-APP && Counter-App */}
      <Navbar />
      <Routes>
        <Route path="/" element={<CounterApp />}></Route>
        <Route path="/TodoApp" element={<TodoApp />}></Route>
      </Routes>
    </div>
  );
}

export default App;

import { Typography, Divider } from "antd";
import "./App.css";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";
import { setupServer } from "./fakeApis";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTodos } from "./components/TodoList/todosSlice";
if (process.env.NODE_ENV === "development") {
  setupServer();
}

const { Title } = Typography;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   fetch("/api/todos", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       id: 1,
  //       name: "Learn React",
  //       completed: false,
  //       priority: "Medium",
  //     }),
  //   }).then((res) => {
  //     fetch("/api/todos")
  //       .then((res) => res.json())
  //       .then((res) => console.log(res));

  //     fetch("/api/updatetodo", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         id: 1,
  //         name: "Learn JS",
  //         completed: true,
  //         priority: "Medium",
  //       }),
  //     }).then(() => {
  //       fetch("/api/todos")
  //         .then((res) => res.json())
  //         .then((res) => console.log(res));
  //     });
  //   });
  // }, []);

  return (
    <div
      style={{
        width: 500,
        margin: "22px auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: 20,
        boxShadow: "0 0 10px 4px #bfbfbf",
        borderRadius: 5,
        height: "90vh",
      }}
    >
      <Title style={{ textAlign: "center" }}>TODO APP with REDUX</Title>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
}

export default App;

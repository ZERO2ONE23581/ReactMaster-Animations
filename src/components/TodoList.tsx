import styled from "styled-components";
import CreateToDo from "./CreateToDo";
import { useRecoilValue } from "recoil";
import { toDoSelector, toDoState } from "../atoms";
import ToDo from "./ToDo";

function TodoList() {
  const [toDo, doing, done] = useRecoilValue(toDoSelector);

  //
  return (
    <Container>
      <h1>To-do List</h1>
      <CreateToDo />
      <h2>To Do</h2>
      <ul>
        {toDo.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
      <h2>Doing</h2>
      <ul>
        {doing.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
      <h2>Done</h2>
      <ul>
        {done.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </Container>
  );
}
export default TodoList;

const Container = styled.section`
  padding: 50px;
  margin: 0 auto;
  text-align: center;
  font-size: 20px;
  form {
    margin: 0 auto;
    padding: 20px;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    input {
      padding: 10px;
    }
  }
`;

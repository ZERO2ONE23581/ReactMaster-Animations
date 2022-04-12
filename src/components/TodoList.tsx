import styled from "styled-components";
import CreateToDo from "./CreateToDo";
import { useRecoilValue } from "recoil";
import { toDoState } from "../atoms";
import ToDo from "./ToDo";

function TodoList() {
  const toDos = useRecoilValue(toDoState);
  //
  return (
    <Container>
      <h1>To-do List</h1>
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => (
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

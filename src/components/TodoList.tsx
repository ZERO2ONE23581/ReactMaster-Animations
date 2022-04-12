import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";
import styled from "styled-components";

interface IForm {
  toDo: string;
}
interface ITodo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

const toDoState = atom<ITodo[]>({
  key: "toDo",
  default: [],
});

function TodoList() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  //
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category: "TO_DO" },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  console.log(toDos);
  //
  return (
    <Container>
      <h1>To-do List</h1>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", { required: "Please write your to-dos!" })}
          type="text"
          placeholder="To-dos"
        />
        <input type="submit" value="Enter" />
      </form>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>{toDo.text}</li>
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

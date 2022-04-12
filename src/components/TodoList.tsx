import { useForm } from "react-hook-form";
import styled from "styled-components";

interface IForm {
  toDo?: string;
}

export default function TodoList() {
  const { register, handleSubmit, setValue } = useForm();

  const handleValid = (data: IForm) => {
    console.log("+ADD: ", data.toDo);
    setValue("toDo", ""); // input value를 초기화 해줌
  };

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
    </Container>
  );
}

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

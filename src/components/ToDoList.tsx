import { useForm } from "react-hook-form";
import styled from "styled-components";

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleValid = (data: any) => {
    console.log(data);
  };

  return (
    <Container>
      <h1>React Hook Form</h1>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("email", { required: "Type Email" })}
          type="text"
          placeholder="Email"
        />
        <input
          {...register("name", { required: "Type Name" })}
          type="text"
          placeholder="name"
        />
        <input
          {...register("userId", { required: "Type userId" })}
          type="text"
          placeholder="userId"
        />
        <input
          {...register("password", { required: "Type password" })}
          type="text"
          placeholder="password"
        />
        <input type="submit" value="Enter" />
      </form>
    </Container>
  );
}

export default ToDoList;

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

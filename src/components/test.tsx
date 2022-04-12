import { useForm } from "react-hook-form";
import styled from "styled-components";

interface IForm {
  email: string;
  name: string;
  userId: string;
  password: string;
  password2: string;
  extraError?: string;
}

export default function Test() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>();

  const handleValid = (data: IForm) => {
    if (data.password !== data.password2) {
      setError("password", { message: "Passwords doesn't match!" });
      setError("password2", { message: "Passwords doesn't match!" });
    }
    // setError("extraError", { message: "Server Down!" });
  };
  console.log(errors);

  return (
    <Container>
      <h1>React Hook Form</h1>
      <form onSubmit={handleSubmit(handleValid)}>
        <span>{errors?.extraError?.message}</span>
        <input
          {...register("email", {
            required: "Email Required!",
            pattern: {
              value:
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/,
              message: "Invalid Email!",
            },
          })}
          type="text"
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("name", { required: "Name Required!" })}
          type="text"
          placeholder="name"
        />
        <span>{errors?.name?.message}</span>
        <input
          {...register("userId", {
            required: "User Id Required!",
            validate: (value) =>
              value.includes("볼드모트") ? "No 볼드모트 allowed" : true,
          })}
          type="text"
          placeholder="userId"
        />
        <span>{errors?.userId?.message}</span>
        <input
          {...register("password", {
            required: "Password Required!",
            minLength: { value: 5, message: "password lengh is too short" },
          })}
          type="text"
          placeholder="password"
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register("password2", {
            required: "Confirm Password Required!",
            minLength: { value: 5, message: "password lengh is too short" },
          })}
          type="text"
          placeholder="Confirm password"
        />
        <span>{errors?.password2?.message}</span>
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

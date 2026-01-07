import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <span>Login Page</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email:</label>
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="contact@mail.com"
        />
        {errors.email && <span>This field is required</span>}

        <label>Password:</label>
        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="Enter your password"
        />
        {errors.password && <span>This field is required</span>}

        <input type="submit" value="Login" />
      </form>
    </>
  );
};

export default Login;

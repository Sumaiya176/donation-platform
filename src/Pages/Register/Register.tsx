import { useForm, SubmitHandler } from "react-hook-form";
import { useRegistrationMutation } from "../../redux/features/auth/authApi";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [registration, { data, error }] = useRegistrationMutation();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    registration(userInfo);
  };

  console.log(data);
  console.log(error);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>User Name</p>
        <input
          className="m-4 p-2 rounded border border-gray-500"
          {...register("name", { required: true })}
        />
        <br />
        {errors.name && <span>User Name is required</span>}
        <p>Email</p>
        <input
          className="m-4 rounded p-2 border border-gray-500"
          {...register("email", { required: true })}
        />
        <br />

        {errors.email && <span>Email is required</span>}
        <p>Password</p>

        <input
          className="m-4 rounded p-2 border border-gray-500"
          {...register("password", { required: true })}
        />
        <br />

        {errors.password && <span>Password is required</span>}

        <input
          className="m-4 p-2 rounded bg-green-500 text-white bor"
          type="submit"
        />
      </form>
    </div>
  );
};

export default Register;

import { useForm, SubmitHandler } from "react-hook-form";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setUser } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../util/VerifyToken";
import { useNavigate } from "react-router-dom";
import { useCurrentRoute } from "../../redux/features/auth/redirectRouteSlice";

type Inputs = {
  email: string;
  password: string;
};

type TRedirect = {
  route: string | null;
};

// type TRedirect = {
//   route: {
//     route: string | null
//   };
// };

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const prevLocation: TRedirect = useAppSelector(useCurrentRoute);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    const res = await login(userInfo).unwrap();
    const user = verifyToken(res.token);
    dispatch(setUser({ user: user, token: res.token }));

    if (prevLocation?.route) {
      navigate(prevLocation?.route);
    }
  };

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content gap-20 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img
              src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?w=740&t=st=1711646719~exp=1711647319~hmac=b02a753b3b951ea278f1e0301bd0312e4f610a30546334fbc2a8150c75e45026"
              alt=""
            />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-5xl font-bold text-center my-8">Login now!</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  {...register("email", { required: true })}
                />
                {errors.email && <span>Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  {...register("password", { required: true })}
                />
                {errors.password && <span>Password is required</span>}
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

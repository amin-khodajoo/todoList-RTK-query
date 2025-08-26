import { useFormik } from "formik";
import {
  useAddUserMutation,
  useGetUsernameQuery,
} from "../Redux/TodoApi/TodoApi";
import { Link, useNavigate } from "react-router-dom";
import loginCheck from "./loginCheck";

function Login({ setIsLogin }) {
  const { data, error, isLoading } = useGetUsernameQuery();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values, { setFieldError }) => {
      const user = data?.find(
        (item) =>
          item.username === values.username && item.password === values.password
      );

      if (!user) {
        setFieldError("username", "Username or Password is incorrect");
        return;
      }
      localStorage.setItem("username", user.username);
      localStorage.setItem("userId", user.userId);
      setIsLogin(true);
      navigate("/");
    },
    validationSchema: loginCheck,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred</div>;
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-80 p-8 bg-[#2b2b2b] rounded-2xl shadow-lg mx-auto my-10"
    >
      <h1 className="text-2xl font-bold text-white text-center mb-6">Login</h1>

      <label htmlFor="username" className="text-lg text-white mb-1 block">
        UserName:
      </label>
      <input
        onChange={formik.handleChange}
        value={formik.values.username}
        type="text"
        name="username"
        id="username"
        autoComplete="username"
        className="w-full p-2 mb-2 rounded-md text-[#2b2b2b]  outline border border-[#2b2b2b] outline-white bg-[#E8F0FE]"
      />

      <label htmlFor="password" className="text-lg text-white mb-1 block">
        Password:
      </label>
      <input
        onChange={formik.handleChange}
        value={formik.values.password}
        type="password"
        name="password"
        id="password"
        autoComplete="new-password"
        className="w-full p-2 mb-2 rounded-md text-[#2b2b2b]  outline border border-[#2b2b2b] outline-white bg-[#E8F0FE]"
      />

      {formik.touched.username && formik.errors.username ? (
        <div className="text-red-500 mb-2">{formik.errors.username}</div>
      ) : (
        <div className="h-[24px] mb-2"></div>
      )}

      <button type="submit" className="w-1/2 mx-auto block btn btn-success">
        Login
      </button>
      <Link
        to={"/signUp"}
        type="submit"
        className="w-fit mx-auto text-white block mt-3 cursor-pointer"
      >
        Sign up
      </Link>
    </form>
  );
}

export default Login;

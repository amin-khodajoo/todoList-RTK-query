import { useFormik } from "formik";
import register from "./Register";
import {
  useAddUserMutation,
  useGetUsernameQuery,
} from "../Redux/TodoApi/TodoApi";
import { Link, useNavigate } from "react-router-dom";

function SignUp({ setIsLogin }) {
  const [AddUser] = useAddUserMutation();
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetUsernameQuery();

  const usernames = data?.map((item) => item.username) || [];

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirm: "",
    },
    onSubmit: (values, { setFieldError }) => {
      if (usernames.includes(values.username)) {
        setFieldError("username", "Username already exists");
        return;
      }
      console.log(JSON.stringify(values));

      AddUser({
        username: values.username,
        password: values.password,
        userId: usernames.length.toString(),
      });
      localStorage.setItem("username", values.username);
      localStorage.setItem("userId", usernames.length.toString());
      setIsLogin(true);
      navigate("/");
    },
    validationSchema: register,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred</div>;
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-80 p-8 bg-[#2b2b2b] rounded-2xl shadow-lg mx-auto my-10"
    >
      <h1 className="text-2xl font-bold text-white text-center mb-6">
        Sign up
      </h1>

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
      {formik.touched.username && formik.errors.username ? (
        <div className="text-red-500 mb-2">{formik.errors.username}</div>
      ) : (
        <div className="h-[24px] mb-2"></div>
      )}

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
      {formik.touched.password && formik.errors.password ? (
        <div className="text-red-500 mb-2">{formik.errors.password}</div>
      ) : (
        <div className="h-[24px] mb-2"></div>
      )}

      <label htmlFor="confirm" className="text-lg text-white mb-1 block">
        Confirm:
      </label>
      <input
        onChange={formik.handleChange}
        value={formik.values.confirm}
        type="password"
        name="confirm"
        autoComplete="new-password"
        id="confirm"
        className="w-full p-2 mb-2 rounded-md text-[#2b2b2b]  outline border border-[#2b2b2b] outline-white bg-[#E8F0FE]"
      />
      {formik.touched.confirm && formik.errors.confirm ? (
        <div className="text-red-500 mb-2">{formik.errors.confirm}</div>
      ) : (
        <div className="h-[24px] mb-2"></div>
      )}

      <button type="submit" className="w-1/2 mx-auto block btn btn-success">
        Sign up
      </button>
      <Link
        to={"/login"}
        type="submit"
        className="w-fit mx-auto text-white block mt-3 cursor-pointer"
      >
        Login
      </Link>
    </form>
  );
}

export default SignUp;

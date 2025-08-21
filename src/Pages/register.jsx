import * as yup from "yup";

const register = yup.object().shape({
  username: yup.string().required(),
  password: yup
    .string()
    .required()
    .matches(/^[a-zA-Z0-9_.-]*$/, "password can only contain latin letters")
    .min(8, "Password is too short")
    .max(20, "password is too long"),
  confirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match")
    .required(),
});

export default register;

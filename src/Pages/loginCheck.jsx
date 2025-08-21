import * as yup from "yup";

const loginCheck = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

export default loginCheck;

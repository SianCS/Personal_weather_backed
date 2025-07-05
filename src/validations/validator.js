import { object, ref, string } from "yup";

export const registerSchema = object({
  email: string().email("Email Worng").required("Put your Email"),
  password: string().min(6, "Need more than 6"),
  confirmPassword: string().oneOf(
    [ref("password"), null],
    "Password not Match"
  ),
});

export const loginSchema = object({
  email: string().email("Email Worng").required("Put your Email"),
  password: string().min(6, "Need more than 6"),
});

export const validate = (schema) => async (req, res, next) => {
  // code body
  try {
    await schema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    const errMsg = error.errors.map((item) => item);
    const errTxt = errMsg.join(",");
    console.log(errTxt);
    const mergeErr = new Error(errTxt);
    next(mergeErr);
  }
};

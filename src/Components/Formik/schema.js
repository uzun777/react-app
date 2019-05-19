import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required")
      .matches(
        /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u,
        "Only charts"
      ),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .matches(
        /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u,
        "Only charts"
      )
      .required("Required"),
    email: Yup.string()
      .email("Invalid email")
      .required("Required"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    age: Yup.string()
      .required("No age provided.")
      .max(2, "Max age is 100")
      .matches(/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/, "Incorrecr Age")
  });
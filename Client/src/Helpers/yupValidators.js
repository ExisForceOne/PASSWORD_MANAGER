import * as Yup from "yup";

const yupValidators = {
  register: Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .trim()
      .required("Email required"),
    password: Yup.string()
      .min(10, "Should have min. 10 characters")
      .matches(/^(?=.*[a-z])/, "Must contain at least one lowercase character")
      .matches(/^(?=.*[A-Z])/, "Must contain at least one uppercase character")
      .matches(/^(?=.*[0-9])/, "Must contain at least one number")
      .matches(
        /^(?=.*[@$!%*,.?&])/,
        "Must contain at least one special character"
      )
      .required("Password required"),
    repeatPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must be the same")
      .required("Repeat password"),
  }),
  addAndEdit: Yup.object({
    name: Yup.string()
      .trim()
      .max(18, "Name can have max 18 characters")
      .required("Name is required"),
    login: Yup.string()
      .max(45, "Login can have max 45 characters")
      .trim()
      .required("Login is required"),
    password: Yup.string().trim().required("Password is required"),
    url: Yup.string().max(85, "URL can have max 85 characters"),
    desc: Yup.string().max(85, "URL can have max 85 characters"),
  }),
};

export default yupValidators;

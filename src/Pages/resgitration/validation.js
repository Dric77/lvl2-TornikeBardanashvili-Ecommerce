import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid Email Format")
    .required("Email is Required"),
  password: Yup.string()
    .min(6, "Password must be minimum 6 charatcers")
    .required("Password Is Required"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Password must mutch"
  ),
  phone: Yup.string().required("phone numebr is required")
});

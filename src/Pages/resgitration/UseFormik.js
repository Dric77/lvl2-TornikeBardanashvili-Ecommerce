// import API from "../../api.js";
// import { useFormik } from "formik";
// import { validationSchema } from "./validation";
//
// export const UseFormik = (setLoader ) => {
//   return useFormik({
//     initialValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//       phone: "",
//     },
//     validationSchema: validationSchema,
//     onSubmit: (values, { setErrors }) => {
//       let newUserInfo = {
//         name: values.firstName,
//         email: values.email,
//         password: values.password,
//         password_confirmation: values.confirmPassword,
//       };
//       setLoader(true);
//       API.authUser("register", "POST", newUserInfo)
//         .then((res) => {
//
//         return res.json();
//       })
//     .then((data) => {
//         return data;
//       })
//           .catch((e) => setErrors(e))
//           .finally(() => setLoader(false));
//     },
//   });
// };

import API from "../../api.js";
import { useFormik } from "formik";
import { validationSchema } from "./validation";
import { Helpers } from "../../helpers/helpers.js";

export const UseFormik = (ctx, setLoader) => {
  return useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setErrors }) => {
      let newUserInfo = {
        name: values.firstName,
        email: values.email,
        password: values.password,
        password_confirmation: values.confirmPassword,
      };
      setLoader(true);
      API.authUser("register", "POST", newUserInfo)
        .then((res) => {
          let err = Helpers.errorHandling(res);
          setErrors({ apiErors: err });
          console.log(err);
          return res.json();
        })
        .then((data) => console.log(data))
        .catch((e) => e)
        .finally(() => setLoader(false));
    },
  });
};

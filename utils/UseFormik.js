import { useFormik } from "formik";
import * as Yup from "yup";

const UseFormik = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: {
      email: Yup.string()
        .label("Email")
        .email("Please provide a valid email address")
        .required("This is a required field"),
      name: Yup.string().label("Name").required("This is a required field"),
      password: Yup.string()
        .label("Password")
        .required("This is a required field"),
      passwordConfirm: Yup.string()
        .label("Password")
        .required("This is a required field"),
    },
    onSubmit: (values, { resetForm }) => {
      alert("Form successfully submitted", values);
      resetForm();
    },
  });
  return { formik };
};

export default UseFormik;

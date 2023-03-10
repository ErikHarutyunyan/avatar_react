import * as yup from "yup";

export const SIGNIN_SCHEMA = yup.object().shape({
  // email: yup
  //   .string()
  //   .email('Email should have correct format')
  //   .required('Email is a required field'),
  // Test
  username: yup
    .string()
    .email("Email should have correct format")
    .required("Email is a required field"),
  password: yup.string().min(8).max(32).required("No password provided."),
  // .min(8, 'Password is too short - should be 8 chars minimum.'),
  // .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

export const SIGNUP_SCHEMA = yup.object().shape({
  firstName: yup
    .string()
    .max(40)
    .min(3, "First Name must be at least 3 characters")
    .required("Required First Name"),
  lastName: yup
    .string()
    .max(40)
    .min(3, "Last Name must be at least 3 characters")
    .required("Required Last Name"),
  username: yup
    .string()
    .max(40)
    .min(3, "User Name must be at least 3 characters")
    .required("Required User Name"),
  email: yup
    .string()
    .email("Email should have correct format")
    .required("Email is a required field"),
  password: yup
    .string()
    .min(8)
    .max(32)
    .required("No password provided.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
      "Minimum 8 characters, at least one uppercase letter, one lowercase letter and one number:"
    ),
  confirmPwd: yup
    .string()
    .required("Password is mendatory")
    .oneOf([yup.ref("password")], "Passwords does not match"),
});

export const FORGOT_SCHEMA = yup.object().shape({
  email: yup
    .string()
    .email("Email should have correct format")
    .required("Email is a required field"),
});

export const RESET_SCHEMA = yup.object().shape({
  password: yup
    .string()
    .min(8)
    .max(32)
    .required("No password provided.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
      "Minimum 8 characters, at least one uppercase letter, one lowercase letter and one number:"
    ),
  confirmPwd: yup
    .string()
    .required("Password is mendatory")
    .oneOf([yup.ref("password")], "Passwords does not match"),
});

export const CONTACT_SCHEMA = yup
  .object()
  .shape({
    name: yup
      .string()
      .max(40)
      .min(3, "Please fill all required fields.")
      .required("Required First Name"),
    email: yup
      .string()
      .email("Please fill all required fields.")
      .required("Please fill all required fields."),
    text: yup
      .string()
      .required("Please fill all required fields."),
    choose: yup.bool().oneOf([true], "Please choose option."),
  })
  .required();

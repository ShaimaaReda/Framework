import React from "react";
import { Formik, Form, useFormik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Contact() {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    age: Yup.number().positive("Age must be positive"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      )
      .required("Password is required"),
  });
  const sendMsg = (values) => {
    // Send the form data to your server here
    console.log(values);
  };

  const initialValues = { name: "", email: "", age: 0, password: "" };
  return (
    <>
      <div className=" text-center p-6 flex-col justify-between items-center justify-items-center bg-green-300">
        <h2 className="text-white text-4xl font-extrabold">conatct section</h2>
        <div className="my-3 flex justify-between items-center gap-3">
          <div className="border-t-4 border-white w-20 "></div>
          <i className="text-white fa-solid fa-star"></i>
          <div className="border-t-4 border-white w-20 "></div>
        </div>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={sendMsg}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <div class="content-center container mx-auto">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className=" text-gray-700 text-sm font-bold mb-2"
                  for="name"
                >
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="name"
                  id="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                {errors.name && touched.name}
              </div>
              <div className="mb-4">
                <label
                  class=" text-gray-700 text-sm font-bold mb-2"
                  for="age"
                >
                  age
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                  name="age"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.age}
                />
                {errors.age && touched.age}
              </div>
              <div className="mb-4">
                <label
                  class=" text-gray-700 text-sm font-bold mb-2"
                  for="email"
                >
                  email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email}
              </div>

              <div className="mb-4">
                <label
                  class=" text-gray-700 text-sm font-bold mb-2"
                  for="password"
                >
                  password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password}
              </div >
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">send</button>
            </form>
          </div>
        )}
      </Formik>
    </>
  );
}

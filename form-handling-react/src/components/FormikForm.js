import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation Schema using Yup
const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
});

const FormikForm = () => {
  const initialValues = {
    username: '',
    email: '',
    password: ''
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log('Formik Form Submitted:', values);
    // Call your API here
    setSubmitting(false);
    resetForm();
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Formik User Registration</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label>Username:</label>
              <Field type="text" name="username" />
              <ErrorMessage name="username" component="p" style={{ color: 'red' }} />
            </div>

            <div>
              <label>Email:</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="p" style={{ color: 'red' }} />
            </div>

            <div>
              <label>Password:</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="p" style={{ color: 'red' }} />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;

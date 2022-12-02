import { Form, Formik } from 'formik';
import React from 'react';
import InputField from '../components/atoms/InputField';
import * as Yup from 'yup';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password should be at least 6 charecter long')
    .required('Password is required'),
  // .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,16}$/, 'Invalid password'),
});

const onSubmit = (data) => {
  console.log({ data });
};

const login = () => {
  return (
    <div className='flex flex-col justify-center   bg-ghostwhite w-1/2 max-w-xl mx-auto p-10'>
    
      <p className='text-lg py-3'>Login</p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {/* <fieldset disabled={isLoading}> */}
        <fieldset>
          <Form className=''>
            <InputField
              // icon={<EmailIcon classname="w-4 h-5" />}
              name='email'
              type='email'
              placeholder='Email address'
              className='bg-teal-50 rounded-xl px-4 py-3'
            />

            <InputField
              // icon={<LockIcon classname="w-4 h-5" />}
              name='password'
              type='password'
              placeholder='Password'
              className=' mt-4 bg-teal-50 rounded-xl px-4 py-3'
            />

            <button
              className=' mt-6 px-8 bg-action rounded-lg py-2 text-white font-semibold'
              type='submit'
            >
              Login
              {/* <LoadingButtonWithTitle title="Log in" loading={isLoading} spinnerClassName="text-action" /> */}
            </button>
          </Form>
        </fieldset>
      </Formik>
    </div>
  );
};

export default login;

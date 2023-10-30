import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useMutation } from '@tanstack/react-query';
import { userSignin } from '../../apis/authAPIs';
import InputField from '../atoms/InputField';
import { useRouter } from 'next/router';


const initialValues = {
  mobileNo: '',
  // email:'',
  password: '',
  isGuestLogin: false,
};

const validationSchema = Yup.object({
  // email: Yup.string()
  //   .email('Invalid email address')
  //   .required('Email is required'),
  mobileNo: Yup.string().required('Mobile/Email is required'),
  password: Yup.string()
    .min(6, 'Password should be at least 6 charecter long')
    .required('Password is required'),
 
});



const UserLogin = () => {
  const {isLoading,isSuccess,mutateAsync}= useMutation ((data)=>userSignin(data));

  const router=useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>
  }
  
  const onSubmit = async (data) => {

    const response= await mutateAsync(data);
    console.log(response);
    if(response?.data){
      router.push('/products');
      
    }

    
  
    // console.log({ data });
  };

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
            {/* <InputField
              // icon={<EmailIcon classname="w-4 h-5" />}
              name='email'
              type='email'
              placeholder='Email address'
              className='bg-teal-50 rounded-xl px-4 py-3'
            /> */}
            <InputField
              // icon={<EmailIcon classname="w-4 h-5" />}
              name='mobileNo'
              type='text'
              placeholder='Mobile/Email address'
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
            </button>
          </Form>
        </fieldset>
      </Formik>
    </div>
  );
};

export default UserLogin;

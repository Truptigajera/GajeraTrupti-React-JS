import React from 'react'
// import { useFormik } from 'formik'
import {Formik, Form , Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'


// Formik touched

const initialValues = {
    firstname:'',
    lastname:'',
    email:'',
    password:''
}

const onSubmit = values => {
    console.log('formData' , values)
}

const validationSchema = Yup.object({
    firstname:Yup.string().required('Required'),
    lastname:Yup.string().required('Required'),
    email:Yup.string().email('Invaild Email Address').required('Required'),
    password:Yup.string().required('Required')
})

// const validate = values => {
//     let errors = {}
//     if(!values.firstname){
//         errors.firstname = 'Required'
//     }
//     if(!values.lastname){
//         errors.lastname = 'Required'
//     }
//     if(!values.email){
//         errors.email = 'Required'
//     }else if (
//         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//       ) {
//         errors.email = 'Invalid email address';
//       }
//     if(!values.password){
//         errors.password = 'Required'
//     }
//     return errors
// }

const Login4 = () => {

    
    return (
        <div>
            <div>
                <h1 className='text-white p-4 text-center text-4xl bg-blue-400'>React Formik</h1>
                <div className='h-screen flex justify-center items-center '>
                    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    <Form>
                        <div className='bg-blue-200 text-black p-6 border-4 border-double border-black flex flex-col'>
                            <div className='mb-4 flex flex-col'>
                                <label className='me-4' htmlFor="firstName">FirstName</label>
                                <Field type="text" name="firstname" id="firstname"  />
                                <ErrorMessage name="firstname"/>
                            </div>
                            <div className='mb-4 flex flex-col'>
                                <label className='me-4' htmlFor="lastName">LastName</label>
                                <Field type="text" name="lastname" id="lastname"  />
                                <ErrorMessage name="lastname"/>
                            </div>
                            <div className='mb-4 flex flex-col'>
                                <label className='me-4' htmlFor="email">Email</label>
                                <Field type="text" name="email" id="email"  />
                                <ErrorMessage name="email"/>
                            </div>
                            <div className='mb-4 flex flex-col'>
                                <label className='me-4' htmlFor="password">Password</label>
                                <Field type="text" name="password" id="password"  />
                                <ErrorMessage name="password"/>
                            </div>
                            <button type='submit' className='bg-blue-500 mb-2'>Submit</button>
                        </div>
                    </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default Login4
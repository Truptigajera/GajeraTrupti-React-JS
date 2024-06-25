import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'


//Formik yup


const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: ''
}

const onSubmit = values => {
    console.log('formData', values)
}

const validationschema = Yup.object({
    firstname:Yup.string().required('Required'),
    lastname:Yup.string().required('Required'),
    email:Yup.string().email('Invalid Email Address').required('Required'),
    password:Yup.string().required('Required'),

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



const Login2 = () => { 

    const formik = useFormik({
        initialValues,
        onSubmit,
        // validate
        validationSchema
    })

    console.log('formikData' , formik.values);
    console.log('formikError',formik.errors);
return (
    <div>
        <div>
            <h1 className='text-white bg-blue-400 p-4 text-center font-extrabold text-2xl'>React Formik</h1>
            <div className='h-screen flex justify-center items-center'>
                <form onSubmit={formik.handleSubmit}>
                    <div className='bg-blue-400 text-white  p-10 border-4 border-double  border-blue-800 flex flex-col '>
                        <div className='mb-4 flex flex-col'>
                            <label className='me-4 font-bold' htmlFor="firstName">FirstName</label>
                            <input type="text" className='text-black' name="fname" id="firstName" value={formik.values.firstname} onChange={formik.handleChange} />
                            {                              
                                    formik.errors.firstname ? <div>{formik.errors.firstname}</div> : null                           
                            }
                        </div>
                        <div className='mb-4 flex flex-col'>
                            <label className='me-4 font-bold' htmlFor="lastName">LastName</label>
                            <input type="text" className='text-black' name="lastname" id="lastName" value={formik.values.lastname} onChange={formik.handleChange}/>
                            {
                                formik.errors.lastname ? <div>{formik.errors.lastname}</div> : null
                            }
                        </div>
                        <div className='mb-4 flex flex-col'> 
                            <label className='me-4 font-bold' htmlFor="email">Email</label>
                            <input type="text" className='text-black' name="email" id="email" value={formik.values.email} onChange={formik.handleChange} />
                            {
                                formik.errors.email ? <div>{formik.errors.email}</div> : null
                            }
                        </div>
                        <div className='mb-4 flex flex-col'>
                            <label className='me-4 font-bold' htmlFor="password">Password</label>
                            <input type="text" className='text-black' name="password" id="password" value={formik.values.firstname} onChange={formik.handleChange} />
                            {
                                formik.errors.password ? <div>{formik.errors.password}</div> : null
                            }
                        </div>
                        <button className='bg-gray-500 mb-3 p-3 font-bold'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
)
}

export default Login2
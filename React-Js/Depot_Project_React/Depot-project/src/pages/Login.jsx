import axios from "axios";
import { useState } from "react";
import { Form } from "react-router-dom";



function Login ()
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        const bodyData = {email:email, password: password};
        // const bodyData = JSON.stringify({email:email, password: password});
        console.log(bodyData);
        let response  = await axios.post("http://localhost:5055/api/user/login", bodyData);
        console.log(response.data);
        // let response  = await fetch("http://localhost:5055/api/user/login",{
        //     method: "POST",
        //     body: bodyData,
        // }).then((result)=>result.json());
        // console.log(response);
    }
    return (
        <>
        <Form onSubmit={handleSubmit}>
            <label>Email: </label>
            <input type="text" name="email" placeholder="Enter Your Email" onChange={(e)=>{
                setEmail(e.target.value);
                // console.log(email);
            }} />
            <label>Password: </label>
            <input type="password" name="password" placeholder="Enter Your Password" onChange={(e)=>{
                setPassword(e.target.value);
            }} />
            <button type="submit">Login</button>
        </Form>
        </>
    )
}

export default Login;
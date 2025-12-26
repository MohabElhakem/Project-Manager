// We import useState so React can remember values (email & password)
import { useState } from "react";
import { loginUser } from "../api/auth.api";
import styles from "./Login.module.css"
import FormInput from '../component/FormInput'
import { Link } from 'react-router-dom';


function Login (){
    // State for email input
    // email = current value
    // setEmail = function to update it
    const [email , setEmail] = useState("");
    // State for password input
    const [password, setPassword] = useState("");

    // This function runs when the form is submitted
    const handleSubmit = async (e)=> {

        e.preventDefault(); // this kine prevent the bage from reloading 

        // for now console.log the email and password
        console.log("Email : " , email);
        console.log("Passwprd : ", password);
        try {
            const data = await loginUser(email,password);
            console.log(data);
            alert(data.message)
        } catch (error) {
            console.error("Login failed",error);
            alert(error.message || "Login Failed")

        }
    }
    //
    //
    //
    //
    return (
        <div className= {styles.page}>

            <div className= {styles.container}>


                <h1 className = {styles.title}>Log In</h1>


                {/* start the form from here */}
                <form onSubmit={ handleSubmit }> 
                    <FormInput 
                        label= "Email"
                        type = 'email'
                        placeholder= "Enter Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <FormInput 
                        label="Password"
                        type = 'password'
                        placeholder= "Give me your secret"
                        value= {password}
                        onChange={(e)=> setPassword(e.target.value)}
                    />
                    <button type = "submit" className={styles.button}>Ready</button>
                </form>

                <p className = {styles.formFooter}>
                    Don't have an account?
                </p>
                <Link to= "/signup" className={styles.signLink}> Sign up </Link>
            </div>
        </div>
    );
    
}

export default Login
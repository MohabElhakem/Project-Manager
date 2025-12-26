import {SignUser} from '../api/auth.api'
import { useState } from 'react'  
import styles from './Sign.module.css'  
import FormInput from '../component/FormInput'

function Sign (){
    // set the data
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [username , setUsername] = useState("");

    // a function that will run when the form is submitted
    const handleSubmit = async(e) => {
        e.preventDefault(); // this prevent the page from reloading
        console.log({email,password,username});

        // call the api 
        try {
            const data = await SignUser(email , username , password);
            console.log(data);
            alert(data.message)
        } catch (error) {
            console.error("sign up failed" , error);
            alert(error.message|| "sign up failed");
        }
    }
    //
    //
    //
    //now the return of the bage which is the html page
    return(
        <div className = {styles.page} >
            <div className = {styles.container}>

                <h1 className = {styles.title}>Sign up</h1>

                {/* start the form from here */}
                <form onSubmit={handleSubmit}>

                    <FormInput
                        label="Email"
                        type='email'
                        placeholder="Enter Your Email"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                    />

                    <FormInput 
                        label = "Username"
                        placeholder = "What Can we call you"
                        value={username}
                        onChange={(e)=> setUsername(e.target.value)}
                    />

                    <FormInput
                        label = "Password"
                        type = 'password'
                        placeholder= "Create your Password"
                        value = {password}
                        onChange= {(e)=> setPassword(e.target.value)}
                    />

                    <button type = "submit" className={styles.button}>Create</button>
                </form>
            </div>
        </div>
    )
}

export default Sign
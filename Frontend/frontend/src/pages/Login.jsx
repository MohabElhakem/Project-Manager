// We import useState so React can remember values (email & password)
import { useState } from "react";
import { loginUser } from "../api/auth.api";


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
        <div>
            {/* Page tilte */}
            <h1>Login</h1>

            {/* Form Conatiner */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input
                        type ="email"
                        value = {email}
                        onChange={(e)=> setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label>Password</label>
                    <input
                        type = "password"
                        value = {password}
                        onChange={(e)=> setPassword(e.target.value)}
                    />
                </div>
                
                {/* Submit Button */}
                <button type = 'submit'>Login</button>
            </form>
        </div>
    );
    
}

export default Login
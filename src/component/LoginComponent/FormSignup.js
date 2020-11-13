import React from 'react';
import useForm from './useForm'

const FormSignup = () => {
    const { handleChange,values,handleSubmit } = useForm();

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1>LogIn</h1>
                <div>
                    <label htmlFor="username" >UserName:</label>
                        <input
                            id="username" 
                            type="text"  
                            name="username"
                            placeholder="Enter Your Name" 
                            value= {values.username}
                            onChange={handleChange}      
                        />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                        <input 
                            id="password"
                            type="password"  
                            name="password"
                            placeholder="Enter Your Password"   
                            value= {values.password} 
                            onChange={handleChange}    
                        />
                </div>
                <div>
                    <button type="submit">Sign Up</button>
                </div>
                <small>Forget Password?</small>
            </form>
        </div>
    )
}
export default FormSignup;
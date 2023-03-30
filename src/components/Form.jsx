import React from 'react'
import "../styles/form.css"
import { FcGoogle } from "react-icons/fc"

const Form = () => {
    return (
        <div className='form__card'>
          
          <div className="form__card__top">
                <h1>Welcome back</h1>
                <h4 className='h4__text'>Welcome back! Please Enter your details</h4>
            </div>
            <div className="form__card__midinput">
                <div className="input__top">
                    <h5>Email</h5>
                    <input type="text" className='input__field' placeholder='Enter your name' />
                </div>
                <div className="input__down">
                    <h5>Password</h5>
                    <input type="password" className='input__field' placeholder='*******' />
                </div>
                <div className="checkbox__div">

                    <label className='bold__text'><input type="checkbox" /><span className='remember__me'>Remember me</span></label>
                    <span className='bold__text forgot__pass'>Forgot Password</span>
                </div>

            </div>
            <div className="form__card__bottom">
                <button className='btn__signin sign__me'>Sign in</button>
                <button className='btn__signin sign__google'><FcGoogle className='icons'  />Sign in With Google</button>
                <div className="inner__text__account">
                    <span className='sign__account'>Dont have an account? </span><span className='signUp__free'> Sign up for free</span>
                </div>
            </div>
          </div>
        
    )
}

export default Form
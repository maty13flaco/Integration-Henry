import { useState } from 'react';

import style from './style.module.css'

import { validate } from '../../../utils/validation';

const Form = (props) => {
    const [userData, setUserData] = useState({
        email:"",
        password: ""
    })

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUserData({...userData, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate(userData)
        setErrors(validationErrors)

        if(Object.keys(errors).length === 0){
            props.login(userData)
        }
    }

    return( 
        <div className={style.formContainer}>
            <form >
                <div className={style.inputContainer}>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" value={userData.email} onChange={handleChange}/>
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={userData.password} onChange={handleChange}/>
                    {errors.password && <span className="error">{errors.password}</span>}
                </div>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}
 
export default Form;
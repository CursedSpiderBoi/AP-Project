import { useState } from "react";
import '@styles/App.css'

const login = () =>{
    const [login,setLogin] = useState(false);


    return (
        <>
            <div className='primary-bg' >
                    <label className="quiz-form__label">
                        Login
                        <input
                            type="text"
                            name="subject"
                            className="quiz-form__input"
                            required
                        />
                    </label>
            </div>
        </>
    )
}

export default login;
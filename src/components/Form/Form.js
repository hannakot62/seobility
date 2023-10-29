import React from "react"
import "./Form.sass"
import InputMask from 'react-input-mask';


export default function Form(props) {

    return (
        <div className="container">
            <form>
                <div className="fieldContainer">
                    <label htmlFor="name">Enter your name: </label>
                    <input type="text" name="name" id="name" required/>
                </div>

                <div className="fieldContainer">
                    <label htmlFor="email">Enter your email: </label>
                    <input type="email" name="email" id="email" required/>
                </div>

                <div className="fieldContainer">
                    <label htmlFor="tel">Enter your phone number: </label>
                    <InputMask mask="+375 (99) 99-99-999" placeholder="+375 (99) 99-99-999" value={props.value} onChange={props.onChange}>
                        {(inputProps) => <input {...inputProps} type="tel"/>}
                    </InputMask>
                </div>

                <div className="fieldContainer">
                    <label htmlFor="message">Enter your message: </label>
                    <textarea name="message" id="message" required/>
                </div>

                <div className="buttons">
                    <input className="reset" type="reset" value="Reset"/>
                    <input className="submit" type="submit" value="Submit!"/>
                </div>

            </form>
        </div>
    )
}
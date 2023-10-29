import React from "react"
import "./Form.sass"
import InputMask from 'react-input-mask';
import useInput from "../../hooks/useInput";


export default function Form(props) {

    const mask = "+375 (99) 99-99-999"

    const nameInput = useInput("", {isEmpty: true})
    const emailInput = useInput("", {isEmpty: true, isEmail: true})
    const phoneInput = useInput("", {isEmpty: true, isMaskMatch: true  })
    const messageInput = useInput("", {isEmpty: true})

    const handleReset = () => {
        nameInput.onChange()
        emailInput.onChange()
        phoneInput.onChange()
        messageInput.onChange()
    }

    return (
        <div className="container">
            <form>
                <div className="fieldContainer">
                    <label htmlFor="name">Enter your name: </label>
                    <div className='inputContainer'>
                        <input type="text" name="name" id="name"
                               value={nameInput.value}
                               onChange={(e) => nameInput.onChange(e)}
                               onBlur={() => nameInput.onBlur()}
                               className={nameInput.errorText ? "error" : ""}
                        />
                        <div className='errorContainer'>{nameInput.errorText}</div>
                    </div>
                </div>

                <div className="fieldContainer">
                    <label htmlFor="email">Enter your email: </label>
                    <div className='inputContainer'>

                        <input name="email" id="email"
                               value={emailInput.value}
                               onChange={(e) => emailInput.onChange(e)}
                               onBlur={() => emailInput.onBlur()}
                               className={emailInput.errorText ? "error" : ""}
                        />
                        <div className='errorContainer'>{emailInput.errorText}</div>
                    </div>
                </div>

                <div className="fieldContainer">
                    <label htmlFor="tel">Enter your phone number: </label>
                    <div className='inputContainer'>
                        <InputMask mask={mask} placeholder="+375 (99) 99-99-999"
                                   value={phoneInput.value}
                                   onChange={(e) => phoneInput.onChange(e)}
                                   onBlur={() => phoneInput.onBlur()}
                                   className={phoneInput.errorText ? "error" : ""}
                        >
                            {(inputProps) => <input {...inputProps} type="tel"/>}
                        </InputMask>
                        <div className='errorContainer'>{phoneInput.errorText}</div>
                    </div>
                </div>

                <div className="fieldContainer">
                    <label htmlFor="message">Enter your message: </label>
                    <div className='inputContainer'>
                    <textarea name="message" id="message"
                              value={messageInput.value}
                              onChange={(e) => messageInput.onChange(e)}
                              onBlur={() => messageInput.onBlur()}
                              className={messageInput.errorText ? "error" : ""}
                    />
                        <div className='errorContainer'>{messageInput.errorText}</div>
                    </div>
                </div>

                <div className="buttons">
                    <input className="reset" type="reset" value="Reset" onClick={() => handleReset()}/>
                    <input className="submit" type="submit" value="Submit!"/>
                </div>

            </form>
        </div>
    )
}
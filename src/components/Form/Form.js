import React, {useCallback, useEffect, useState} from "react"
import "./Form.sass"
import InputMask from 'react-input-mask';
import useInput from "../../hooks/useInput";
import handleSend from "../../helpers/handleSend";


export default function Form(props) {

    const mask = "+375 (99) 99-99-999"

    const nameInput = useInput("", {isEmpty: true})
    const emailInput = useInput("", {isEmpty: true, isEmail: true})
    const phoneInput = useInput("", {isEmpty: true, isMaskMatch: true})
    const messageInput = useInput("", {isEmpty: true})

    const [isValid, setIsValid] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");

    useEffect(() => {
        if (nameInput.isValid && emailInput.isValid && phoneInput.isValid && messageInput.isValid) {
            setIsValid(true)
        } else setIsValid(false)
    }, [nameInput.isValid, emailInput.isValid, phoneInput.isValid, messageInput.isValid]);


    const handleReset = useCallback(() => {
        nameInput.onChange()
        emailInput.onChange()
        phoneInput.onChange()
        messageInput.onChange()
    }, []);

    const handleSubmit = async (event) => {
        const response = await handleSend(event, isValid, [nameInput, emailInput, phoneInput, messageInput])
        setResponseMessage(response)
    }


    return (
        <div className="container">
            <div className="messageBox">{responseMessage}</div>
            <form>

                <div className="fieldContainer">
                    <label htmlFor="name">Enter your name: </label>
                    <div className='inputContainer'>
                        <input type="text" name="name" id="name"
                               value={nameInput.value}
                               onChange={(e) => nameInput.onChange(e)}
                               onBlur={() => nameInput.onBlur()}
                               className={nameInput.errorText ? "error" : ""}
                               autoComplete={"off"}
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
                               autoComplete={"off"}
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
                    <input className="submit" type="submit" value="Submit!" disabled={!isValid}
                           onClick={(e) => handleSubmit(e)}/>
                </div>

            </form>
        </div>
    )
}
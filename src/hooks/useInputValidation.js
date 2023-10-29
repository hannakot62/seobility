import React, {useEffect, useState} from "react"


const errorsConst = {
    isEmpty: "Поле не должно оставаться пустым",
    isEmail: "Введите корректный email",
    isExactLength: "Некорректная длина ввода",
    isMaskMatchError: "Некорректная длина ввода"
}

export default function useInputValidation(currentValue, isTouched, validators) {
    const [isValid, setIsValid] = useState(false);
    const [errorText, setErrorText] = useState("");

    const [isEmptyError, setIsEmptyError] = useState(true);
    const [isEmailError, setIsEmailError] = useState(false);
    const [isExactLengthError, setIsExactLengthError] = useState(false);
    const [isMaskMatchError, setIsMaskMatchError] = useState(false);

    useEffect(() => {
        if (isTouched) {
            setErrorText(errorsConst.isEmpty)
            setIsEmptyError(true)
        }
    }, [isTouched]);


    useEffect(() => {
        for (const validator in validators) {
            switch (validator) {

                case "isEmpty": {
                    const value = currentValue.trim()
                    if (value) setIsEmptyError(false)
                    else if (isTouched) {
                        setIsEmptyError(true);
                        setErrorText(errorsConst.isEmpty)
                    }
                    break
                }


                case "isEmail": {
                    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(currentValue)) {
                        setIsEmailError(false)
                        setIsEmptyError(false)
                    } else if (isTouched) {
                        setIsEmailError(true)
                        setErrorText(errorsConst.isEmail)
                    }
                    break
                }


                case "isExactLength": {
                    if (currentValue.length === validators[validator]) {
                        setIsExactLengthError(false)
                        setIsEmptyError(false)
                    } else if (isTouched) {
                        setIsExactLengthError(true)
                        setErrorText(errorsConst.isExactLength)
                    }
                    break
                }


                case "isMaskMatch": {
                    if (!currentValue.includes("_") && currentValue) {
                        setIsMaskMatchError(false)
                        setIsEmptyError(false)
                    } else if (currentValue) {
                        setIsMaskMatchError(true)
                        setIsEmptyError(false)
                        setErrorText(errorsConst.isMaskMatchError)
                    }
                    break
                }

            }
        }
    }, [currentValue])

    useEffect(() => {
        if (isEmailError || isEmptyError || isMaskMatchError || isExactLengthError) {
            setIsValid(false)
        }
        else {
            setIsValid(true)
        }
    }, [isEmailError, isEmptyError, isMaskMatchError, isExactLengthError]);


    useEffect(() => {
        if (isValid) setErrorText("")
    }, [isValid])


    const clearAll = () => {
        setIsEmptyError(true)
        setIsEmailError(false)
        setIsExactLengthError(false)
        setIsMaskMatchError(false)
        setIsValid(false)
        setErrorText("")
    }

    return {
        isEmptyError,
        isEmailError,
        isExactLengthError,
        isMaskMatchError,

        isValid,
        errorText,
        clearAll
    }
}
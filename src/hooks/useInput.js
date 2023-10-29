import React, {useDeferredValue, useState} from "react";
import useInputValidation from "./useInputValidation";

export default function useInput(initialValue, validators){
    const [value, setValue] = useState(initialValue)
    const [isTouched, setIsTouched] = useState(false)
    const deferredValue = useDeferredValue(value)
    const validation = useInputValidation(deferredValue, isTouched, validators)

    const onChange = (event) =>{
        setValue(event?event.target.value:"")
        setIsTouched(true)
        validation.clearAll()
    }

    const onBlur = () =>{
        setIsTouched(true)
    }

    return{
        value,
        onChange,
        onBlur,
        ...validation
    }
}
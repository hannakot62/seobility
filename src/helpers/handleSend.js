export default  async  function handleSend(event, isValid, fields){
    const [nameInput, emailInput, phoneInput, messageInput] = [...fields]
        event.preventDefault()
        if (isValid) {
            let response = await fetch("http://localhost:9090/api/registration",
                {
                    method: "POST",
                    body: JSON.stringify({
                        name: nameInput.value,
                        email: emailInput.value,
                        phone: phoneInput.value,
                        message: messageInput.value
                    })
                })
            let json = await response.json()
            console.log(json)
            fields.forEach(field=>{
                field.onChange("")
                field.setIsTouched(false)
            })
            return json.message
        }
}
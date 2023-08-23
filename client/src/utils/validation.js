export const validate = (input) => {
    const errors = {}
    // EMAIL CONDITIONS
    let re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if(input.email === "") errors.email =  'Falta ingresar el email'
    else if(input.email.length >= 36) errors.email =  'El email es demasiado largo'
    else if(!re.test(input.email)) errors.email =  'El formato del email no es válido'
    // PASSWORD CONDITIONS
    if(input.password === "") errors.password =  'Falta el campo de contraseña'
    else if(input.password.length < 6) errors.password =  'La contraseña debe tener al menos 6 caracteres'
    else if(input.password.length > 10) errors.password =  'La contraseña no debe tener más de 10'
    
    return errors
}

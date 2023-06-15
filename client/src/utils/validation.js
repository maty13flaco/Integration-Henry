// EMAIL
    // el nombre de usuario tiene que ser un email (¡Explora validaciónes REGEX en internet!).
    // el nombre de usuario no puede estar vacío.
    // el nombre de usuario no puede tener más de 35 caracteres.

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
// PASSWORD
    // la contraseña tiene que tener al menos un número.
    // la contraseña tiene que tener una longitud entre 6 y 10 caracteres.
    // ¡No te olvides de renderizar y darle estilos a tus errores! Te dejamos un ejemplo de cómo puede quedar.

export function validateLogin(email, password){
    const errors = []

    if(!email) errors.push('Email é obrigatório')
    if(!password) errors.push('Senha é obrigatória')

    return errors
}
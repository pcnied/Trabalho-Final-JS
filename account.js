const formulario = document.querySelector('.formulario')
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault()
    

    const email = document.querySelector('#ilogin').value
    const senha = document.querySelector('#isenha').value
    const validacao = validarConta(email)
    if(validacao) {
        salvarLocalStorage({
            email: email,
            senha: senha
        })
        alert('Conta criada com sucesso!')
    }
})

function salvarLocalStorage(usuario) {
    localStorage.setItem(usuario.email, JSON.stringify(usuario))
}

function validarConta(email) {
    const validacao = localStorage.getItem(email)
    if(validacao) {
        return alert('Já existe uma conta com esse e-mail. Tente novamente!')
    }

    return true
}




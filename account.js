const formulario = document.querySelector('.formulario')
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault()

    const email = document.querySelector('#ilogin').value
    const senha = document.querySelector('#isenha').value
    salvarLocalStorage({
        email: email,
        senha: senha
    })
})

function salvarLocalStorage(usuario) {
    localStorage.setItem(usuario.email, JSON.stringify(usuario))
}


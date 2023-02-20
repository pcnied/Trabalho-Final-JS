const formulario = document.querySelector('.formulario')
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault()

    const email = document.querySelector('#ilogin').value
    const senha = document.querySelector('#isenha').value

    const contaCriada = pegarContaLocalStorage(email)
    const validacao = validarConta(contaCriada, senha)
    if(validacao) {
        alert('Login efetuado com sucesso!')
        window.location.href= 'home.html'
    }
})

function pegarContaLocalStorage(email) {
    const contaCriada = localStorage.getItem(email)
    if(contaCriada) {
        return JSON.parse(contaCriada)
    }
    return ''
}

function validarConta(conta, senha) {
    if(!conta) {
        alert('E-mail ou senha inválidos.')
        return false
    } 

    if(conta) {
        if(conta.senha != senha) {
            alert('E-mail ou senha incorretos.')
            return false
        }
    }

    return true
}

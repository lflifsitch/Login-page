var user = document.getElementById('user')
var pass = document.getElementById('password') 
var check = document.getElementById('check')
function clicar() {
    if (user.value.length == 0 || pass.value.length == 0) {
        alert('Verifique os dados inseridos novamente')
    } else {
        alert('Login feito com sucesso!')
    }
}




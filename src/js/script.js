var botaoEntrar =document.getElementById("submit")


function login() {

    var campoEmail = document.getElementById("email").value

    var campoSenha = document.getElementById("password").value
    
    if(campoEmail== "admin@manager.com" && campoSenha== "adm123") {
       window.location.replace("dashboard.html") 
    }
    else {
        alert("Login invalido")
    }

    console.log("Entrou na função Login")
}
botaoEntrar.addEventListener("click", login)
console.log('log 2')

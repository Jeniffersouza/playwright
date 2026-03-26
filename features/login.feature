#language: pt

Funcionalidade: Login no Automation Exercise

  Cenário: Fazer login com credenciais válidas
    Dado que estou na página inicial do Automation Exercise
    Quando clico no link "Signup Login"
    E preencho o campo de email com "Jeniffer@gmail.com"
    E preencho o campo de senha com "Jeni1234"
    E clico no botão "Login"
    Então deve aparecer "Logged in as Jeniffer"

  Cenário: Fazer login com credenciais inválidas
    Dado que estou na página inicial do Automation Exercise
    Quando clico no link "Signup Login"
    E preencho o campo de email com "Jeniffer@gmail.com"
    E preencho o campo de senha com "Jeni12340"
    E clico no botão "Login"
    Então deve aparecer "Your email or password is incorrect!"

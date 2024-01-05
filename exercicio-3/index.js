// Meu código:

// function mensagemParaUsuario( respostaDoUsuario = confirm('Seja bem vindo(a), aventureiro(a)! Gostaria de pagar R$ 50,00 para passar a noite na nossa hospedagem?')){
//     if(respostaDoUsuario){
//         alert('Ótimo! Nós temos as melhores camas de toda região!')
//     }else{
//         alert('Que pena! Você parecia ser uma pessoa legal.')
//     }
// }

// mensagemParaUsuario()

// Exemplo do curso:

const vaiSeHospedar = confirm('Seja bem vindo(a), aventureiro(a)! Gostaria de pagar R$ 50,00 para passar a noite na nossa hospedagem?')

if(vaiSeHospedar){
    alert('Ótimo! Nós temos as melhores camas de toda região!')
}else{
    alert('Que pena! Você parecia ser uma pessoa legal.')
}

//1. A Função

function validadoSessao(token, tempoSegundos){
    if(!token || token === ""){
        return "TOKEN_AUSENTE";
    }
    if(tempoSegundos <= 0){
        return "SESSAO_EXPIRADA"
    }

    return "SESSAO_ATIVA";


}

//Suite de teste
console.log("----------TESTE: VALIDADOR DE TESTE----------")

//Caso de teste 01: Caminho feliz(token valido com tempo ativo)
    if(validadoSessao("token_xyz_123"), 300 === "Sessão válida"){
        console.log("Caso 1 Passou: Sessão")
    }else{
        console.log("Caso 1 falhou")
    }
//Caso de teste 02
    
//Caso de teste 03
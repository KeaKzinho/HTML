window.onload = function (){
    const urlParams = new URLSearchParams(window.location.search)
    const NOME = urlParams.get("nome")
    const IDADE = urlParams.get("idade")
    const SEXO = urlParams.get("sexo")
    const CPF = urlParams.get("cpf") 
    const DISCIPLINA = urlParams.get("disciplina")

    diploma.innerHTML = `A Reitora da José Fonseica Educação, no uso de suas atribuições e tendo em vista a conclusão do Curso de ${DISCIPLINA}, com o formando ${NOME}, com a idade de ${IDADE} anos, do CPF ${CPF}, do sexo ${SEXO}, completou o curso com sucesso.`
}
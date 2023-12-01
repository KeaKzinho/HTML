window.onload = function (){
    const urlParams = new URLSearchParams(window.location.search)
    const NOME = urlParams.get("nome")
    const IDADE = urlParams.get("idade")
    const SEXO = urlParams.get("sexo")

    diploma.innerHTML = `A Reitora da Proz Educação, no uso de suas atribuições e tendo em vista a conclusão do curso de ${NOME}, de ${IDADE} anos, do sexo ${SEXO} da escola Proz Educação, completou o curso "Análise de Desenvolvimento de Sistemas" com sucesso.`
}
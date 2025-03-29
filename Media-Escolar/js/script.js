// Função principal para calcular a média das notas.
function calcularMedia() {
    // Obtém os valores dos campos de notas, valida e converte para números.
    let nota1 = validarNota(document.getElementById("nota1")?.value.trim());
    let nota2 = validarNota(document.getElementById("nota2")?.value.trim());
    let nota3 = validarNota(document.getElementById("nota3")?.value.trim());
    let nota4 = validarNota(document.getElementById("nota4")?.value.trim());

    // Calcula a média aritmética das quatro notas.
    let media = (nota1 + nota2 + nota3 + nota4) / 4;

    // Verifica se existe um elemento com o id "resultado" para mostrar a média.
    let resultadoElement = document.getElementById("resultado");
    if (resultadoElement) {
        // Exibe a média no elemento "resultado", formatada para 2 casas decimais.
        resultadoElement.innerText = "Média: " + media.toFixed(2);
    } else {
        // Exibe um erro no console caso o elemento "resultado" não seja encontrado.
        console.error("Elemento com ID 'resultado' não encontrado!");
    }
}

// Função para validar e normalizar as notas.
function validarNota(valor) {
    // Converte o valor recebido (string) para um número decimal.
    let nota = parseFloat(valor);

    // Verifica se a entrada não é um número válido.
    if (isNaN(nota)) {
        console.warn(`Valor inválido recebido: "${valor}". Assumindo 0.`);
        nota = 0; // Valor padrão para entrada inválida.
    } else if (nota < 0) {
        // Ajusta a nota para 0 caso seja menor que 0.
        console.warn(`Nota negativa detectada: "${nota}". Ajustando para 0.`);
        nota = 0;
    } else if (nota > 10) {
        // Ajusta a nota para 10 caso seja maior que 10.
        console.warn(`Nota maior que 10 detectada: "${nota}". Ajustando para 10.`);
        nota = 10;
    }

    // Retorna a nota validada e ajustada.
    return nota;
}

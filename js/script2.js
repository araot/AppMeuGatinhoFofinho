// Função de validação do formulário
function validarFormulario(event) {
    event.preventDefault(); // Impede o envio do formulário enquanto a validação é feita
    
    // Obtendo os valores dos campos
    var nome = document.getElementById('nome').value;
    var idade = document.getElementById('idade').value;
    var raca = document.getElementById('raca').value;
    var comida = document.getElementById('comida').value;
    var foto = document.getElementById('foto').files.length;
    var descricao = document.getElementById('descricao').value;

    // Validação dos campos
    if (nome === "" || idade === "" || raca === "" || comida === "" || foto === 0 || descricao === "") {
        Swal.fire({
        icon: 'warning',
          title: 'Campos obrigatórios!',
            text: 'Todos os campos são obrigatórios!',
            confirmButtonText: 'OK'
        });
        return false; // Impede o envio do formulário
    }

    // Se a validação for bem-sucedida
    Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text: 'Formulário enviado com sucesso!',
        confirmButtonText: 'OK'
    }).then(() => {
        // Se o usuário clicar em OK, envia o formulário
        document.forms[0].submit();
    });
}

document.querySelector('form').onsubmit = validarFormulario;

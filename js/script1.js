

  document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Impede o envio padrão do formulário

      const nome = document.getElementById('nome').value.trim();
      const email = document.getElementById('email').value.trim();
      const alimento = document.getElementById('alimento_preferido').value.trim();
      const comentarios = document.getElementById('comentarios').value.trim();

      let preferenciasMarcadas = document.querySelectorAll('input[name="preferencias[]"]:checked').length;
      let comportamentosMarcados = document.querySelectorAll('input[name="comportamentos[]"]:checked').length;

      if (nome === '' || email === '') {
        Swal.fire({
          icon: 'warning',
          title: 'Campos obrigatórios!',
          text: 'Por favor, preencha seu nome e email.'
        });
        return;
      }

      const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!emailValido) {
        Swal.fire({
          icon: 'error',
          title: 'Email inválido',
          text: 'Por favor, insira um e-mail válido.'
        });
        return;
      }

      if (preferenciasMarcadas === 0) {
        Swal.fire({
          icon: 'info',
          title: 'Preferência não selecionada',
          text: 'Selecione pelo menos uma preferência do seu gato.'
        });
        return;
      }

      if (comportamentosMarcados === 0) {
        Swal.fire({
          icon: 'info',
          title: 'Comportamento não selecionado',
          text: 'Selecione pelo menos um comportamento do seu gato.'
        });
        return;
      }

      if (comentarios !== '' && comentarios.length < 5) {
        Swal.fire({
          icon: 'question',
          title: 'Comentário muito curto',
          text: 'Se quiser deixar um comentário, escreva pelo menos 5 caracteres.'
        });
        return;
      }

      // Se tudo estiver OK
      Swal.fire({
        icon: 'success',
        title: 'Tudo certo!',
        text: 'Formulário validado com sucesso. Enviando...',
        confirmButtonText: 'OK'
      }).then(() => {
        form.submit(); // Agora envia o formulário
      });
    });
  });



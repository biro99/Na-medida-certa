document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    const btnCadastro = document.getElementById('btn-cadastro');
  
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        const usuario = document.getElementById('usuario').value.trim();
        const senha = document.getElementById('senha').value;
        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        const user = usuarios.find(u => u.usuario === usuario && u.senha === senha);
        if (user) {
          alert('Login realizado com sucesso!');
          // window.location.href = 'index.html'; // Redirecione para a página principal se quiser
        } else {
          alert('Usuário ou senha inválidos!');
        }
      });
    }
  
    if (btnCadastro) {
      btnCadastro.addEventListener('click', function() {
        window.location.href = 'cadastro.html';
      });
    }
  });
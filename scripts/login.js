document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    const btnCadastro = document.getElementById('btn-cadastro');
  
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        const usuario = document.getElementById('usuario').value.trim();
        const senha = document.getElementById('senha').value;
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        const usuarioEncontrado = usuarios.find(u => u.usuario === usuario && u.senha === senha);
        if (usuarioEncontrado) {
          alert('Login realizado com sucesso!');
          // Redirecionar para a página principal após login
          window.location.href = 'home.html'; // Substitua por sua página principal
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
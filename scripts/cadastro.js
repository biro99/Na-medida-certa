document.querySelector('.cadastro-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const dataNascimento = document.getElementById('data-nascimento').value;
  const usuario = document.getElementById('usuario').value.trim();
  const senha = document.getElementById('senha').value;
  const confirmar = document.getElementById('confirmar-senha').value;

  // Calcula idade a partir da data de nascimento
  const hoje = new Date();
  const nascimento = new Date(dataNascimento);
  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const m = hoje.getMonth() - nascimento.getMonth();
  if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) {
    idade--;
  }

  if (idade < 17) {
    alert('Você precisa ter 17 anos ou mais para se cadastrar.');
    return;
  }

  let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  if (usuarios.some(u => u.usuario === usuario)) {
    alert('Nome de usuário já cadastrado!');
    return;
  }

  if (senha !== confirmar) {
    alert('As senhas não coincidem!');
    return;
  }

  usuarios.push({ usuario, senha });
  localStorage.setItem('usuarios', JSON.stringify(usuarios));

  alert('Cadastro realizado com sucesso!');
  window.location.href = 'index.html'; // Redireciona para o login
});

// Botão de login (exemplo: redireciona para index.html ou login.html)
document.getElementById('btn-login').addEventListener('click', function() {
  window.location.href = 'index.html'; // ou 'index.html' se for esse o nome da página de login
});
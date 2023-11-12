class User {
    constructor(nomeSobrenome, username, email, senha, dataNascimento) {
      this.nomeSobrenome = nomeSobrenome;
      this.username = username;
      this.email = email;
      this.senha = senha;
      this.dataNascimento = dataNascimento;
      this.isLoggedIn = false;
    }

    // Método para fazer login
    login() {
      this.isLoggedIn = true;
      console.log(`${this.username} fez login`);
    }

    // Método para fazer logout
    logout() {
      this.isLoggedIn = false;
      console.log(`${this.username} fez logout`);
    }
  }

  // Função para registrar um novo usuário
  function registrarUsuario() {
    const nomeSobrenome = document.getElementById('nomeSobrenome').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const dataNascimento = document.getElementById('dataNascimento').value;

    // Criar uma instância de User com os dados do formulário
    const novoUsuario = [
    new User(
        nomeSobrenome, 
        username,
        email, 
        senha, 
        dataNascimento
        ),
    ];

    // Aqui, você pode salvar o novo usuário, por exemplo, em um banco de dados ou localStorage

    console.log('Novo usuário registrado:', novoUsuario);
  }

  // Função para fazer login
  function loginUsuario() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Aqui, você pode verificar as credenciais em um banco de dados ou localStorage
    // Por simplicidade, vou criar uma instância de User com as credenciais fornecidas
    const usuarioExistente = new User('', '', email, senha, '');

    // Verificar se as credenciais são válidas
    if (/* lógica de verificação de credenciais */) {
      usuarioExistente.login();
      console.log(`${usuarioExistente.username} fez login com sucesso!`);
      window.location.href = '/src/pages/user.html';
    } else {
      console.log('Credenciais inválidas. Falha no login.');
    }
  }
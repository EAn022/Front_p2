
// Adaptação das cores do acordeon na landing page

    const accordionButtons = document.querySelectorAll('.accordion-button');
    
    // Adiciona o evento de clique em cada botão
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove a classe 'active' de todos os botões
            accordionButtons.forEach(b => b.classList.remove('active'));
            
            // Adiciona a classe 'active' ao botão clicado
            this.classList.add('active');
        });
    });


/* -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ */



// Validação do login
    // Referências aos elementos do formulário
    const emailInput = document.getElementById("email");
    const senhaInput = document.getElementById("senha");
    const entrarButton = document.getElementById("entrar");

    // Função para habilitar ou desabilitar o botão "Entrar"
    function verificarCampos() {
        if (emailInput.value && senhaInput.value) {
            entrarButton.disabled = false;
        } else {
            entrarButton.disabled = true;
        }
    }

    // Validação do formulário e verificação de e-mail e senha
    entrarButton.addEventListener("click", function() {
        const email = emailInput.value;
        const senha = senhaInput.value;

        // Condições de validação: e-mail e senha devem ser "usuario"
        if (email === "user@gmail.com" && senha === "user") {
            // alert("Login realizado com sucesso!");
            // Aqui você pode redirecionar o usuário para outra página, por exemplo:
            window.location.href = "home.html";
        } else {
            alert("E-mail ou senha inválidos!");
        }
    });

    // Adicionar ouvintes de evento para verificar os campos
    emailInput.addEventListener("input", verificarCampos);
    senhaInput.addEventListener("input", verificarCampos);


/* -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ */


// Bloquear reserva


    function reservarLivro(botao) {
        alert("O livro foi reservado");
        botao.disabled = true; 
        botao.innerText = "Reservado"; 
    }




/* -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ */


function editarPerfil(){
    window.location.href = " edit-profile.html";
}

/* -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ */

// editar perfil

f



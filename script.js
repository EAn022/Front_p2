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
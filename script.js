document.addEventListener('DOMContentLoaded', () => {
    // 1. Efeito de entrada suave nos cards principais
    const cards = document.querySelectorAll('.link-card, .project-mini-card');
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(10px)';
        card.style.transition = 'all 0.4s ease-out';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * (index + 1));
    });

    // 2. Lógica dos Modais
    const modalButtons = document.querySelectorAll('.clickable');
    const closeButtons = document.querySelectorAll('.close-modal');
    const modals = document.querySelectorAll('.modal');

    modalButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            const modal = document.getElementById(targetId);
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Previne scroll ao abrir modal
            }
        });
    });

    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });

    // Fechar ao clicar fora do conteúdo do modal
    window.addEventListener('click', (e) => {
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });

    // 3. Log de sucesso (vibe dev)
    console.log('%c Samuel Waltrich %c Dev Links 2026 Loaded ', 'background: #fff; color: #000; font-weight: bold;', 'background: #333; color: #fff;');
});

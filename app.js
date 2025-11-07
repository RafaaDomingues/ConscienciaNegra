const button = document.getElementById('back-to-top-button');

const ChegarAoTopo = () => {
    const scrollDuration = 600; // Duração em milissegundos
    const scrollStep = -window.scrollY / (scrollDuration / 15);
    
    const scrollInterval = setInterval(() => {
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
}

// Mostrar/esconder o botão conforme o scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        button.style.display = 'flex';
    } else {
        button.style.display = 'none';
    }
});

// Adicionar evento de clique ao botão
button.addEventListener('click', ChegarAoTopo);
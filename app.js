const button = document.getElementById('back-to-top-button');

const ChegarAoTopo = () => {
    const scrollDuration = 100; // Deixar mais suave
    const scrollStep = -window.scrollY / (scrollDuration / 15);
    
    const scrollInterval = setInterval(() => {
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
}


window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        button.style.display = 'flex';
    } else {
        button.style.display = 'none';
    }
});


button.addEventListener('click', ChegarAoTopo);
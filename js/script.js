const mobileBtn = document.getElementById('btn-mobile');

document.querySelector('textarea').value = "";

const toggleMenu = (e) => {
    if (e.type == 'touchstart') {
        e.preventDefault();
    }

    const nav = document.getElementById('nav');

    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    e.currentTarget.setAttribute('aria-expanded', active);
    active ? e.currentTarget.setAttribute('aria-label', 'Fechar Menu')
        : e.currentTarget.setAttribute('aria-label', 'Abrir Menu')
}

mobileBtn.addEventListener('click', toggleMenu);
mobileBtn.addEventListener('touchstart', toggleMenu);

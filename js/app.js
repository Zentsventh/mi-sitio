// ==========================================================================
// PEPSI INTERACTIVE APP JS
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Pepsi Web Experience Loaded!');

    // Flavor switcher logic
    const heroImg = document.getElementById('hero-product');
    const flavorTitle = document.getElementById('flavor-title');
    const flavorDesc = document.getElementById('flavor-desc');

    const flavors = {
        original: {
            img: 'img/pepsi.jpg',
            title: 'Sabor Original',
            desc: 'El clásico e inconfundible sabor de Pepsi con el toque perfecto de efervescencia y frescura extrema.'
        },
        zero: {
            img: 'img/pepsi_zero.jpg',
            title: 'Pepsi Zero Sugar',
            desc: 'Todo el sabor máximo de Pepsi, cero azúcar. La experiencia definitiva para acompañar tu día sin límites.'
        }
    };

    window.switchFlavor = function(flavorKey, btnElement) {
        if (!flavors[flavorKey] || !heroImg) return;

        // Active button styles
        document.querySelectorAll('.flavor-btn').forEach(btn => btn.classList.remove('active'));
        if (btnElement) btnElement.classList.add('active');

        // Smooth transition effect
        heroImg.style.opacity = '0';
        heroImg.style.transform = 'scale(0.9) translateY(10px)';

        setTimeout(() => {
            heroImg.src = flavors[flavorKey].img;
            if (flavorTitle) flavorTitle.textContent = flavors[flavorKey].title;
            if (flavorDesc) flavorDesc.textContent = flavors[flavorKey].desc;

            heroImg.style.opacity = '1';
            heroImg.style.transform = 'scale(1) translateY(0px)';
        }, 300);
    };

    // Buy Button Notification
    window.saludar = function() {
        alert('¡Gracias por elegir Pepsi! Redirigiendo a la tienda oficial...');
    };
});

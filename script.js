document.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;

    // Selección de todas las imágenes con la clase 'image'
    const images = document.querySelectorAll('.image');
    images.forEach((image) => {
        let xMovement = 0; // Movimiento en el eje X
        let yMovement = 0; // Movimiento en el eje Y

        // Determina el desplazamiento según la imagen
        if (image.classList.contains('img-1')) {
            xMovement = (clientX - window.innerWidth / 2) * 0.05; // 5% del movimiento del mouse
            yMovement = (clientY - window.innerHeight / 2) * 0.03; // 3% del movimiento del mouse
        } else if (image.classList.contains('img-2')) {
            xMovement = (clientX - window.innerWidth / 2) * 0.1; // 10% del movimiento del mouse
            yMovement = (clientY - window.innerHeight / 2) * 0.07; // 7% del movimiento del mouse
        } else if (image.classList.contains('img-3')) {
            xMovement = (clientX - window.innerWidth / 2) * 0.2; // 20% del movimiento del mouse
            yMovement = (clientY - window.innerHeight / 2) * 0.1; // 10% del movimiento del mouse
        } else if (image.classList.contains('img-4')) {
            xMovement = (clientX - window.innerWidth / 2) * 0.3; // 30% del movimiento del mouse
            yMovement = (clientY - window.innerHeight / 2) * 0.2; // 20% del movimiento del mouse
        } else if (image.classList.contains('img-5')) {
            xMovement = (clientX - window.innerWidth / 2) * 0.15; // 15% del movimiento del mouse
            yMovement = (clientY - window.innerHeight / 2) * 0.1; // 10% del movimiento del mouse
        } else if (image.classList.contains('img-6')) {
            xMovement = (clientX - window.innerWidth / 2) * 0.25; // 25% del movimiento del mouse
            yMovement = (clientY - window.innerHeight / 2) * 0.15; // 15% del movimiento del mouse
        } else if (image.classList.contains('img-7')) {
            xMovement = (clientX - window.innerWidth / 2) * -0.1; // Movimiento inverso
            yMovement = (clientY - window.innerHeight / 2) * -0.05; // Movimiento inverso
        }

        // Aplica la transformación a cada imagen
        image.style.transform = `translate(${xMovement}px, ${yMovement}px) rotate(${image.style.transform.match(/rotate\(([^)]+)\)/)?.[1] || '0deg'})`;
    });

    // Lógica de movimiento para cada letra
    const letters = document.querySelectorAll('.letter');
    letters.forEach((letter) => {
        let xMovement = 0; // Movimiento en el eje X
        let yMovement = 0; // Movimiento en el eje Y

        // Determina el desplazamiento según la letra
        if (letter.classList.contains('letter-c')) {
            xMovement = (clientX - window.innerWidth / 2) * 0.1; // 10% del movimiento del mouse
            yMovement = (clientY - window.innerHeight / 2) * 0.05; // 5% del movimiento del mouse
        } else if (letter.classList.contains('letter-d')) {
            xMovement = (clientX - window.innerWidth / 2) * 0.1;
            yMovement = (clientY - window.innerHeight / 2) * 0.1; // 10% del movimiento del mouse
        } else if (letter.classList.contains('letter-i')) {
            xMovement = (clientX - window.innerWidth / 2) * 0.2; // 20% del movimiento del mouse
            yMovement = (clientY - window.innerHeight / 2) * 0.2; // 20% del movimiento del mouse
        } else if (letter.classList.contains('letter-3') || letter.classList.contains('letter-6') || letter.classList.contains('letter-9')) {
            xMovement = (clientX - window.innerWidth / 2) * 0.3; // 30% del movimiento del mouse
            yMovement = (clientY - window.innerHeight / 2) * 0.3; // 30% del movimiento del mouse
        } else if (letter.classList.contains('letter-o') || letter.classList.contains('letter-g')) {
            xMovement = (clientX - window.innerWidth / 2) * -0.1; // Movimiento negativo
            yMovement = (clientY - window.innerHeight / 2) * -0.05; // Movimiento negativo
        }

        // Aplica la transformación a cada letra
        letter.style.transform = `translate(${xMovement}px, ${yMovement}px)`;
    });
});

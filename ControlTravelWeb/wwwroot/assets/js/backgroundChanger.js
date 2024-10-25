const backgrounds = [
    '../images/heading-bg.jpg',
    '../images/course-02.jpg',
    '../images/course-03.jpg'
];

let index = 0;

function changeBackground() {
    const section = document.querySelector('.heading-page');
    if (section) {
        section.style.backgroundImage = `url(${backgrounds[index]})`;
        index = (index + 1) % backgrounds.length;
    }
}

function startBackgroundChange() {
    changeBackground(); // Cambia al fondo inicial
    setInterval(changeBackground, 4000); // Cambia cada 4 segundos
}

document.addEventListener('DOMContentLoaded', function () {
    fetch('default/header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;

            const headerText = document.querySelector('#header-text');
            headerText.innerText = 'Especialistas em negócios e plataformas de tecnologia de CX';

            changeImage();
        });

    fetch('default/footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('footer').innerHTML = data;
        });
});

const images = [
    '../images/home-main-banner1.png',
    '../images/home-main-banner2.png',
    '../images/home-main-banner3.png'
];

const texts = [
    'Especialistas em negócios e plataformas de tecnologia de CX',
    '10 Most Promising Digital Experience Solutions Provider In Latin America',
    'Oracle CX Partner Of The Year'
];

let index = 0;

function changeImage() {
    document.getElementById('header').style.backgroundImage = `url(${images[index]})`;
    document.getElementById('header-text').innerText = texts[index];
    index = (index + 1) % images.length;
}

setInterval(changeImage, 5000);
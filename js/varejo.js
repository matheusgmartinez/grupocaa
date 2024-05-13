document.addEventListener('DOMContentLoaded', function () {
    fetch('default/header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;

            const headerText = document.querySelector('#header-text');
            headerText.innerText = 'Varejo';
            const image = document.getElementById('header');
            image.style.backgroundImage = `url(../images/varejo-main-banner.jpeg)`
            document.getElementById("header-buttons").style.display = "none";
        });

    fetch('default/footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('footer').innerHTML = data;
        });
});
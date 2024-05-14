document.addEventListener('DOMContentLoaded', function () {
    fetch('default/header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;

            const headerText = document.querySelector('#header-text');
            headerText.innerText = 'Contato';
            const image = document.getElementById('header');
            image.style.backgroundImage = `url(../images/contato-main-banner.jpeg)`
            document.getElementById("header-buttons").style.display = "none";

        });

    fetch('default/footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('footer').innerHTML = data;
        });
    fetch('components/contact-form.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('main').innerHTML = data;
            var script = document.createElement('script')
            script.src = '../js/contactForm.js'
            document.querySelector('body').appendChild(script)
        });
});


// Fechar o dropdown ao clicar fora dele
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === 'block') {
                openDropdown.style.display = 'none';
            }
        }
    }
}

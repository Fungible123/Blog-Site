// When the Home button is clicked

const homeBtn = function() {
    const home = document.querySelector('.home-btn');
    const leftMenu = document.querySelector('.left-menu');
    const rightMenu = document.querySelector('.right-menu');

    home.addEventListener('click', function(e) {
        e.preventDefault();
        leftMenu.classList.toggle('open');
        rightMenu.classList.toggle('open');
    });

    window.addEventListener('click', function (e) {

        if (e.target !== home && e.target.parentNode !== home) {
            leftMenu.classList.remove('open');
            rightMenu.classList.remove('open');
        }
    });
}
homeBtn();


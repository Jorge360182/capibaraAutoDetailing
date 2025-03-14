(function () {
    let navbar = document.querySelector('#navbar');
    let main = document.querySelector('main');
    let hamburger = document.querySelector('#hamburger');
    let navbarHeight = navbar.getBoundingClientRect().height;
    let breakpoint = main.offsetTop - navbarHeight;
    let prevScrollPos = window.scrollY;
    let isFixed = false;

    function onScroll() {
        let currentScrollPos = window.scrollY;

        if (currentScrollPos >= breakpoint && !isFixed) {
            navbar.classList.remove('open');
            navbar.classList.add('navbar-fixed');
            isFixed = true;
        } else if (currentScrollPos < breakpoint && isFixed) {
            navbar.classList.remove('navbar-fixed');
            hamburger.classList.remove('open');
            isFixed = false;
        }

        if (currentScrollPos > prevScrollPos && isFixed) {
            navbar.classList.remove('open');
            navbar.classList.add('navbar-hidden');
            hamburger.classList.remove('open');
        } else if (currentScrollPos < prevScrollPos && isFixed && currentScrollPos > breakpoint) {
            navbar.classList.remove('navbar-hidden');
            
        }

        prevScrollPos = currentScrollPos;
    }

    document.addEventListener('scroll', onScroll);
})();

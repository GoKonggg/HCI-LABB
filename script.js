document.addEventListener('DOMContentLoaded', () => {
    const navUnderlineElement = document.querySelector('.nav-left .underline');
    const navLinksForUnderline = document.querySelectorAll('.nav-left a');
    const navContainerForUnderline = document.querySelector('.nav-left');

    function moveUnderline(link) {
        if (navUnderlineElement && navContainerForUnderline && link) {
            const linkRect = link.getBoundingClientRect();
            const containerRect = navContainerForUnderline.getBoundingClientRect();
            
            let targetLeft = linkRect.left - containerRect.left;
            let targetWidth = linkRect.width;

            if(window.getComputedStyle(navContainerForUnderline).flexDirection === 'column') {
                navUnderlineElement.style.opacity = '0';
                return; 
            }

            navUnderlineElement.style.left = `${targetLeft}px`;
            navUnderlineElement.style.width = `${targetWidth}px`;
            navUnderlineElement.style.opacity = '1';
        } else if (navUnderlineElement) {
            navUnderlineElement.style.opacity = '0';
        }
    }

    if (navLinksForUnderline.length > 0 && navContainerForUnderline && navUnderlineElement) {
        navLinksForUnderline.forEach(link => {
            link.addEventListener('mouseenter', () => {
                if (!link.classList.contains('active') && window.getComputedStyle(navContainerForUnderline).flexDirection !== 'column') {
                    const linkRect = link.getBoundingClientRect();
                    const containerRect = navContainerForUnderline.getBoundingClientRect();
                    navUnderlineElement.style.left = `${linkRect.left - containerRect.left}px`;
                    navUnderlineElement.style.width = `${linkRect.width}px`;
                    navUnderlineElement.style.opacity = '0.5';
                }
            });

            link.addEventListener('mouseleave', () => {
                if(window.getComputedStyle(navContainerForUnderline).flexDirection === 'column') return;
                const activeLink = navContainerForUnderline.querySelector('a.active');
                if (activeLink) {
                    moveUnderline(activeLink);
                } else {
                    navUnderlineElement.style.opacity = '0';
                }
            });

            link.addEventListener('click', function() {
                sessionStorage.setItem('lastActiveNcHref', this.getAttribute('href'));
                navLinksForUnderline.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
                if(window.getComputedStyle(navContainerForUnderline).flexDirection !== 'column') {
                     moveUnderline(this);
                }
            });
        });

        let activeLinkFoundOnLoad = false;
        const lastActiveHrefFromStorage = sessionStorage.getItem('lastActiveNcHref');
        const currentPathFileName = window.location.pathname.split('/').pop() || 'index2.html';

        if (lastActiveHrefFromStorage) {
            navLinksForUnderline.forEach(link => {
                if (link.getAttribute('href') === lastActiveHrefFromStorage) {
                    link.classList.add('active');
                    activeLinkFoundOnLoad = true;
                }
            });
        }

        if (!activeLinkFoundOnLoad) {
            navLinksForUnderline.forEach(link => {
                if (link.getAttribute('href') === currentPathFileName) {
                    link.classList.add('active');
                    activeLinkFoundOnLoad = true;
                }
            });
        }
        
        if (activeLinkFoundOnLoad && window.getComputedStyle(navContainerForUnderline).flexDirection !== 'column') {
            const activeLinkElement = navContainerForUnderline.querySelector('a.active');
            if (activeLinkElement) {
                 requestAnimationFrame(() => moveUnderline(activeLinkElement));
            }
        } else if (window.getComputedStyle(navContainerForUnderline).flexDirection !== 'column') {
             navUnderlineElement.style.opacity = '0';
        }
    }
});
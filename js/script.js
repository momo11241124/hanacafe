
const links = document.querySelectorAll('.toggleLink');
        links.forEach(link => {
            link.addEventListener('click', function() {
                document.getElementById('menu-btn-check').checked = false;
            });
        });
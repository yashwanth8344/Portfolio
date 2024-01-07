document.addEventListener('DOMContentLoaded', function() {
    const iconMenu = document.querySelector('.icon-menu');
    const sidebar = document.getElementById('sidebar');

    iconMenu.addEventListener('click', function() {
        if (sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        } else {
            sidebar.classList.add('active');
        }
    });
});

(function() {
    document.addEventListener('DOMContentLoaded', () => {
        const menu_toggler = document.getElementById('menuToggler');
        const menu_content = document.getElementById('menuContent');
        
        function toggleMenuClass() {
            menu_content.classList.toggle('open');
            console.log('toggled')
        }
        
        menu_toggler.addEventListener('click', toggleMenuClass);
        
        console.log('loaded')
    });
})();
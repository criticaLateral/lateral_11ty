(function() {
    document.addEventListener('DOMContentLoaded', () => {
        const menu_toggler = document.getElementById('menuToggler');
        const menu_content = document.getElementById('menuContent');
        const body = document.getElementById('body');
        const header = document.getElementById('header');
        const scroll = document.getElementById('scroll');
        
        function openMenu(){

            setTimeout(function(){
                menu_content.classList.add('open');
            }, 300);

            body.classList.add('locked');
            header.classList.add('open');
            scroll.classList.add('open');
          }

        function closeMenu(){

            setTimeout(function(){
                body.classList.remove('locked');
                header.classList.remove('open');
            }, 300)

            setTimeout(function(){
                scroll.classList.remove('open');
            }, 200)

            menu_content.classList.remove('open');
        }
        
        menu_toggler.addEventListener('click', function(){
            var item = body.classList.contains('locked')
            console.log('clicked');
            if ( item ){
                closeMenu()
            } else {
                openMenu()
            }
        });

    });
})();
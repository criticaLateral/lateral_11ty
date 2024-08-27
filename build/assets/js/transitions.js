const container = document.getElementById('body');

barba.init({
  transitions: [{
    name: 'opacity-transition',
    enter() {
      container.classList.remove('locked');
      anime({
        targets: body,
        opacity: [0,1],
        easing: 'easeInOutQuad',
        duration: 600
      });
    }
  }]
});
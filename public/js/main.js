console.log('JS Loaded');

let $menuToggle = $('#menu-toggle')
let $mainNavigation = $('#main-navigation')

    $menuToggle.on('click', () => {
      console.log('clicked')
      $mainNavigation.toggleClass('open')
      $menuToggle.toggleClass('active')
    })
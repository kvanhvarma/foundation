$(function() {
  // Set the negative margin on the top menu for slide-menu pages
  var $selector1 = $('#topMenu');
  if ($selector1.length > 0) {
    $selector1.css("margin-top", $selector1.height() * -1);
  }

  // Watch for clicks to show the sidebar
  $selector2 = $('#sidebarButton');
  if ($selector2.length > 0) {
    $('#sidebarButton').on('click', function(e){
      e.preventDefault();
      $('body').toggleClass('active');
    });
  }

  // Watch for clicks to show the menu for slide-menu pages
  $selector3 = $('#menuButton');
  if ($selector3.length > 0)  {
    $('#menuButton').on('click', function(e){
      e.preventDefault();
      $('body').toggleClass('active-menu');
    });
  }

  // Adjust sidebars and sizes when resized
  $(window).resize(function() {
    $('body').removeClass('active');
    var $selector4 = $('#topMenu');
    if ($selector4.length > 0) {
      $selector4.css("margin-top", $selector4.height() * -1);
    }
  });

  // Switch panels for the paneled nav on mobile
  $selector5 = $('#switchPanels');
  if ($selector5.length > 0)  {
    $('#switchPanels dd').on('click', function(e) {
      e.preventDefault();
      var switchToPanel = $(this).children('a').attr('href'),
          switchToIndex = $(switchToPanel).index();
      $(this).toggleClass('active').siblings().removeClass('active');
      $(switchToPanel).parent().css("left", (switchToIndex * (-100) + '%'));
    });
  }

  $('#nav li a').on('click', function(e) {
    e.preventDefault();
    var href = $(this).attr('href'),
      $target = $(href);
    $('html, body').animate({scrollTop : $target.offset().top}, 300);
  });
});

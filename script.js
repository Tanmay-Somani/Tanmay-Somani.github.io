$(document).ready(function() {
  // Hamburger menu toggle
  $('.navbar-toggler').click(function() {
    $('.navbar-collapse').toggleClass('show');
  });

  // Smooth scrolling for navigation links
  $('a[href^="#"]').click(function(e) {
    e.preventDefault();

    var target = $(this).attr('href');
    var offset = $(target).offset().top;

    $('html, body').animate({
      scrollTop: offset
    }, 500);
  });

  // Apply color theme to navigation bar
  var colorTheme = {
    primary: '#F64C72',
    secondary: '#99738E',
    active: '#2F2FA2'
  };

  $('.navbar').css('background-color', colorTheme.primary);
  $('.navbar-brand, .navbar-nav .nav-link').css('color', colorTheme.secondary);
  $('.navbar-toggler').css('border-color', colorTheme.secondary);
  $('.navbar-toggler-icon').css('background-color', colorTheme.secondary);
  $('.navbar-nav .nav-link').hover(function() {
    $(this).css('color', colorTheme.active);
  }, function() {
    $(this).css('color', colorTheme.secondary);
  });
});

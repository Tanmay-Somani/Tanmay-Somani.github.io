$(document).ready(function() {
  $('.navbar-toggler').click(function() {
    $('.navbar-collapse').toggleClass('show');
  });
  $('a[href^="#"]').click(function(e) {
    e.preventDefault();

    var target = $(this).attr('href');
    var offset = $(target).offset().top;

    $('html, body').animate({
      scrollTop: offset
    }, 500);
  });
  var colorTheme = {
    primary: '#7C80F2',
    secondary: '#553D67',
    active: '#2F2FA2'
  };
  function applyTheme() {
    $('.navbar').css('background-color', colorTheme.primary);
    $('.navbar-brand, .navbar-nav .nav-link').css('color', colorTheme.secondary);
    $('.navbar-toggler').css('border-color', colorTheme.secondary);
    $('.navbar-toggler-icon').css('background-color', colorTheme.secondary);
    $('.navbar-nav .nav-link').hover(function() {
      $(this).css('color', colorTheme.active);
    }, function() {
      $(this).css('color', colorTheme.secondary);
    });
  }
  applyTheme();
  $('.navbar-toggler').click(function() {
    applyTheme();
  });
  var currentYear = new Date().getFullYear();
  var birthYear = 2003;
  var age = currentYear - birthYear;
  $('#age').text(age);
});

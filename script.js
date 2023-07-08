$(document).ready(function() {
  // Hamburger menu toggle
  $('.navbar-toggler').click(function() {
    $('.navbar-collapse').toggleClass('show');
    applyTheme();
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

  // Calculate age
  var currentYear = new Date().getFullYear();
  var birthYear = 2003; // Replace with your birth year
  var age = currentYear - birthYear;
  $('#age').text(age);

  // Collapsible form
  $('.collapsible-btn').click(function() {
    var content = $(this).next();
    $(this).toggleClass('active');
    content.slideToggle();
  });

  // Form submission
  $('#contact-form').submit(function(event) {
    event.preventDefault();
    var formData = $(this).serialize();
    $.ajax({
      type: 'POST',
      url: $(this).attr('action'),
      data: formData,
      dataType: 'json',
      success: function(response) {
        if (response.status === 'success') {
          $('#contact-form').hide();
          $('#success-message').show();
        } else {
          $('#error-message').show();
        }
      },
      error: function() {
        $('#error-message').show();
      }
    });
  });
});

$(document).ready(function() {
  // Navbar toggler
  $('.navbar-toggler').click(function() {
    $('.navbar-collapse').toggleClass('show');
    applyTheme();
  });

  // Close menu on outside click
  $(document).click(function(e) {
    var target = e.target;
    if (!$('.navbar-toggler').is(target) && !$('.navbar-collapse').is(target) && $('.navbar-collapse').hasClass('show')) {
      $('.navbar-toggler').trigger('click');
    }
  });

  // Smooth scroll to section
  $('a[href^="#"]').click(function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
    var offset = $(target).offset().top;
    $('html, body').animate({
      scrollTop: offset
    }, 500, function() {
      // Close menu after scroll on small screens
      if ($(window).width() < 768) {
        $('.navbar-toggler').trigger('click');
      }
    });
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

    // Change button text when clicked
    if ($(this).hasClass('active')) {
      $(this).html('<i class="fas fa-chevron-up"></i>'); // Upward arrow icon
    } else {
      $(this).html('Send me a Message');
    }
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

  // Progress bar
  $(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    var documentHeight = $(document).height();
    var windowHeight = $(window).height();
    var scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
    $("#progress-bar").css("width", scrollPercentage + "%");
  });
});

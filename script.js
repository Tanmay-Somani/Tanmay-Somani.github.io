$(document).ready(function () {
  $(".navbar-toggler").click(function () {
    $(".navbar-collapse").toggleClass("show");
    toggleNavbarColors();
  });

  $(document).click(function (event) {
    var target = event.target;
    if (
      !$(".navbar-toggler").is(target) &&
      !$(".navbar-collapse").is(target) &&
      $(".navbar-collapse").hasClass("show")
    ) {
      $(".navbar-toggler").trigger("click");
    }
  });

  $('a[href^="#"]').click(function (event) {
    event.preventDefault();
    var target = $(this).attr("href");
    var offset = $(target).offset().top;
    $("html, body").animate(
      {
        scrollTop: offset,
      },
      500,
      function () {
        if ($(window).width() < 768) {
          $(".navbar-toggler").trigger("click");
        }
      }
    );
  });

  var colors = {
    primary: "#7C80F2",
    secondary: "#553D67",
    active: "#2F2FA2",
  };

  function toggleNavbarColors() {
    $(".navbar").css("background-color", colors.primary);
    $(".navbar-brand, .navbar-nav .nav-link").css("color", colors.secondary);
    $(".navbar-toggler").css("border-color", colors.secondary);
    $(".navbar-toggler-icon").css("background-color", colors.secondary);

    $(".navbar-nav .nav-link").hover(
      function () {
        $(this).css("color", colors.active);
      },
      function () {
        $(this).css("color", colors.secondary);
      }
    );
  }

  toggleNavbarColors();

  var currentYear = new Date().getFullYear();
  var startYear = 2003;
  var yearsOfExperience = currentYear - startYear;
  $("#age").text(yearsOfExperience);

  $(".collapsible-btn").click(function () {
    var content = $(this).next();
    $(this).toggleClass("active");
    content.slideToggle();
    if ($(this).hasClass("active")) {
      $(this).html('<i class="fas fa-chevron-up"></i>');
    } else {
      $(this).html("Send me a Message");
    }
  });

  $("#contact-form").submit(function (event) {
    event.preventDefault();
    var formData = $(this).serialize();
    $.ajax({
      type: "POST",
      url: $(this).attr("action"),
      data: formData,
      dataType: "json",
      success: function (response) {
        if (response.status === "success") {
          $("#contact-form").hide();
          $("#success-message").show();
        } else {
          $("#error-message").show();
        }
      },
      error: function () {
        $("#error-message").show();
      },
    });
  });

  $(window).scroll(function () {
    var scrollPercentage =
      ($(window).scrollTop() /
        ($(document).height() - $(window).height())) *
      100;
    $("#progress-bar").css("width", scrollPercentage + "%");
  });
});

const icons = document.querySelectorAll('.icon-link');

icons.forEach(icon => {
  icon.addEventListener('click', () => {
    const alt = icon.querySelector('img').alt;
    switch (alt) {
      case 'Github':
        window.open('https://github.com/Tanmay-Somani', '_blank');
        break;
      case 'Twitter':
        window.open('https://twitter.com/TSVA0', '_blank');
        break;
      case 'Medium':
        window.open('https://medium.com/@tanmaysomani2003', '_blank');
        break;
      case 'Gmail':
        window.open('mailto:tanmaysomani2003@gmail.com', '_blank');
        break;
      case 'LinkedIn':
        window.open('https://www.linkedin.com/in/tcode/', '_blank');
        break;
      default:
        break;
    }
  });
});


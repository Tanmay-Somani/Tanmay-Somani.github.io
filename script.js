$(document).ready(function() {
    const colors = {
      primary: "#eff203",
      secondary: "#553D67",
      active: "#2F2FA2",
    };
  
    function toggleNavbarColors() {
      $(".navbar-toggler").click(function () {
        $(".navbar-collapse").toggleClass("show");
      });
    }

    function scrollSmoothTo(target) {
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        500,
        function() {
          if ($(window).width() < 768) {
            $(".navbar-toggler").trigger("click");
          }
        }
      );
    }
  
    $(".navbar-toggler").click(function() {
      $(".navbar-collapse").toggleClass("show");
      toggleNavbarColors();
    });
  
    $(document).click(function(event) {
      const target = event.target;
      if (
        !$(".navbar-toggler").is(target) &&
        !$(".navbar-collapse").is(target) &&
        $(".navbar-collapse").hasClass("show")
      ) {
        $(".navbar-toggler").trigger("click");
      }
    });
  
    $('a[href^="#"]').click(function(event) {
      event.preventDefault();
      const target = $(this).attr("href");
      scrollSmoothTo(target);
    });
  
    toggleNavbarColors();
  
    const currentYear = new Date().getFullYear();
    const startYear = 2003;
    const yearsOfExperience = currentYear - startYear;
    $("#age").text(yearsOfExperience);
  
    $(".collapsible-btn").click(function() {
      const content = $(this).next();
      $(this).toggleClass("active");
      content.slideToggle();
      if ($(this).hasClass("active")) {
        $(this).html('<i class="fas fa-chevron-up"></i>');
      } else {
        $(this).html("Send me a Message");
      }
    });
  
    $("#contact-form").submit(function(event) {
      event.preventDefault();
      const formData = $(this).serialize();
      $.ajax({
        type: "POST",
        url: $(this).attr("action"),
        data: formData,
        dataType: "json",
        success: function(response) {
          if (response.status === "success") {
            $("#contact-form").hide();
            $("#success-message").show();
          } else {
            $("#error-message").show();
          }
        },
        error: function() {
          $("#error-message").show();
        },
      });
    });
  
    $(window).scroll(function() {
        const scrollTop = $(window).scrollTop();
        const documentHeight = $(document).height();
        const windowHeight = $(window).height();
        const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
        $("#progress-bar").css("width", scrollPercentage.toFixed(2) + "%"); 
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
  });
  
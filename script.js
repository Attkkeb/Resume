(function() {
  document.querySelectorAll(".menu-item").forEach(function(element) {
    element.addEventListener("click", function() {
      document.getElementsByTagName("BODY")[0].classList.remove("isMenuOpen");
    });
  });

  document.getElementById("menuMobile").addEventListener("click", function() {
    document.getElementsByTagName("BODY")[0].classList.toggle("isMenuOpen");
  });

  window.addEventListener("load", function() {
    let previousScrollTop = window.scrollY;
    const menu = document.getElementById("menu");

    const handleMenuVisibilityOnScroll = function() {
      let currentScrollTop = window.scrollY;

      if (currentScrollTop > 200) {
        if (currentScrollTop > previousScrollTop) {
          menu.classList.add("menu-hidden");
        } else {
          menu.classList.remove("menu-hidden");
        }
      }

      previousScrollTop = currentScrollTop;
    };
    window.addEventListener("scroll", handleMenuVisibilityOnScroll);
  });
})();

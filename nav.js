document.addEventListener("DOMContentLoaded", function () {
  var dropdowns = document.querySelectorAll(".dropdown, .dropdownHERE");

  function closeDropdown(dropdown) {
    dropdown.classList.remove("is-open");
    var button = dropdown.querySelector(".dropbtn, .dropbtnHERE");
    if (button) button.setAttribute("aria-expanded", "false");
  }

  dropdowns.forEach(function (dropdown) {
    var button = dropdown.querySelector(".dropbtn, .dropbtnHERE");
    if (!button) return;

    button.type = "button";
    button.setAttribute("aria-haspopup", "true");
    button.setAttribute("aria-expanded", "false");

    button.addEventListener("click", function (event) {
      event.stopPropagation();
      var shouldOpen = !dropdown.classList.contains("is-open");
      dropdowns.forEach(closeDropdown);
      if (shouldOpen) {
        dropdown.classList.add("is-open");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });

  document.addEventListener("click", function () {
    dropdowns.forEach(closeDropdown);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") dropdowns.forEach(closeDropdown);
  });
});

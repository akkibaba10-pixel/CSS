const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
  toggleBtn.classList.toggle("rotate");
  classAllSubMenu();
});

document.querySelectorAll(".dropdown-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!btn.nextElementSibling.classList.contains("show")) classAllSubMenu();
    btn.nextElementSibling.classList.toggle("show");
    btn.classList.toggle("rotate");
    if (sidebar.classList.contains("close")) {
      sidebar.classList.toggle("close");
      toggleBtn.classList.toggle("rotate");
    }
  });
});

function classAllSubMenu() {
  Array.from(document.getElementsByClassName("show")).forEach((ul) => {
    ul.classList.remove("show");
    ul.previousElementSibling.classList.remove("rotate");
  });
}

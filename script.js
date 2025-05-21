function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("open");
}

document.getElementById("ficha-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const data = new FormData(this);
  const ficha = {};
  data.forEach((value, key) => ficha[key] = value);

  alert("Ficha salva com sucesso:\n" + JSON.stringify(ficha, null, 2));

  this.reset();
  toggleSidebar();
});

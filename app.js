Swal.fire({
  title: "WELCOME!",
  text: "on RoarRaptur Zoo!",
  icon: "success",
});

var toggleBtn = document.getElementById("checkbox");

toggleBtn.addEventListener("change", () => {
  if (toggleBtn.checked) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
});

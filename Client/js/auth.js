// Simple mock auth for Milestone 02 (no DB yet)
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      localStorage.setItem("loggedIn", "true");
      window.location.href = "dashboard.html";
    });
  }

  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      localStorage.setItem("loggedIn", "true");
      window.location.href = "dashboard.html";
    });
  }
});
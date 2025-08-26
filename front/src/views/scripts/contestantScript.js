export default function contestantScript() {
  document.addEventListener("click", (e) => {
    if (e.target.matches("#contestantTabs button")) {
      const tab = e.target.dataset.tab.trim();

      // Remove “active” from all buttons
      document.querySelectorAll("#contestantTabs .nav-link").forEach(btn =>
        btn.classList.remove("active")
      );

      // Hide all tabs content
      document.querySelectorAll(".tab-content").forEach(tc =>
        tc.classList.add("d-none")
      );

      // Activate the clicked button
      e.target.classList.add("active");

      // Show the corresponding content
      document.querySelector(`#tab-${tab}`).classList.remove("d-none");
    }
  });
}


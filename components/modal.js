const modal = document.getElementById("myModal");

export function loadModal(sourceElement) {
  sourceElement.addEventListener("click", () => {
    modal.style.display = "block";
    modal.classList.remove("fade-out");
    modal.classList.add("fade-in");
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
}

function closeModal() {
  modal.classList.remove("fade-in");
  modal.classList.add("fade-out");

  modal.addEventListener("animationend", handleAnimationEnd);
}

function handleAnimationEnd(event) {
  if (event.animationName === "fadeOut") {
    modal.style.display = "none";
    modal.classList.remove("fade-out");
    modal.removeEventListener("animationend", handleAnimationEnd);
  }
}

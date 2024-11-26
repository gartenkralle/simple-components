let modal;

export function loadModal(sourceElement, targetElement) {
  modal = targetElement;

  sourceElement.addEventListener("click", () => {
    targetElement.style.display = "block";
    targetElement.classList.remove("fade-out");
    targetElement.classList.add("fade-in");
  });

  window.addEventListener("click", (event) => {
    if (event.target === targetElement) {
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

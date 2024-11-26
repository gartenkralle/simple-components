let modal;

export function loadModal(sourceElement, targetElement) {
  const template = document.createElement("div");

  template.innerHTML =
    /*html*/
    `<div class="modal">
       <div class="modal-content">
       </div>
     </div>`;

  modal = template.firstChild;

  modal.querySelector(".modal-content").innerHTML = targetElement.innerHTML;
  targetElement.innerHTML = "";

  targetElement.appendChild(modal);

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

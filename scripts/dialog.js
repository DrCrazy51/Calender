import { waitUntilAnimationsFinish } from "./animation.js";

export function initDialog(name) {
  const dialogElement = document.querySelector(`[data-dialog=${name}]`);
  const closeButtons = document.querySelectorAll("[data-dialog-close-button]");


  function close() {
    dialogElement.classList.add("dialog--closing");

    waitUntilAnimationsFinish(dialogElement)
      .then(() => {
        dialogElement.classList.remove("dialog--closing");
        dialogElement.close();
      })
      .catch((error) => {
        console.error("Finish dialog animation promise failed", error);
      });
  }

  for (const closeButton of closeButtons) {
    closeButton.addEventListener("click", () => {
      close();
    });
  }

  dialogElement.addEventListener("click", (event) => {
    if (event.target === dialogElement) {
      close();
    }
  });

  dialogElement.addEventListener("cancel", (event) => {
    event.preventDefault();
    close();
  });

  return {
    dialogElement,
    open() {
      dialogElement.showModal();
    },
    close() {
      close();
    }
  };

}
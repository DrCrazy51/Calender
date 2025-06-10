export function initDialog(name) {
  const dialogElement = document.querySelector(`[data-dialog=${name}]`);
  const closeButtons = document.querySelectorAll("[data-dialog-close-button]");

  for (const closeButton of closeButtons) {
    closeButton.addEventListener("click", () => {
      dialogElement.close();
    });
  }

  return {
    open() {
      dialogElement.showModal();
    },
    close() {
      dialogElement.close();
    }
  }

}
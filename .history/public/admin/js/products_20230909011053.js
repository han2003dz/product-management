// Change Status
const linkChangeStatus = document.querySelectorAll("[link-change-status]");
if (linkChangeStatus.length > 0) {
  linkChangeStatus.forEach((item) => {
    item.addEventListener("click", () => {
      const statusCurrent = item.getAttribute("data-status");
      const id = item.getAttribute("data-id");
      console.log(statusCurrent);
      console.log(id);

      let statusChanges = [];
    });
  });
}

// End Change Status

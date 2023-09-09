// Change Status
const linkChangeStatus = document.querySelectorAll("[link-change-status]");
if (linkChangeStatus.length > 0) {
  const formChangeStatus = document.querySelector("#form-change-status");
  linkChangeStatus.forEach((item) => {
    item.addEventListener("click", () => {
      const statusCurrent = item.getAttribute("data-status");

      
      const id = item.getAttribute("data-id");
      console.log(statusCurrent);
      console.log(id);

      let statusChanges = statusCurrent == "active" ? "inactive" : "active";

      console.log(statusChanges);
    });
  });
}

// End Change Status

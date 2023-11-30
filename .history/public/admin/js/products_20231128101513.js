// Change Status
const linkChangeStatus = document.querySelectorAll("[link-change-status]");
if (linkChangeStatus.length > 0) {
  // lấy form, lấy data-path
  const formChangeStatus = document.querySelector("#form-change-status");
  const path = formChangeStatus.getAttribute("data-path");
  console.log(path);

  linkChangeStatus.forEach((item) => {
    item.addEventListener("click", () => {
      
      const statusCurrent = item.getAttribute("data-status");

      const id = item.getAttribute("data-id");

      let statusChanges = statusCurrent == "active" ? "inactive" : "active";

      const action = path + `/${statusChanges}/${id}?_method=PATCH`;

      formChangeStatus.action = action;

      formChangeStatus.submit();
    });
  });
}
// End Change Status

// Delete Item - xóa sản phẩm
const buttonDelete = document.querySelectorAll("[button-delete]");
if (buttonDelete.length > 0) {
  const formDeleteItem = document.querySelector("#form-delete-item");

  const path = formDeleteItem.getAttribute("data-path");

  buttonDelete.forEach((button) => {
    button.addEventListener("click", () => {
      console.log(button);
      const isConfirm = confirm("Bạn có chắc muốn xóa sản phẩm này không ?");

      if (isConfirm) {
        const id = button.getAttribute("data-id");

        const action = `${path}/${id}?_method=DELETE`;

        formDeleteItem.action = action;
        formDeleteItem.submit();
      }
    });
  });
}
//End delete Item

const buttonRestore = document.querySelectorAll("[button-restore]");
if (buttonRestore.length > 0) {
  const formRestore = document.querySelector("#form-restore-id");
  const path = formRestore.getAttribute("data-path");
  buttonRestore.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const id = button.getAttribute("data-id");
      formRestore.action = `${path}/restore/${id}?_method=PATCH`;
      formRestore.submit();
    });
  });
}

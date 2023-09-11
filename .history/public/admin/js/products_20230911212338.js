// Change Status
const linkChangeStatus = document.querySelectorAll("[link-change-status]");
if (linkChangeStatus.length > 0) {
  // lấy form, lấy data-path
  const formChangeStatus = document.querySelector("#form-change-status");
  const path = formChangeStatus.getAttribute("data-path");

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
  buttonDelete.forEach((button) => {
    button.addEventListener("click", () => {
      console.log(button);
      const isConfirm = confirm("Bạn có chắc muốn xóa sản phẩm này không ?");

      if (isConfirm) {
        const id = button.getAttribute("data-id");

        
      }

    });
  });
}

//End Item

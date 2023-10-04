// lấy ra bảng permission
const tablePermissions = document.querySelector("[table-permissions]");

if (tablePermissions) {
  let permissions = []; // tính năng

  // lấy ra button submit
  const buttonSubmit = document.querySelector("[button-submit]");
  buttonSubmit.addEventListener("click", () => {
    const rows = tablePermissions.querySelectorAll("[data-name]");

    rows.forEach((row) => {
      const inputs = row.querySelectorAll("input");
      const name = row.getAttribute("data-name");

      if (name == "id") {
        inputs.forEach((input) => {
          const id = input.value;
          permissions.push({ id: id }, { features: [] });
        });
      } else {
        inputs.forEach((input, index) => {
          const checked = input.checked;
          if (checked) {
            permissions[index].features.push(name);
          }
        });
      }
      console.log(permissions);
    });
  });
}

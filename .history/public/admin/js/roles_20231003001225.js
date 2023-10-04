// lấy ra bảng permission
const tablePermissions = document.querySelector("[table-permissions]");

if (tablePermissions) {
  let permissions = []; // tính năng

  // lấy ra button submit
  const buttonSubmit = document.querySelector("[button-submit]");
  buttonSubmit.addEventListener("click", () => {
    const rows = tablePermissions.querySelectorAll("[data-name]");

    console.log(rows);
    rows.forEach((row) => {
      const inputs = row.querySelectorAll("input");
      const name = row.getAttribute("data-name");
      console.log(name);
      if (name == "id") {
        inputs.forEach((input) => {
          const id = inputs.value;
          permissions.push({ id: id }, { features: [] });
        });
      } else {
      }
    });
  });
}

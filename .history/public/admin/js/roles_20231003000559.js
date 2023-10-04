// lấy ra bảng permission
const tablePermissions = document.querySelector("[table-permissions]");

if (tablePermissions) {
  // lấy ra button submit
  const buttonSubmit = document.querySelector("[button-submit]");
  buttonSubmit.addEventListener("click", () => {
    const rows = tablePermissions.querySelectorAll("[data-name]");
    console.log(rows);
    rows.forEach((row) => {
      console.log(row);
      const name = row.getAttribute("data-name");
      console.log(name);
      
    });
  });
}

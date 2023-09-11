// Button Status
const buttonsStatus = document.querySelectorAll("[button-status]");
if (buttonsStatus.length > 0) {
  let url = new URL(window.location.href);

  buttonsStatus.forEach((button) => {
    button.addEventListener("click", () => {
      const status = button.getAttribute("button-status");

      if (status) {
        url.searchParams.set("status", status);
      } else {
        url.searchParams.delete("status");
      }

      window.location.href = url.href;
    });
  });
}
// End Button Status

// Form Search
const formSearch = document.querySelector("#form-search");
if (formSearch) {
  let url = new URL(window.location.href);

  formSearch.addEventListener("submit", (e) => {
    e.preventDefault();
    const keyword = e.target.elements.keyword.value;

    if (keyword) {
      url.searchParams.set("keyword", keyword);
    } else {
      url.searchParams.delete("keyword");
    }

    window.location.href = url.href;
  });
}
// End Form Search

// Pagination
const linkPagination = document.querySelectorAll("[link-pagination]");
if (linkPagination) {
  let url = new URL(window.location.href);
  linkPagination.forEach((link) => {
    link.addEventListener("click", () => {
      const page = link.getAttribute("link-pagination");
      url.searchParams.set("page", page);
      window.location.href = url.href;
    });
  });
}

// end pagination

// check box

const checkBoxMulti = document.querySelector("[checkbox-multi]");
if (checkBoxMulti) {
  const checkAll = checkBoxMulti.querySelector("input[name='checkAll']");
  console.log(checkAll);
  const checkBoxItem = checkBoxMulti.querySelectorAll("input[name='id']");
  console.log(checkBoxItem);

  checkAll.addEventListener("click", () => {
    console.log(checkAll.checked);

    if (checkAll.checked) {
      checkBoxItem.forEach((item) => {
        item.checked = true;
      });
    } else {
      checkBoxItem.forEach((item) => {
        item.checked = false;
      });
    }
  });

  checkBoxItem.forEach((item) => {
    item.addEventListener("click", () => {
      const countChecked = checkBoxMulti.querySelectorAll(
        "input[name='id']:checked"
      ).length;

      if (countChecked == checkBoxItem.length) {
        checkAll.checked = true;
      } else {
        checkAll.checked = false;
      }
    });
  });
}
//end check box

// form change multi
const formChangeMulti = document.querySelector("[form-change-multi]");
if (formChangeMulti) {
  formChangeMulti.addEventListener("submit", (e) => {
    // để khi submit trang web không bị load lại trang do sự kiện submit
    e.preventDefault();

    // lấy ra table có element checkbox-multi
    const checkBoxMulti = document.querySelector("[checkbox-multi]");

    // lấy ra các ô checkbox đã check
    const inputsChecked = checkBoxMulti.querySelectorAll(
      "input[name='id']:checked"
    );

    const typeChange = e.target.elem

    // nếu người dùng đã check thì mới submit
    if (inputsChecked.length > 0) {
      let arrIds = [];
      const inputIds = formChangeMulti.querySelector("input[name='ids']");
      inputsChecked.forEach((input) => {
        // value = item.id
        const id = input.value;
        arrIds.push(id);
      });
      inputIds.value = arrIds.join(",");
      formChangeMulti.submit();
    } else {
      alert("vui lòng chọn ít nhất 1 bản ghi để áp dụng");
    }
  });
}

// end form change multi


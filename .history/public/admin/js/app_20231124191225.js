// gửi sang backend - controllers

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
  const checkBoxItem = checkBoxMulti.querySelectorAll("input[name='id']");

  checkAll.addEventListener("click", () => {
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

    const typeChange = e.target.elements.type.value;

    if (typeChange == "deleted-all") {
      const isConfirm = confirm("bạn có chắc chắn muốn xóa tất cả không ?");
      if (!isConfirm) {
        return;
      }
    }

    // nếu người dùng đã check thì mới submit
    if (inputsChecked.length > 0) {
      let arrIds = [];
      const inputIds = formChangeMulti.querySelector("input[name='ids']");
      inputsChecked.forEach((input) => {
        // value = item.id
        const id = input.value;

        if (typeChange == "change-position") {
          // đi từ ô input đã checked tới thẻ cha tr sau đó từ tr đó query qua input có name=position
          const position = input
            .closest("tr")
            .querySelector("input[name='position']").value;
          arrIds.push(`${id}-${position}`);
        } else {
          arrIds.push(id);
        }
      });
      inputIds.value = arrIds.join(",");
      formChangeMulti.submit();
    } else {
      alert("vui lòng chọn ít nhất 1 bản ghi để áp dụng");
    }
  });
}
// end form change multi

// start show-alert
const showAlert = document.querySelector("[show-alert]");
if (showAlert) {
  const time = parseInt(showAlert.getAttribute("data-time"));

  const buttonClose = document.querySelector("[close-alert]");

  // sau 5s thi mất
  setTimeout(() => {
    showAlert.classList.add("alert-hidden");
  }, 5000);

  // sự kiện click mất
  buttonClose.addEventListener("click", () => {
    showAlert.classList.add("alert-hidden");
  });
}
// end show-alert

// upload image
const uploadImg = document.querySelector("[upload-image]");
if (uploadImg) {
  const uploadImgInput = document.querySelector("[upload-image-input]");
  const uploadImgPreview = document.querySelector("[upload-image-preview]");

  uploadImgInput.addEventListener("change", (e) => {
    console.lo
    const file = e.target.files[0];
    if (file) {
      uploadImgPreview.src = URL.createObjectURL(file);
    }
  });
}
//end upload image

// Button sort desc/asc
const sort = document.querySelector("[sort]");
if (sort) {
  const url = new URL(window.location.href);
  const sortSelect = sort.querySelector("[sort-select]");
  const sortClear = sort.querySelector("[sort-clear]");
  sortSelect.addEventListener("change", (e) => {
    // lấy ra value của ô option
    const value = e.target.value;
    // lúc này value đang ở string cần chuyển sang mảng
    const [sortKey, sortValue] = value.split("-");
    url.searchParams.set("sortKey", sortKey);
    url.searchParams.set("sortValue", sortValue);
    window.location.href = url.href;
  });
  // vì mỗi lần chuyển trạng thái web sẽ load lại và set lại về mặc định
  // cần thêm thuộc tính selected=true cho option hiện tại
  const sortKey = url.searchParams.get("sortKey");
  const sortValue = url.searchParams.get("sortValue");
  // nếu web đã trả về url có sortKey và sortValue thì:
  if (sortKey && sortValue) {
    const stringSort = `${sortKey}-${sortValue}`;
    const optionSelected = sortSelect.querySelector(
      `option[value='${stringSort}']`
    );
    optionSelected.selected = true;
  }

  // nút xóa sắp xếp
  sortClear.addEventListener("click", () => {
    url.searchParams.delete("sortKey");
    url.searchParams.delete("sortValue");

    window.location.href = url.href;
  });
}
// End Button sort
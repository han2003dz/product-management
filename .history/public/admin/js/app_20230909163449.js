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
if(checkBoxMulti){
  const checkAll = checkBoxMulti.querySelector("input[name=""]")
}

//end check box

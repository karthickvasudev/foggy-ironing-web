const showSuccessAlert = (message) => {
  const alertPlaceholder = document.getElementById("alert-wrapper");
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-success alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};

const showErrorAlert = (message) => {
  const alertPlaceholder = document.getElementById("alert-wrapper");
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-danger alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};

export { showSuccessAlert, showErrorAlert };

const menu = document.querySelectorAll("[data-action]");
const formClient = document.querySelector("#client");
const formProduct = document.querySelector("#product");
const formOrder = document.querySelector("#order");
const closeModal = document.querySelectorAll(".form__header > span");

const getDataset = (action) => {
    switch (action) {
        case "client":
            return formClient;
        case "product":
            return formProduct;
        case "order":
            return formOrder;
    }
};

menu.forEach((item) => {
    item.addEventListener("click", () => {
        const action = item.dataset.action;
        const modal = getDataset(action);
        modal.classList.add("form-active");
    });
});

closeModal.forEach((item) => {
    item.addEventListener("click", () => {
        item.parentElement.parentElement.classList.remove("form-active");
    });
});

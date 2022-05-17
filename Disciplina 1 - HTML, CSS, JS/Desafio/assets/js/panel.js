const menu = document.querySelectorAll("[data-action]");
const formClient = document.querySelector("#client");
const formProduct = document.querySelector("#product");
const formOrder = document.querySelector("#order");
const buttonCloseModal = document.querySelectorAll(".form__header > span");
const allModals = document.querySelectorAll(".form");

//modal interaction
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

const closeAllModals = () => {
    allModals.forEach((item) => {
        item.classList.remove("form-active");
    });
};

menu.forEach((item) => {
    item.addEventListener("click", () => {
        closeAllModals();
        const action = item.dataset.action;
        const modal = getDataset(action);
        modal.classList.add("form-active");
    });
});

buttonCloseModal.forEach((item) => {
    item.addEventListener("click", () => {
        item.parentElement.parentElement.classList.remove("form-active");
    });
});

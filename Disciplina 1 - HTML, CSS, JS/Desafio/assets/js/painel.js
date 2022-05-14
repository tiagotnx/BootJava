const menu = document.querySelectorAll("[data-action]");
const formClient = document.querySelector("#client");
const formProduct = document.querySelector("#product");
const formOrder = document.querySelector("#order");

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
    item.addEventListener("click", (e) => {
        e.preventDefault();
        const action = item.dataset.action;
        const modal = getDataset(action);
        modal.classList.add("form-active");
    });
});

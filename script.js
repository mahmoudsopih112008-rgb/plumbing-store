const productButtons = document.querySelectorAll(".product-button");

productButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const productName = button.dataset.product;

        alert("أنت اخترت: " + productName);

    });

});
$(document).ready(function () {
  $.getJSON("../product.json", function (products) {
    $.each(products, function (index, product) {
      $("#products-container").append(
        `<div class="col-md-4">
            <div class="card mb-4 product-wap rounded-0">

              <div class="card rounded-0">
                <img
                  class="card-img rounded-0 img-fluid"
                  src="${product.image}"
                />
              </div>

              <div class="card-body">
                <a href="shop-single.html" class="h3 text-decoration-none"
                  >${product.name}</a
                >
                <ul
                  class="w-100 list-unstyled d-flex justify-content-between mb-0"
                >
                  <li>${product.description}</li>
                </ul>
                <ul class="list-unstyled d-flex justify-content-center mb-1">
                </ul>
                <p class="text-center mb-0">${product.price}</p>
              </div>

            </div>
        </div>
          `
      );
    });
  });
});

// Get the modal
var modal = document.getElementById("productModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Function to open the modal
function showModal() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

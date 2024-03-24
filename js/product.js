const url = new URL(window.location.href);
const searchParams = new URLSearchParams(url.search);
const productContainer = $("#products-container");
const productPagination = $("#products-pagination ul");

let pageId = Number(searchParams.get("page-id") || 1);
const productsPerPage = 9;
if (pageId * productsPerPage > Math.ceil(products.length / productsPerPage) * productsPerPage) {
	pageId = 1;
}

const productTemplate = (product, id) => 
`<div class="col-md-4">
	<div class="card mb-4 product-wap rounded-0">

	 <div class="card rounded-0">
		 <img
			 class="card-img rounded-0 img-fluid"
			 src="${product.image[0]}"
		 />
	 </div>

	 <div class="card-body">
		 <a href="shop-single.html?product-id=${id}" class="h3 text-decoration-none"
			 >${product.title}</a
		 >
		 <ul
			 class="w-100 list-unstyled d-flex justify-content-between mb-0"
		 >
			 <li>${shortenDesc(product.desc)}</li>
		 </ul>
		 <ul class="list-unstyled d-flex justify-content-center mb-1">
		 </ul>
	 </div>

	</div>
</div>`;

const paginationTemplate = (id) => 
`
<li class="page-item ${id === pageId ? "disabled" : ""}">
	<a
		class="page-link ${id === pageId ? "active" : ""} rounded-0 mr-3 shadow-sm border-top-0 border-left-0"
		href="?page-id=${id}"
		${id === pageId ? tabindex="-1" : ""}
	>${id}</a
	>
</li>
`

const numPages = Math.ceil(products.length / productsPerPage)

$(document).ready(() => {
	for (let productId = (pageId - 1) * productsPerPage; productId < products.length && productId < pageId * productsPerPage; ++productId) {
		productContainer.append(productTemplate(products[productId], productId));
	}

	for (let page = 1; page <= numPages; ++page) {
		productPagination.append(paginationTemplate(page));
	}
});


const productContainer = $("#products-container");
const template = (product) => 
`<div class="col-md-4">
	<div class="card mb-4 product-wap rounded-0">

	 <div class="card rounded-0">
		 <img
			 class="card-img rounded-0 img-fluid"
			 src="${product.image[0]}"
		 />
	 </div>

	 <div class="card-body">
		 <a href="shop-single.html" class="h3 text-decoration-none"
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

$(document).ready(() => {
	for (let product of products) {
		productContainer.append(template(product));		
	}
});

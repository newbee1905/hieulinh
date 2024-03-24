const url = new URL(window.location.href);
const searchParams = new URLSearchParams(url.search);

let productId = Number(searchParams.get("product-id") || 0);
if (productId >= products.length) {
	productId = 0;
}

const product = products[productId];

const carouselTemplate = (id, img) =>
`
<div class="col-4">
	<a href="#">
		<img
			id="carousel-image-${id}"
			class="carousel-image card-img img-fluid"
			src="${img}"
			alt="Product Image ${id}"
		/>
	</a>
</div>
`;

$(document).ready(() => {
	const carouselContainer = $(".carousel-multi-item");
	const mainImage = $("#carousel-main-image");
	const productTitle = $("#product-name");
	const productDesc = $("#product-desc");

	$("#carousel-related-product").slick({
		infinite: true,
		arrows: false,
		slidesToShow: 4,
		slidesToScroll: 3,
		dots: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 3,
				},
			},
		],
	});

	for (let i = 0; i < product.image.length; ++i) {
		$('.carousel-item .row').append(carouselTemplate(i + 1, product.image[i]));	
	}

	if (product.image.length > 0) {
		mainImage.attr("src", product.image[0]);
	}

	$(".carousel-image").click(function() {
		mainImage.attr("src", this.src);
	});

	productTitle.text(product.title);
	productDesc.text(product.desc);
});

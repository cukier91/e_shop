import React from 'react';

export default function ProductCart({product}:{product:any}) {
	return (
		<div className="w-full sm:w-2/6 md:w-2/6 lg:w-1/6 py-3 px-3 block border border-gray-300 justify">
			<a
				className="relative"
				href={`/products/${product.slug}`}
			>
				<img
					className="object-contain w-full h-56 lg:h-72"
					src={`${product.images[0].url}`}
					alt="Build Your Own Drone"
					loading="lazy"
				/>

				<div className="p-4">
					<h5 className="mt-4 text-lg font-bold">{product.name}</h5>

					<p className="mt-2 text-sm text-gray-700">{product.price}$</p>
				</div>
			</a>
			<button
				className="block w-full p-4 mt-4 text-sm font-medium bg-blue-500 rounded-sm text-white"
				type="button"
			>
				Add to Cart
			</button>
		</div>
	);
}

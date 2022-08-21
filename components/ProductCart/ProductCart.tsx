import React from 'react';

export default function ProductCart() {
	return (
		<>
			<a
				className="relative block border border-gray-100"
				href="/product/build-your-own-drone"
			>
				<button
					className="absolute p-2 text-white bg-black rounded-full right-4 top-4"
					type="button"
				>
					<svg
						className="w-4 h-4"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
						></path>
					</svg>
				</button>

				<img
					className="object-contain w-full h-56 lg:h-72"
					src="https://www.hyperui.dev/photos/toy-1.jpeg"
					alt="Build Your Own Drone"
					loading="lazy"
				/>

				<div className="p-6">
					<strong className="inline-block px-3 py-1 text-xs font-medium bg-blue-500">
						New
					</strong>

					<h5 className="mt-4 text-lg font-bold">Build Your Own Drone</h5>

					<p className="mt-2 text-sm text-gray-700">$14.99</p>

					<button
						className="block w-full p-4 mt-4 text-sm font-medium bg-blue-500 rounded-sm"
						type="button"
					>
						Add to Cart
					</button>
				</div>
			</a>
		</>
	);
}

import React from 'react';

export default function Address() {
	return (
		<>
			<div className="relative">
				<label
					className="block text-xs font-medium text-black-500"
					htmlFor="street"
				>
					{' '}
					Ulica{' '}
				</label>

				<input
					className="w-full p-2 mt-1 text-sm border-2 border-gray-200 rounded"
					id="street"
					type="text"
					placeholder="Ulica..."
				/>
			</div>
			<div className="relative mt-2">
				<label
					className="block text-xs font-medium text-gray-500"
					htmlFor="city"
				>
					{' '}
					Miejscowość{' '}
				</label>

				<input
					className="w-full p-2 mt-1 text-sm border-2 border-gray-200 rounded"
					id="city"
					type="text"
					placeholder="Miejscowość..."
				/>
			</div>
			<div className="relative mt-2">
				<label
					className="block text-xs font-medium text-gray-500"
					htmlFor="email"
				>
					{' '}
					Email{' '}
				</label>

				<input
					className="w-full p-2 mt-1 text-sm border-2 border-gray-200 rounded"
					id="email"
					type="email"
				/>
			</div>
		</>
	);
}

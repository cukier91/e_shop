import React from 'react';

export default function Details() {
	return (
		<>
			<div className="relative">
				<label
					className="block text-xs font-medium text-black-500"
					htmlFor="name"
				>
					{' '}
					Imię{' '}
				</label>

				<input
					className="w-full p-2 mt-1 text-sm border-2 border-gray-200 rounded"
					id="name"
					type="text"
					placeholder="Jan..."
				/>
			</div>
			<div className="relative mt-2">
				<label
					className="block text-xs font-medium text-gray-500"
					htmlFor="lastName"
				>
					{' '}
					Nazwisko{' '}
				</label>

				<input
					className="w-full p-2 mt-1 text-sm border-2 border-gray-200 rounded"
					id="lastName"
					type="text"
					placeholder="Kowalski..."
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

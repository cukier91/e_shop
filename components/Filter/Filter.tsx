import React from 'react';
import { useState } from 'react';

export default function Filter() {
	const [filter, useFilter] = useState<boolean>(false);

	return (
		<>
			{filter ? (
				<div className="flex bg-gray-100 w-full h-16 justify-center gap-6 py-4 px-2">
					<label>
						<input type="checkbox" className="blue-500 hoover:bg-blue-700" />{' '}
						Customized
					</label>
					<label>
						<input type="checkbox" className="blue-500 hoover:bg-blue-700" />{' '}
						Customized
					</label>
					<label>
						<input type="checkbox" className="blue-500 hoover:bg-blue-700" />{' '}
						Customized
					</label>
				</div>
			) : null}
			<button
				onClick={() => useFilter(!filter)}
				className="ml-2 px-5 py-2.5 text-sm font-medium text-white bg-blue-500 rounded-md shadow  hover:bg-blue-700 focus:outline-none focus:ring"
			>
				Filtruj
			</button>
		</>
	);
}

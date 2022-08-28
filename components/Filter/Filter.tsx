import React from 'react';
import { useState } from 'react';

export default function Filter() {
	const [filter, useFilter] = useState<boolean>(false);
	const [filterList, useFilterList] = useState<Array<string>>([
		'Zabezpieczenia pasywne',
		'Meble',
		'Mała architektura',
		'Konstrukcje stalowe',
	]);
	return (
		<>
			{filter ? (
				<div className="flex flex-wrap bg-gray-100 w-full justify-center gap-6 py-2 px-2 text-sm">
					{filterList.map((element) => {
						return (
							<label key={element}>
								<input
                  id={element}
									type="checkbox"
									className="blue-500 hoover:bg-blue-700"
								/>{' '}
								{element}
							</label>
						);
					})}
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

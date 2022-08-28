import React from 'react';
import { useField } from 'formik';

const InputWithLabel = ({ name, label, placeholder }: any) => {
	const [field, meta, error] = useField(name);
	console.log(meta, error);

	return (
		<div className="relative">
			<label
				className="block text-xs font-medium text-black-500"
				htmlFor={name}
			>
				{label}
			</label>

			<input
				className="w-full p-2 mt-1 text-sm border-2 border-gray-200 rounded"
				id={name}
				name={field.name}
				value={field?.value}
				type="text"
				placeholder={placeholder}
				onChange={field.onChange}
				onBlur={field.onBlur}
			/>
		</div>
	);
};

export default function Details() {
	return (
		<>
			<InputWithLabel name="name" label="Imię" placeholder="Jan..." />
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
					placeholder="example@example.com"
				/>
			</div>
            <button className='bg-blue-700 text-white' type='submit'>Sent</button>
		</>
	);
}

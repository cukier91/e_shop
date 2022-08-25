import { checkIsManualRevalidate } from 'next/dist/server/api-utils';
import React from 'react';
import { useState } from 'react';
import Details from '../../components/OrderForm/Details';
import Address from '../../components/OrderForm/Address';

export default function Order() {
	const [stage, useStage] = useState<number>(1);

	function changeStage(e: React.SyntheticEvent, param: number) {
		e.preventDefault();
		return useStage(stage + param);
	}

	return (
		<div className="px-4 py-6 md:px-12 md:py-8 lg:px-64 lg:py-16 xl:px-96 ">
			<div className="w-full ">
				<h2 className="sr-only">Steps</h2>

				<div>
					<div className="overflow-hidden bg-gray-200 rounded-full">
						<div className={`w-${stage}/3 h-2 bg-blue-500 rounded-full`}></div>
					</div>

					<ol className="grid grid-cols-3 mt-4 text-sm font-medium text-gray-500">
						<li className="flex items-center justify-start text-blue-600">
							<span className="hidden sm:inline"> Details </span>

							<svg
								className="w-6 h-6 sm:w-5 sm:h-5 sm:ml-2"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
								/>
							</svg>
						</li>

						<li className="flex items-center justify-center text-blue-600">
							<span className="hidden sm:inline"> Address </span>

							<svg
								className="w-6 h-6 sm:w-5 sm:h-5 sm:ml-2"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
								/>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
								/>
							</svg>
						</li>

						<li className="flex items-center justify-end text-blue-600">
							<span className="hidden sm:inline"> Payment </span>

							<svg
								className="w-6 h-6 sm:w-5 sm:h-5 sm:ml-2"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
								/>
							</svg>
						</li>
					</ol>
				</div>
			</div>

			<div className="flex h-screen justify-center mt-4 py-8 px-8 ">
				<form className="w-full h-2/4 sm:h-2/3 md:w-3/6 md:h-3/6 lg:h-96 border-2 border-gray-200 px-8 py-8">
					{stage === 1 ? <Details /> : stage == 2 ? <Address /> : null}
					<div className="relative h-20 w-full">
						{stage === 3 ? null : (
							<button
								className="absolute bottom-0 right-0 h-16 w-16"
								onClick={(e) => changeStage(e, 1)}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="icon icon-tabler icon-tabler-arrow-big-right text-blue-700"
									width="48"
									height="32"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke="currentColor"
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
									<path d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z"></path>
								</svg>
							</button>
						)}
						{stage === 1 ? null : (
							<button
								className="absolute bottom-0 left-0 h-16 w-16"
								onClick={(e) => changeStage(e, -1)}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="icon icon-tabler icon-tabler-arrow-big-left text-blue-700"
									width="48"
									height="32"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke="currentColor"
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
									<path d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z"></path>
								</svg>
							</button>
						)}
					</div>
				</form>
			</div>
		</div>
	);
}

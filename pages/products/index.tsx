import { InferGetStaticPropsType } from 'next/types';
import React from 'react';
import { gql } from '@apollo/client';
import { apolloClient } from '../../graphql/apolloClient';
import Link from 'next/link';
import Filter from '../../components/Filter/Filter';
import ProductCart from '../../components/ProductCart/ProductCart';

const Products = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
	console.log(data);
	return (
		<>
			<Filter />

			<div className="flex py-6 px-6 gap-3 flex-wrap justify-center">
				{data.products.map((product: any) => {
					console.log(product);
					return <ProductCart key={product.id} product={product} />;
				})}
			</div>
		</>
	);
};

export default Products;

export const getStaticProps = async () => {
	const { data } = await apolloClient.query({
		query: gql`
			query GetAllProducts {
				products {
					description
					id
					name
					price
					slug
					images {
						height
						url
						width
					}
				}
			}
		`,
	});

	if (!data) {
		return {
			props: {},
			notFound: true,
		};
	}

	return {
		props: {
			data,
		},
	};
};

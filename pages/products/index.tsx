import { InferGetStaticPropsType } from 'next/types';
import React from 'react'
import { gql } from "@apollo/client";
import { apolloClient } from '../../graphql/apolloClient';
import Link from "next/link"

const Products = ({data}:InferGetStaticPropsType<typeof getStaticProps>) => {
    
  return (
    <div>{data.products.map((product:any)=>{
        return <p key={product.slug}><Link href={`/products/${product.slug}`}>{product.name}</Link></p>
    })}</div>
  )
}

export default Products;

export const getStaticProps=async()=>{
    const {data}=await apolloClient.query({
        query: gql`query GetAllProducts {
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
}`
    })

    if(!data){
        return {
            props: {},
            notFound: true
        }
    }

    return {
        props: {
            data
        }
    }
}
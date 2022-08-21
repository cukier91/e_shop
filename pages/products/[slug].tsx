import { InferGetStaticPropsType } from "next";
import { apolloClient } from "../../graphql/apolloClient";
import { gql } from "@apollo/client";

const Slug = ({data}:InferGetStaticPropsType<typeof getStaticProps>) => {
    console.log(data)
  return (
    <div>[slug]</div>
  )
}

export default Slug;

export const getStaticPaths=async()=>{
    const {data}=await apolloClient.query({
        query: gql`query GetProductsSlugs {
  products {
    slug
  }
}`
    })
    return {
        paths: data.products.map((product:any)=>{
            return {
                params: {
                    slug: product.slug
                }
            }
        }),
        fallback: "blocking"
    }
}

export const getStaticProps=async({
    params
}:any)=>{
    if(!params?.slug){
        return {
            props: {},
            notFound: true
        }
    }

    const {data}=await apolloClient.query({
        variables:{
            slug: params.slug
        },
        query: gql`query GetProductBySlug($slug:String) {
  product(where: {slug: $slug}) {
    description
    id
    images {
      height
      url
      width
    }
    price
    name
    slug
  }
}`
    })

    if(!data){
        return{
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
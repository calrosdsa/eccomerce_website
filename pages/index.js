import Header from '../components/Header';
import Head from 'next/head'
import ProductsFeed from '../components/ProductsFeed';
import { getSession } from 'next-auth/client';
import Banner from '../components/Banner';
export default function Home({products}) {
  return (
    <div className=" bg-gray-400 ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header products={products} placeholder="Search product" className="sticky"/>
      <Banner/>
       <ProductsFeed products={products}/>
       
    </div>
  )
}
export async function getServerSideProps(context){
  const session=await getSession(context)
  const products= await fetch("https://fakestoreapi.com/products").then((res)=>res.json());
  return{
    props:{
      products,
      session
    }
  }
}


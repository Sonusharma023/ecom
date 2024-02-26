import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard'
import Categories from '../../components/Categories'

const Products = () => {
  const [products, setProducts] = useState([])
  var arr = [1,2,3,4,5,6,7,8,9,10,11,12]
  useEffect(() => {
 const fetchProducts = async () => {
  const respose = await fetch('https://fakestoreapi.com/products')
  const data = await respose.json()
  console.log(data);
  setProducts(data)
 }
 fetchProducts()
  }, []);
  return (
    <>
       <Categories />
       <div className="flex flex-col text-center w-full mt-20">
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
       PRODUCTS
      </h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
       MOST POPULAR PRODUCTS
      </h1>
    </div>
    {
      products.length > 0 ?
    <ProductCard  products={products}/>
    :
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
{
  arr.map((product) => {
         return (
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full color" >
              <div className="block relative h-48 rounded overflow-hidden">
                <div className="object-contain object-center w-full h-full block skeleton" ></div>
              </div>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 skeleton skeleton-text-h3"></h3>
                <h2 className="text-gray-900 title-font text-lg font-medium skeleton skeleton-text-h2"></h2>
                <p className="mt-1 skeleton skeleton-text-p"></p>
              </div>
            </div>
            )
            })
}
          </div>
        </div>
      </section>
    }
        <ProductCard />
    </>
  )
}

export default Products
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/ProductCard'

const CategoryProducts = () => {
  var arr = [1,2,3,4,5,6]

    const {name} = useParams()
    const [products, setProducts] = useState([])
    useEffect(() => {
   const fetchProducts = async () => {
    const respose = await fetch(`https://fakestoreapi.com/products/category/${name}`)
    const data = await respose.json()
    console.log(data);
    setProducts(data)
   }
   fetchProducts()
    }, []);
    if (products.length === 0) {
      return(
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
      )
  } 
  return (
 <ProductCard products ={products} />

  )
}

export default CategoryProducts
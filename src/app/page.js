"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import Card from "./components/Card";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setProducts(res.data.products);
    })
  }, []);

  if (!products) return <div>Loading...</div>;

  console.log(products);

  return (
    <div className="py-4">
      <div className="grid  auto-rows-fr 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center gap-4">
        {products.map((datas, index) => {
          return (
            <div key={datas.id}>
              <Card title={datas.title} brand={datas.brand} description={datas.description} image={datas.thumbnail} id={datas.id} rating={datas.rating} stock={datas.stock} category={datas.category}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}



"use client";

import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

import Sidebar from "./components/Sidebar";
import ListingCollection from "./components/listings/ListingCollection";
import Image from "next/image";
import NoProduct from "./components/NoProduct";
import ListingType from "./components/listings/ListingType";
import ListingColor from "./components/listings/ListingColor";
import ProductCard from "./components/ProductCard";

type Product = {
  id: number;
  name: string;
  created_at: string;
  images: string[];
  color: string[];
  size: string[];
  description: string;
  price: number;
  type: string;
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get("../api/collections");
      // console.log("product:", res.data);
      setProducts(res.data);
    };
    getProducts();
  }, []);

  return (
    <div
      className="flex 
    min-h-screen 
    w-screen 
    flex-col 
    items-center 
    py-24 
    px-20"
    >
      <h1 className="mb-16 text-5xl capitalize">All Products</h1>
      <div
        className="w-full 
      grid 
      grid-cols-5 
      gap-5"
      >
        <Sidebar>
          <ListingType />
          <ListingColor />
        </Sidebar>
        <ListingCollection>
          <div className="flex justify-between">
            {/* <div>0 products</div>
        <div>{finalProducts.length} products</div> */}

            <div>Recommended</div>
          </div>

          <div
            className="mt-12 
          grid 
          grid-cols-4
          gap-5"
          >
            {/* <NoProduct /> */}
            {products.map((product) => (
              <ProductCard
                key={product.id}
                productId={product.id}
                image={product.images[0]}
                name={product.name}
                price={product.price}
              />
            ))}
          </div>
        </ListingCollection>
      </div>
    </div>
  );
}

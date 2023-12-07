"use client";

import { useEffect, useState } from "react";
import qs from "query-string";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

import getProducts, { IParams } from "./actions/getProducts";

import Sidebar from "./components/Sidebar";
import ListingCollection from "./components/listings/ListingCollection";
import EmptyPage from "./components/EmptyPage";
import ListingType from "./components/listings/ListingType";
import ListingColor from "./components/listings/ListingColor";
import ProductCard from "./components/ProductCard";

interface HomeProps {
  searchParams: IParams;
}

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

const Home = ({ searchParams }: HomeProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedtype, setSelectedType] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");

  //get products
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getProducts(searchParams);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getData();
  }, [searchParams]);

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
            <div>{products.length} products</div>

            <div>Recommended</div>
          </div>
          <div
            className="mt-12 
          grid 
          grid-cols-4
          gap-5"
          >
            {products.length === 0 && <EmptyPage />}

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
};

export default Home;

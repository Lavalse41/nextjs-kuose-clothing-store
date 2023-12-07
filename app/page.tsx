"use client";

import { useEffect, useState } from "react";

import getProducts, { IParams } from "./actions/getProducts";

import Sidebar from "./components/Sidebar";
import ListingCollection from "./components/listings/ListingCollection";
import EmptyPage from "./components/EmptyPage";
import ListingType from "./components/listings/ListingType";
import ListingColor from "./components/listings/ListingColor";
import ProductCard from "./components/ProductCard";
import Container from "./components/Container";
import SortOption from "./components/SortOption";

interface HomeProps {
  searchParams: IParams;
}

export interface Product {
  id: number;
  name: string;
  created_at: string;
  images: string[];
  color: string[];
  size: string[];
  description: string;
  price: number;
  type: string;
}

const Home = ({ searchParams }: HomeProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  //get products
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getProducts(searchParams);
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getData();
  }, [searchParams]);

  let filteredData = products;

  return (
    <Container>
      <div
        className="flex 
          flex-col 
          items-center
          py-24"
      >
        <h1 className="mb-16 text-5xl capitalize">All Products</h1>
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-5
            gap-8"
        >
          <Sidebar>
            <ListingType />
            <ListingColor />
          </Sidebar>
          <ListingCollection>
            <div className="flex justify-between">
              <div>{products.length} products</div>
              <SortOption filteredData={filteredData} />
            </div>

            <div className="mt-12 flex justify-center">
              {products.length === 0 && <EmptyPage />}
            </div>

            <div
              className="mt-8
                grid 
                grid-cols-4
                gap-5"
            >
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
    </Container>
  );
};

export default Home;

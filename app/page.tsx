"use client";

import { useEffect, useState } from "react";

import getProducts, { IParams } from "./actions/getProducts";

import Sidebar from "./components/Sidebar";
import ListingCollection from "./components/listings/ListingCollection";

import ListingType from "./components/listings/ListingType";
import ListingColor from "./components/listings/ListingColor";
import ProductCard from "./components/ProductCard";
import SortSelect from "./components/SortSelect";
import Container from "./components/Container";
import EmptyPage from "./components/EmptyPage";

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

  //ts.config ignore
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getProducts(searchParams);
        if (data !== null && data !== undefined) {
          setProducts(data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getData();
  }, [searchParams]);

  if (products === null) {
    return;
  }

  return (
    <Container>
      <div
        className="
          flex 
          flex-col 
          items-center
          py-24"
      >
        <h1 className="mb-16 text-5xl capitalize">All Products</h1>
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-1 
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
              <SortSelect products={products} setProducts={setProducts} />
            </div>

            <div className="mt-12 flex justify-center">
              {products.length === 0 && <EmptyPage />}
            </div>

            <div
              className="
                mt-8
                grid 
                md:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-4
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

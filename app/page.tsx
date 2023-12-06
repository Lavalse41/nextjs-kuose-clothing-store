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

  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const onSubmit = async () => {
      let currentQuery = {};

      if (params) {
        currentQuery = qs.parse(params.toString());
      }

      const updatedQuery: any = {
        ...currentQuery,
        type: selectedtype,
        color: selectedColor,
      };

      if (params?.get("type") === selectedtype) {
        //remove it if clicking on it
        delete updatedQuery.type;
      }

      if (params?.get("color") === selectedColor) {
        //remove it if clicking on it
        delete updatedQuery.color;
      }

      const url = qs.stringifyUrl(
        {
          url: "/",
          query: updatedQuery,
        },
        { skipNull: true }
      );

      if (url !== pathname) {
        await router.push(url); // Wait for the router push to complete
      }
    };
    onSubmit();
  }, [selectedtype, selectedColor, params, router, pathname]);

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

  console.log(selectedtype);
  console.log(selectedColor);

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
          <ListingType
            onSelected={(value) => {
              setSelectedType(value);
            }}
          />
          <ListingColor onSelected={(value) => setSelectedColor(value)} />
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

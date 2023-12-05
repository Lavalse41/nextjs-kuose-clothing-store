"use client";

import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

import SidebarCollections from "./components/Sidebar";
import ListCollections from "./components/listings/ListingCollection";
import Image from "next/image";
import DeleteIcon from "./components/DeleteIcon";
import NoProduct from "./components/NoProduct";
// import { colorData } from "./data/colorData";

type Type = {
  id: number;
  name: string;
  selected: boolean;
  created_at: string;
};

type Color = {
  id: number;
  name: string;
  selected: boolean;
  created_at: string;
  code: string;
  src: string;
};

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
  const [productTypes, setProductTypes] = useState<Type[]>([]);
  const [productColors, setProductColors] = useState<Color[]>([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [finalProducts, setFinalProducts] = useState([]);

  //add filters to array
  function handleAddFilter(id: number, filter: string) {
    if (filter === "type") {
      const newProductTypes = productTypes.map((type) =>
        type.id === id ? { ...type, selected: !type.selected } : type
      );

      setProductTypes(newProductTypes);
    }

    if (filter === "color") {
      const newProductColors = productColors.map((color) =>
        color.id === id ? { ...color, selected: !color.selected } : color
      );
      setProductColors(newProductColors);
    }
  }

  //update selected type array
  useEffect(() => {
    const selectedTypes = productTypes
      .filter((type) => type.selected === true)
      .map((type) => type.name);
    setSelectedTypes(selectedTypes);
  }, [productTypes]);

  //update selected color array
  useEffect(() => {
    const selectedColors = productColors
      .filter((color) => color.selected === true)
      .map((color) => color.name);
    setSelectedColors(selectedColors);
  }, [productColors]);

  //filter products
  useEffect(() => {
    function getFilteredProducts(types: string[], colors: string[]) {
      let combinedProducts: Product[] = [];

      //if filter only type
      if (types.length > 0 && colors.length === 0) {
        for (let t of types) {
          const filteredProducts = products.filter(
            (product) => product.type === t
          );
          combinedProducts = combinedProducts.concat(filteredProducts);
        }
        setFilteredProducts(combinedProducts);
      }

      //if filter only color
      if (types.length === 0 && colors.length > 0) {
        for (let c of colors) {
          const filteredProducts = products.filter((product) => {
            const cleanedColors = product.color
              .join()
              .split(/,|\s+/)
              .map((word) => word.toLowerCase()); //clean color

            return cleanedColors.includes(c);
          });
          combinedProducts = combinedProducts.concat(filteredProducts);
        }
        setFilteredProducts(combinedProducts);
      }

      //if filter both type and color
      if (types.length > 0 && colors.length > 0) {
        for (let t of types) {
          for (let c of colors) {
            const filteredProducts = products.filter((product) => {
              const cleanedColors = product.color
                .join()
                .split(/,|\s+/)
                .map((word) => word.toLowerCase()); //clean color

              return product.type === t && cleanedColors.includes(c);
            });
            combinedProducts = combinedProducts.concat(filteredProducts);
          }
        }
        setFilteredProducts(combinedProducts);
      }
    }
    getFilteredProducts(selectedTypes, selectedColors);
  }, [selectedTypes, selectedColors, products]);

  useEffect(
    () =>
      async function getProductTypes() {
        const res = await axios.get("../api/types");
        // console.log("type:", res.data);
        setProductTypes(res.data);
      },
    []
  );

  // useEffect(
  //   () =>
  //     async function getColors() {
  //       const res = await axios.get("../api/colors");
  //       console.log("color:", res.data);
  //       setProductColors(res.data);
  //     },
  //   []
  // );

  useEffect(
    () =>
      async function getProducts() {
        const res = await axios.get("../api/collections");
        // console.log("product:", res.data);
        setProducts(res.data);
      },
    []
  );

  useEffect(() => {
    if (selectedTypes.length === 0 && selectedColors.length === 0) {
      setFinalProducts(products);
    } else {
      setFinalProducts(filteredProducts);
    }
  }, [filteredProducts, products]);

  console.log(selectedTypes);
  console.log(selectedColors);
  console.log(filteredProducts);
  console.log(finalProducts);
  console.log(products);

  return (
    <div className="flex min-h-screen w-screen flex-col items-center py-24 px-20">
      <h1 className="mb-16 text-5xl capitalize">All Products</h1>
      <div className="w-full grid grid-cols-5 gap-5">
        <SidebarCollections>
          PRODUCT TYPE
          <div className="mt-4">
            <ul className="flex flex-wrap gap-2">
              {productTypes.map((type) => (
                <div
                  key={type.id}
                  className="relative"
                  onClick={() => handleAddFilter(type.id, "type")}
                >
                  <li
                    className={`capitalize border border-1 hover:cursor-pointer ${
                      type.selected ? "border-black" : "border-neutral-200"
                    }  py-1 px-4`}
                  >
                    {type.name}
                  </li>
                  {type.selected && <DeleteIcon />}
                </div>
              ))}
            </ul>
          </div>
          <div className="mt-10">
            COLOR
            <div className="mt-4">
              <ul className="flex flex-wrap gap-2">
                {colorData.map((color, index) => (
                  <li
                    key={index}
                    className="relative"
                    // onClick={() => handleAddFilter(color.id, "color")}
                  >
                    <div
                      className={`w-24 
                      border 
                      border-1 
                      hover:cursor-pointer 
                      ${color.selected ? "border-black" : "border-neutral-200"} 
                      py-1 
                      px-3`}
                    >
                      <div className="flex items-center">
                        {color.image && (
                          <span className="overflow-hidden w-3 h-3 rounded-full border border-1 border-neutral-700">
                            <Image
                              width={10}
                              height={10}
                              src={color.image}
                              alt={color.name}
                            ></Image>
                          </span>
                        )}
                        {color.code && (
                          <span
                            className={`bg-[${color.code}] w-3 h-3 rounded-full border border-1 border-neutral-700`}
                          ></span>
                        )}
                        <span className="ml-1 capitalize">{color.name}</span>
                      </div>
                    </div>
                    {color.selected && <DeleteIcon />}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex mt-10 justify-end gap-2">
            <button className="py-2 px-3 ">Reset to default</button>
            <button className="py-2 px-3 bg-black text-white">Finished</button>
          </div>
        </SidebarCollections>
        <ListCollections>
          <div className="flex justify-between">
            {(selectedTypes.length !== 0 || selectedColors.length !== 0) &&
            filteredProducts.length === 0 ? (
              <div>0 products</div>
            ) : (
              <div>{finalProducts.length} products</div>
            )}
            <div>Recommended</div>
          </div>

          <div className="mt-12 grid grid-cols-4 gap-5">
            {(selectedTypes.length !== 0 || selectedColors.length !== 0) &&
            filteredProducts.length === 0 ? (
              <NoProduct />
            ) : (
              finalProducts.map((product) => (
                <div key={product.id} className="flex flex-col gap-4">
                  <div className="w-full h-96">
                    <Image
                      src={product.images[0]}
                      width={100}
                      height={384}
                      alt={product.name}
                      layout="responsive"
                    ></Image>
                  </div>
                  <div className="pl-6">{product.name}</div>
                  <div className="pl-6 leading-none">{product.price}</div>
                </div>
              ))
            )}
          </div>
        </ListCollections>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import { productType, color as colorData } from "../mockdata";
import SidebarCollections from "../components/SidebarCollections";
import ListCollections from "../components/ListCollections";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import DeleteIcon from "../components/DeleteIcon";

export default function Collections() {
  const [products, setProducts] = useState([]);
  const [productTypes, setProductTypes] = useState([]);
  const [filters, setFilters] = useState([]);
  const [selected, setSelected] = useState(false);

  const colorName = colorData.map((color, index) => (
    <li
      key={index}
      className="w-24 border border-1 border-neutral-200 py-1 px-3"
    >
      <div className="flex items-center">
        {color.src && (
          <span className="w-3 h-3 rounded-full border border-1 border-neutral-700">
            <img src={color.src}></img>
          </span>
        )}
        {color.code && (
          <span
            className={`bg-[${color.code}] w-3 h-3 rounded-full border border-1 border-neutral-700`}
          ></span>
        )}
        <span className="ml-1">{color.name}</span>
      </div>
    </li>
  ));

  function handleAddFilter(typeId) {
    try {
      console.log(typeId);

      // const newProductType = [...productTypes];
      // const selectedType = newProductType.find((type) => type.id === typeId);

      async function selectProductTypes(typeId) {
        try {
          const res = await axios.put(`../api/productTypes/${typeId}`, {
            selected: !selected,
          });
          // setProductTypes(res.data);
          setSelected(!selected);
        } catch (error) {
          console.error("Error updating product type:", error);
        }
      }

      selectProductTypes(typeId);
    } catch (error) {
      console.error("Error adding filter:", error);
    }
  }

  useEffect(
    () =>
      async function getProductTypes() {
        const res = await axios.get("../api/productTypes");
        // console.log(res.data);
        setProductTypes(res.data);
      },
    []
  );

  useEffect(
    () =>
      async function getProducts() {
        const res = await axios.get("../api/collections");
        // console.log(res.data);
        setProducts(res.data);
      },
    []
  );

  console.log(selected);

  return (
    <div className="flex min-h-screen w-screen flex-col items-center py-24 px-20">
      <h1 className="mb-16 text-5xl capitalize">All Products</h1>
      <div className="w-full grid grid-cols-5 gap-5">
        <SidebarCollections>
          PRODUCT TYPE
          <div className="mt-4">
            <ul className="flex flex-wrap gap-2">
              {productTypes.map((type) => (
                // <li
                //   key={type.id}
                //   className="capitalize border border-1 border-neutral-200 py-1 px-4 "
                // >

                <div
                  key={type.id}
                  className="relative"
                  onClick={() => handleAddFilter(type.id)}
                >
                  <li
                    className={`capitalize border border-1 hover:cursor-pointer ${
                      type.selected ? "border-black" : "border-neutral-200"
                    }  py-1 px-4`}
                  >
                    {type.type_name}
                  </li>
                  {type.selected && <DeleteIcon />}
                </div>
              ))}
            </ul>
          </div>
          <div className="mt-10">
            COLOR
            <div className="mt-4">
              <ul className="flex flex-wrap gap-2">{colorName}</ul>
            </div>
          </div>
          <div className="flex mt-10 justify-end gap-2">
            <button className="py-2 px-3 ">Reset to default</button>
            <button className="py-2 px-3 bg-black text-white">Finished</button>
          </div>
        </SidebarCollections>
        <ListCollections>
          <div className="flex justify-between">
            <div>{products.length} products</div>
            <div>Recommended</div>
          </div>

          <div className="mt-12 grid grid-cols-4 gap-5">
            {products.map((product) => (
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
            ))}
          </div>
        </ListCollections>
      </div>
    </div>
  );
}

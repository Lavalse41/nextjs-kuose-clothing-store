"use client";

import { productType, color as colorData } from "../mockdata";
import SidebarCollections from "../components/SidebarCollections";
import ListCollections from "../components/ListCollections";
import axios from "axios";
import { useEffect } from "react";

export default function Collections() {
  const product = productType.map((type, index) => (
    <li key={index} className="border border-1 border-black py-1 px-4">
      {type}
    </li>
  ));

  const colorName = colorData.map((color, index) => (
    <li key={index} className="w-24 border border-1 border-black py-1 px-3">
      <div className="flex items-center">
        {color.src && (
          <span className="w-3 h-3 rounded-full border border-1 border-black">
            <img src={color.src}></img>
          </span>
        )}
        {color.code && (
          <span
            className={`bg-[${color.code}] w-3 h-3 rounded-full border border-1 border-black`}
          ></span>
        )}
        <span className="ml-1">{color.name}</span>
      </div>
    </li>
  ));

  useEffect(
    () =>
      async function getProducts() {
        const res = await axios.get("../api/collections");
        console.log(res.data);
      },
    []
  );

  return (
    <div className="flex min-h-screen w-screen flex-col items-center py-24 px-20">
      <h1 className="mb-16 text-5xl capitalize">All Products</h1>
      <div className="w-full grid grid-cols-5 gap-5">
        <SidebarCollections>
          PRODUCT TYPE
          <div className="mt-4">
            <ul className="flex flex-wrap gap-2">{product}</ul>
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
            <div>X products</div>
            <div>Recommended</div>
          </div>

          <div className="mt-12 grid grid-cols-4 gap-5">
            <div className="flex flex-col gap-4">
              <div className="bg-black w-full h-96"></div>
              <div className="pl-6">Ribbon Dress</div>
              <div className="pl-6 leading-none">3515</div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-black w-full h-96"></div>
              <div className="pl-6">Ribbon Dress</div>
              <div className="pl-6">3515</div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-black w-full h-96"></div>
              <div className="pl-6">Ribbon Dress</div>
              <div className="pl-6">3515</div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-black w-full h-96"></div>
              <div className="pl-6">Ribbon Dress</div>
              <div className="pl-6">3515</div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-black w-full h-96"></div>
              <div className="pl-6">Ribbon Dress</div>
              <div className="pl-6">3515</div>
            </div>
          </div>
        </ListCollections>
      </div>
    </div>
  );
}

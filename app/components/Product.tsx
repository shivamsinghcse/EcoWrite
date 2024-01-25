import React from "react";
import packimage8 from "../../images/bioq-plantable-paper-pen-pencil-pack-of-8-eco-friendly-gift-box-recycled-paper-packaging-grow-plants-from-pens-pencils-100-bio-degradable-plantable-stationery-k-628819-640x640.jpg";
import packKit from "../../images/2-640x640.jpg"

import Image from "next/image";
const productcard = [
  {
    Name: "Ecowrite pack 8",
    imageLink: packimage8,
    quantity: 8,
    price: 80.0,
  },
  {
    Name: "Ecowrite pack 8",
    imageLink: packKit,
    quantity: 16,
    price: 160.0,
  },
  
];

export function Product() {
  return (
    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      {productcard.map((item, index) => (
        <>
          <div key={index} className="rounded-md border group hover:bg-green-800 hover:text-white  duration-200	">
            <Image
              src={item.imageLink}
              alt="Laptop"
              className=" w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
            ></Image>
            <div className="p-4">
              <h1 className="inline-flex items-center text-lg font-semibold">
                {item.Name}
              </h1>

              <div className="mt-3 flex items-center space-x-2">
                <span className="block text-sm font-semibold">Colors : </span>
                <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-red-700"></span>
                <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-blue-700"></span>
                <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-black"></span>
              </div>
              <div className="mt-5 flex items-center space-x-2">
                <div className="block text-sm font-semibold">
                  Quantity: {item.quantity}{" "}
                </div>
              </div>
              <div className="mt-5 flex items-center space-x-2">
                <div className="block text-lg font-semibold">
                  Price: ₹{item.price}
                </div>
              </div>

              <button
                type="button"
                className="mt-4 w-full rounded-sm bg-green-950 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 group-hover:bg-white group-hover:text-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

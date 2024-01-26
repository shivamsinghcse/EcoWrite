import Image from "next/image";
import { Navbar } from "./components/Navbar";
import Carousel from "./components/Carousel";
import penImage from "../images/8bd8ca9a-9a64-412b-9ab4-010ee945f909.png";
import brownBox from "../images/4511.jpg";
import arrow from "../images/ed-literacy-app_summary_curve-lg.svg"
import { Product } from "./components/Product";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Carousel></Carousel>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 mx-10 my-8 md:h-[550px] overflow-hidden ">
        <div className="bg-green-600" id='About'>
          <h1 className="text-2xl p-8">
            Welcome to <b className="text-white">EcoWrite</b>
          </h1>
          <p className="text-pretty   p-5 rounded-2xl text-white">
          Discover Ecowrite, where sustainability meets style. Our recycled paper pens are more than writing tools; they're a commitment to a greener future. Crafted with care, these pens reduce material demand and feature a biodegradable design with seeds that transform into plants, closing the loop on waste.

Sustainability is at our core, from manufacturing to disposal. Choosing Ecowrite is a statement, a conscious decision to integrate sustainability into your daily life. Make a positive impact with every stroke. Choose Ecowrite for a writing experience that leaves a mark on paper, not on the planet.
          </p>
        </div>
        <div className=" grid items-center justify-center">
          <Image
            src={penImage}
            width={1405}
            height={1405}
            className="h-[90%] w-[90%] "
            alt="Pen image"
          ></Image>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-green-700 font-bold text-3xl">Why choose us?</h1>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 bg-green-600 text-white mx-10 my-5 rounded-xl">
          <div className="p-5">
            <Image src={brownBox} alt="Brown box" className="rounded-md"></Image>
          </div>
          <div className="p-5">
            <h2 className="text-xl font-bold">
              Ecowrite: Sustainable Pens for a Greener Tomorrow
            </h2>
            <ul className="text-start list-disc my-5 text-wrap list-inside lg:my-16">
              <li>
                <strong>Discover Ecowrite:</strong> Sustainability meets style
                in our recycled paper pens.
              </li>
              <li>
                <strong>Commitment to a Greener Future:</strong> Ecowrite pens
                signify a commitment to sustainability.
              </li>
              <li>
                <strong>Crafted from Recycled Paper:</strong> Reduces the demand
                for new materials, promoting eco-friendliness.
              </li>
              <li>
                <strong>Biodegradable Design with Seeds:</strong> Transforms
                into plants or flowers when disposed of, closing the waste loop.
              </li>
              <li>
                <strong>Sustainable Manufacturing:</strong> Ecowrite ensures
                eco-friendly practices from creation to disposal.
              </li>
              <li>
                <strong>Lower Carbon Footprint:</strong> A writing instrument
                that cares for the environment and contributes to biodiversity.
              </li>
              <li>
                <strong>Conscious Lifestyle Choice:</strong> Choosing Ecowrite
                is a conscious decision to integrate sustainability into daily
                life.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center my-6">
        <h1 className="text-green-700 font-bold text-3xl" id='Product'>Meet our Products</h1>
        <div className="flex ">
        <div className="sm:hidden                                   md:block md:w-40 sm:object-cover">
          <Image src={arrow} alt="arrow"   ></Image>
        </div>
        <Product></Product>
        </div>
      </div>
      <div className="text-center bg-green-700">
        <h1 className="text-white font-bold text-3xl" id="contact">

        Contact Us
        </h1>
        <div>
          <b>Email: Order@ecowrite.com</b>
          <br></br>
          <b>Mobile No: +91 9532340629</b>
          <br></br>
          <b>Made with Love!❤️ Team EcoWrite</b>
        </div>
        </div>
    </>
  );
}

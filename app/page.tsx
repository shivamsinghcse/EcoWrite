import Image from "next/image";
import { Navbar } from "./components/Navbar";
import Carousel from "./components/Carousel";
import penImage from "../images/8bd8ca9a-9a64-412b-9ab4-010ee945f909.png";
import brownBox from "../images/4511.jpg";
import { Product } from "./components/Product";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Carousel></Carousel>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 mx-10 my-8 md:h-[550px] overflow-hidden ">
        <div className="">
          <h1 className="text-2xl">
            Welcome to <b className="text-green-600">EcoWrite</b>
          </h1>
          <p className="text-pretty my-5 bg-green-600 p-10 rounded-2xl text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, vel
            at. Magni temporibus voluptatibus provident fugit et molestias
            earum, eveniet facere fugiat? Labore unde molestiae ab, vitae
            distinctio nihil id quaerat placeat vel obcaecati perspiciatis
            debitis repellat minima sequi. Voluptatem accusamus cumque corporis
            reiciendis tenetur amet minima rerum ducimus esse fuga, distinctio
            expedita! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Facere, maxime. Iusto veritatis, sed illo cum sunt nulla alias
            blanditiis officiis. Facere ea animi amet quam aut ad blanditiis,
            placeat est iusto dolores quia, a enim mollitia voluptates
            perspiciatis cupiditate fuga deserunt doloremque accusantium numquam
            nobis? Voluptatum ipsam cupiditate sequi alias repellendus fugiat
            commodi magni, iste impedit sed vero animi doloremque nostrum
            beatae, voluptates saepe quasi, at voluptas. Eveniet est veniam
            repellat, dolor, impedit inventore odio eligendi dolorum provident
            laborum optio modi rerum perspiciatis! Quis veniam facere quas
            laborum neque quae commodi hic provident, aspernatur suscipit
            pariatur sint minima rerum perspiciatis!
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
            <ul className="text-start list-disc my-5 text-wrap list-inside">
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
        <h1 className="text-green-700 font-bold text-3xl">Meet our Products</h1>
        <Product></Product>
      </div>
      <div className="text-center">
        <h1 className="text-green-700 font-bold text-3xl">

        Contact Us
        </h1>
        </div>
    </>
  );
}

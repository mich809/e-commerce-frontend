import model from "../assets/model.webp";
import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";

function ProductPage() {
  const [isBlack, setBlack] = useState(false);
  const [isFavorite, setFavorite] = useState(false);

  function changeColor() {
    setBlack((isBlack) => !isBlack);
  }

  function favorite() {
    setFavorite((isFavorite) => !isFavorite);
  }

  return (
    <>
      <div className="flex flex-col  md:flex-row md:mt-4 md:gap-x-2">
        <img src={model} className="h-screen md:w-1/2" />

        <div className="flex flex-col h-screen md:w-1/2  ">
          <div className="flex font-medium md:flex-col">
            <h1 className="md:text-4xl">Jacket styleRo</h1>
            <h1 className="ml-auto font-bold md:m-0 md:mt-4">$164.00</h1>
          </div>
          <p className="text-justify my-4 md:w-3/4 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit illum
            explicabo quos molestiae commodi voluptatem alias quibusdam autem
            eaque eum!
          </p>
          <div className="flex justify-start mx-3 gap-x-1.5  md:hidden">
            <button
              className=" border-2 border-black py-1  px-4  "
              style={{
                backgroundColor: isBlack ? "black" : "",
                color: isBlack ? "white" : "",
              }}
              onClick={changeColor}
            >
              XS
            </button>
            <button className=" border-2 border-black  py-1 px-4  ">S</button>
            <button className=" border-2 border-black  py-1 px-4  ">M</button>
            <button className=" border-2 border-black  py-1 px-4  ">L</button>
            <button className=" border-2 border-black  py-1 px-4  ">XL</button>
          </div>

          <select className="invisible md:visible w-1/2">
            <option value="Small">SMALL</option>
            <option value="saab">MEDIUM</option>
            <option value="fiat">LARGE</option>
            <option value="audi">EXTRA LARGE</option>
          </select>

          <div className="flex justify-evenly md:justify-start md:gap-x-1.5 md:pt-6 ">
            <button
              className="bg-gray-200 py-2 px-4  hover:bg-gray-300"
              onClick={favorite}
            >
              <AiFillHeart
                className="text-2xl "
                style={{
                  color: isFavorite ? "red" : "white",
                }}
              />
            </button>
            <button className="bg-zinc-700 text-white py-2 px-4 w-96 hover:bg-zinc-900">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductPage;

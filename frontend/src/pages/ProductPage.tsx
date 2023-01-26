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
      <div className="flex flex-col h-full md:flex-row md:mt-8">
        <img src={model} className="w-full  object-cover md:w-1/2 md:h-fit" />

        <div className="my-3 flex flex-col">
          <div className="flex mx-3 font-medium md:flex-col">
            <h1 className="md:text-4xl">Jacket styleRo</h1>
            <h1 className="ml-auto font-bold md:m-0 md:mt-4">$164</h1>
          </div>
          <p className="text-justify mx-3 my-4 md:w-3/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit illum
            explicabo quos molestiae commodi voluptatem alias quibusdam autem
            eaque eum!
          </p>
          <div className="flex justify-start mx-3 gap-x-1 p-2">
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
          <div className=" flex justify-evenly">
            <button className="bg-gray-200 py-2 px-4  " onClick={favorite}>
              <AiFillHeart
                className="text-2xl "
                style={{
                  color: isFavorite ? "red" : "white",
                }}
              />
            </button>
            <button className="bg-black text-white py-2 px-4 w-52 ">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductPage;

import test from "../assets/image1.avif";

function CheckOutPage() {
  return (
    <>
      <div className="h-screen bg-[#f6f6f6]">
        <h1 className="text-[#253746] font-Cor text-4xl font-medium ml-4 pt-4 pb-10">
          Shopping Bag
        </h1>
        <div className="flex-col w-full md:my-10 h-screen ">
          <div className="flex-col pb-10">
            <div className="flex ">
              <div>
                <img
                  src={test}
                  alt=""
                  className="w-36  md:mx-10  md:w-52 md:h-52"
                />
              </div>
              <div className="pl-4 flex-1 bg-[#fff] ">
                <p className="text-lg font-thin">Men's</p>
                <p className="mb-4 text-[#253746] font-Cor text-xl leading-[1.125] font-semibold ">
                  Linen Button-Up Shirt
                </p>
                <p className="text-sm">SKU: 53255423</p>
                <p className="text-sm">White,M</p>
                <p className="text-sm">$80</p>
              </div>
            </div>

            <div className="inline-flex  w-full" role="group">
              <button
                type="button"
                className="px-4 py-4 w-1/2  grow text-sm font-bold tracking-[.04rem] text-[#253746] bg-white border border-[#ccc]"
              >
                Edit
              </button>
              <button
                type="button"
                className="px-4 py-4 w-1/2  grow text-sm font-bold tracking-[.04rem] text-[#253746] bg-white border border-[#ccc]"
              >
                Remove
              </button>
            </div>
          </div>

          {/* <div className="px-8 border-2 pt-12">
            <div className="flex justify-between font-bold">
              <p>Subtotal</p>
              <p>$80.00</p>
            </div>
          </div>
          <div className="flex justify-center pt-4">
            <button className="bg-[#00782e] w-5/6 text-white font-bold py-4 px-4  ">
              Button
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
}
export default CheckOutPage;

import test from "../assets/image1.avif";

function CheckOutPage() {
  return (
    <div className="h-screen bg-[#f6f6f6] md:bg-white flex flex-col ">
      <div className="flex flex-col md:flex-row w-full md:my-10 h-screen ">
        <div className="md:w-8/12 ">
          <div className="flex flex-col mb-10  md:w-3/4 md:m-auto">
            <h1 className="text-[#253746] font-Cor text-4xl font-medium ml-4 pt-4 pb-10 ">
              Shopping Bag
            </h1>
            <div className="flex ">
              <div>
                <img
                  src={test}
                  alt=""
                  className="w-36 md:mx-2 md:w-52 md:h-52"
                />
              </div>
              <div className=" flex-1 md:flex-none bg-[#fff] md:pl-2 border-2 md:w-4/6">
                <div className="pl-2 md:pl-0">
                  <p className="text-lg font-thin">Men's</p>
                  <p className="mb-4 text-[#253746] font-Cor text-xl leading-[1.125] font-semibold ">
                    Linen Button-Up Shirt
                  </p>
                  <p className="text-sm">SKU: 53255423</p>
                  <p className="text-sm">White,M</p>
                  <p className="text-sm">$80</p>
                </div>
                <div className="inline-flex  w-full md:w-1/2" role="group">
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
            </div>
          </div>
        </div>
        <div className="px-8  pt-12 md:w-4/12 md:bg-[#f6f6f6]">
          <div className="flex justify-between font-bold">
            <p>Subtotal</p>
            <p>$80.00</p>
          </div>
          <div className="flex justify-center pt-4">
            <button className="bg-[#00782e] w-5/6 text-white font-bold py-4 px-4  ">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CheckOutPage;

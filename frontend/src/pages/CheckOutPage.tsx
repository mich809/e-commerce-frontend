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
            <div className="flex border-b-[1px] border-[#ccc]">
              <div>
                <img
                  src={test}
                  alt=""
                  className="w-36 md:mx-2 md:w-52 md:h-52"
                />
              </div>
              <div className="flex flex-col flex-1 justify-between md:flex-none bg-[#fff] md:pl-2  md:w-4/6">
                <div className="pl-2 md:pl-0">
                  <p className="text-lg font-thin">Men's</p>
                  <p className=" md:pb-0 text-[#253746] font-Cor text-xl leading-[1.125] font-semibold ">
                    Linen Button-Up Shirt
                  </p>
                  <p className="text-sm">SKU: 53255423</p>
                  <p className="text-sm">White,M</p>
                  <p className="text-sm">$80</p>
                </div>
                <div className=" w-full md:w-5/6 md:pb-4 " role="group">
                  <button
                    type="button"
                    className="px-4 py-4 w-1/2 hover:text-white hover:bg-[#50687b] grow text-sm font-bold tracking-[.04rem] text-[#253746] bg-white border border-[#ccc]"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="px-4 py-4 w-1/2 hover:text-white hover:bg-[#50687b] grow text-sm font-bold tracking-[.04rem] text-[#253746] bg-white border border-[#ccc]"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex md:flex-col px-8  pt-12 md:w-4/12 md:bg-[#f6f6f6] md:h-screen">
          <div className="flex justify-between font-bold md:order-2 md:w-4/5 m-auto w-8/12 border-t-2">
            <p>Subtotal</p>
            <p>$80.00</p>
          </div>
          <div className="flex justify-center pt-4 md:flex-col md:items-center md:order-1">
            <button className="bg-[#00782e]  w-4/6 md:w-5/6 text-white font-bold py-4 px-4  ">
              Checkout
            </button>

            <div
              className="hidden w-1/2 md:block md:text-center md:my-4 before:-ml-[50%] before:right-5 before:bg-[#ccc] before:inline-block before:h-[1px] before:relative before:align-middle before:w-1/2   after:-mr-[50%] after:left-5 after:bg-[#ccc] after:inline-block after:h-[1px] after:relative
            after:align-middle after:w-1/2"
            >
              <span>Or</span>
            </div>
            <button className="hidden md:flex justify-center border-[1px]  bg-transparent border-black  w-4/6 md:w-5/6 text-white font-bold py-4 px-4  ">
              <img
                src="https://www.abercrombie.com/anf/da3f072c/img/global/pp-logo-200px.png"
                alt=""
                className="h-6 "
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CheckOutPage;

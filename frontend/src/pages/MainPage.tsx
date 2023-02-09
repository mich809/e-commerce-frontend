import mainImage from "../assets/main.jpg";
import image1 from "../assets/image1.avif";

function MainPage() {
  return (
    <>
      <div className="h-96 w-full relative  flex ">
        <img
          src={mainImage}
          alt="black woman with glasses"
          className="w-full h-full object-cover absolute mix-blend-overlay "
        />

        <div className="my-4 mx-4 self-end">
          <h1 className="text-white text-5xl">
            New Autumn <br />
            2023 Collection
          </h1>
          <p className="text-white text-2xl font-light">
            Choose the perfect outfit in our store
          </p>
        </div>
      </div>
      <div className="flex flex-col h-screen my-6  ">
        <div className="flex flex-col items-center gap-2 ">
          {" "}
          <img src={image1} alt="" className="object-contain w-11/12 mx-auto" />
          <h2 className="tracking-widest text-xl">TREND EDIT</h2>
          <h1 className="font-semibold text-3xl ">NAUTICAL PREP</h1>
          <button className="bg-transparent  font-semibold py-2 px-10 my-3 border border-black">
            SHOP WOMEN'S
          </button>
        </div>
      </div>
    </>
  );
}
export default MainPage;

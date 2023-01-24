import mainImage from "../assets/main.jpg";

function MainPage() {
  return (
    <>
      {
        <div className="h-96 w-full relative flex items-end">
          <img
            src={mainImage}
            alt="black woman with glasses"
            className="w-full h-full object-cover absolute mix-blend-overlay"
          />
          <div className="my-4 mx-2">
            <h1 className="text-white text-5xl">
              New Autumn <br />
              2023 Collection
            </h1>
            <p className="text-white text-2xl font-light">
              Choose the perfect outfit in our store
            </p>
          </div>
        </div>
      }
    </>
  );
}
export default MainPage;

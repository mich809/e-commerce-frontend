import { Link } from "react-router-dom";
import { BsHeart, BsFillBagFill, BsPerson } from "react-icons/bs";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { GiHamburgerMenu } from "react-icons/gi";

function NavBar() {
  return (
    <>
      <header>
        <nav>
          <div className=" text-2xl  h-10 flex sm:justify-end  justify-around sm:mr-5  items-center  gap-x-4  bg-[#f6f6f6] ">
            <button className="hover:text-red-600 sm:hidden">
              <GiHamburgerMenu />
            </button>
            <button className="hover:text-red-600">
              <HiMagnifyingGlass />
            </button>
            <button className="hover:text-red-600">
              <BsPerson />
            </button>
            <button className="hover:text-red-600">
              <BsHeart />
            </button>
            <button className="hover:text-red-600">
              <BsFillBagFill />
            </button>
          </div>
          <div className="h-20 flex justify-center items-center ">
            <Link
              to="#"
              className="text-[#253746] tracking-widest text-2xl font-semibold uppercase"
            >
              Brand
            </Link>
          </div>

          <div className="flex justify-center invisible sm: visible ">
            <ul className="flex gap-7 ">
              <li>
                <Link
                  to="#"
                  className="text-base text-zinc-500 tracking-[0.2em] hover:text-black hover:font-medium "
                >
                  New
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-base text-zinc-500 tracking-[0.2em]  hover:text-black hover:font-medium  "
                >
                  Men
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-base text-zinc-500 tracking-[0.2em]  hover:text-black hover:font-medium  "
                >
                  Women
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-base text-zinc-500 tracking-[0.2em]  hover:text-black hover:font-medium "
                >
                  Kids
                </Link>
              </li>
            </ul>{" "}
          </div>
        </nav>
        <section
          id="mobile-menu"
          className="absolute top-0 bg-black w-full text-5xl hidden flex-col justify-content-center origin-top animate-open-menu "
        >
          {" "}
          <button className="sm:hidden text-white">
            <GiHamburgerMenu />
          </button>
          <nav className="flex flex-col min-h-screen items-center py-8">
            <Link to="#" className="w-full text-center py-6 text-white">
              New
            </Link>
            <Link to="#" className="w-full text-center py-6 text-white">
              Men
            </Link>
            <Link to="#" className="w-full text-center py-6 text-white">
              Women
            </Link>
            <Link to="#" className="w-full text-center py-6 text-white">
              Kids
            </Link>
          </nav>
        </section>
      </header>
    </>
  );
}
export default NavBar;

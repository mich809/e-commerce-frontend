import { Link } from "react-router-dom";

import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CgMenuRightAlt } from "react-icons/Cg";
import { useState } from "react";
import mainImage from "../assets/main.jpg";

function NavBar() {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <header>
        <nav>
          <div className=" text-2xl flex justify-between px-3 py-4 sm:py-0">
            <h1 className="font-bold">Discover</h1>
            <div className="">
              <button className="sm:invisible">
                <CgMenuRightAlt onClick={toggleMenu} />
              </button>
              <button>
                <HiOutlineShoppingBag />
              </button>
            </div>
          </div>

          <div className="sm:flex sm:justify-center sm:visible hidden  ">
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

        {toggle && (
          <section
            id="mobile-menu"
            className={
              toggle
                ? "z-10 absolute min-h-screen top-0 bg-white w-full text-2xl sm:hidden flex-col justify-content-center origin-left animate-open-menu"
                : "hidden"
            }
          >
            {" "}
            <button className="text-black h-10  flex place-content-end place-items-center w-full px-9 ">
              <CgMenuRightAlt onClick={toggleMenu} />
            </button>
            <nav className="flex flex-col  items-center py-8 sm:hidden ">
              <form className="rounded-2xl flex p-1  border-2 border-black ">
                <input
                  type="search"
                  placeholder="search"
                  className="m-0 py-2 px-2 "
                />
              </form>

              <Link to="#" className="w-full text-center py-6 text-black">
                New
              </Link>
              <Link to="#" className="w-full text-center py-6 text-black">
                Men
              </Link>
              <Link to="#" className="w-full text-center py-6 text-black">
                Women
              </Link>
              <Link to="#" className="w-full text-center py-6 text-black">
                Kids
              </Link>
            </nav>
          </section>
        )}
      </header>
    </>
  );
}
export default NavBar;

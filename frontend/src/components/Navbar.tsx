import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

function NavBar() {
  return (
    <>
      <header className="absolute top-0 left-0 w-full h-20 py-5 px-10 flex justify-between items-center bg-white">
        <Link to="#" className="text-[#253746]">
          Brand
        </Link>
        <nav>
          <div className="group">
            <ul className="navigation">
              <li>
                <Link to="#">Men's</Link>
              </li>
              <li>
                <Link to="#">Women's</Link>
              </li>
              <li>
                <Link to="#">Kids</Link>
              </li>
            </ul>
          </div>
          <div className="search">
            <span className="icon">
              <CiSearch />
              <AiOutlineClose />
            </span>
          </div>
        </nav>
      </header>
    </>
  );
}
export default NavBar;

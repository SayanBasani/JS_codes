import { useState } from 'react';

export default function HeaderMain() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);

  return (
    <header className="py-1 mb-1 border-b " >
      <div className="container-fluid grid grid-cols-[200px,2fr] gap-3 items-center">

        {/* Logo and Dropdown Menu */}
        <div className="relative flex justify-center items-center">
          <a
            href="#"
            className="flex items-center mb-2 lg:mb-0 text-gray-900 no-underline"
            onClick={() => setDropdownOpen(!isDropdownOpen)}
          >
            <i className="bi bi-brilliance text-[40px] bg-slate-300 rounded-md pl-2 pr-2">
              sayan
            </i>
          </a>
        </div>

        <div className="pr-[1%] grid gap-[5%] items-center justify-center grid-cols-[1fr,40px]">
          <form className="w-full mr-3 left-0" role="search">
            <input
              type="search"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div className="relative ">
            <a
              href="#"
              className="block text-gray-900 no-underline"
              onClick={() => setProfileDropdownOpen(!isProfileDropdownOpen)}
            >
              <i className="bi bi-person-circle text-[40px]"></i>

              {/* <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-full"
              /> */}
            </a>
            {isProfileDropdownOpen && (
              <ul className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
                <li><a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="#">New project...</a></li>
                <li><a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="#">Settings</a></li>
                <li><a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="#">Profile</a></li>
                <li><hr className="my-1 border-gray-300" /></li>
                <li><a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="#">Sign out</a></li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

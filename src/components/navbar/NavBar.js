import "./NavBar.css";
import { Disclosure } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import CartWidget from "../cartWidget/CartWidget"
import { useState, useEffect } from 'react'
import { getCategories } from "../../asyncmock"
import { Link, NavLink } from 'react-router-dom'


const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categories) => {
      setCategories(categories);
    });
  }, []);
  return (
    <Disclosure as="nav" className="navbar">
      {({ open }) => (
        <>
          <div className="container mx-auto pl-5 pr-5">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="navbar-logo flex-shrink-0 flex items-center">
                  <a href="/" className="navbar-logo-link">
                    <img
                      className="inline-block h-8 w-auto mr-5"
                      src="images/logo-gaming-house.svg"
                      alt="Workflow"
                    />
                    <h1 className="inline-block text-white">Gaming House</h1>
                  </a>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {categories.map((cat) => (
                      <NavLink
                        key={cat.id}
                        to={`/category/${cat.id}`}
                        className="text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        {cat.description}
                      </NavLink>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                  <CartWidget />
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1"></div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default NavBar;

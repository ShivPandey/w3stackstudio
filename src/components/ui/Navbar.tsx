"use client";
import { useState, useEffect, useRef, useReducer } from "react";
import Link from "next/link";
import Image from "next/image";
import { Divide as Hamburger } from "hamburger-react";

// dropdown state types
type DropdownState = string | null;

// action type for reducer
type DropdownAction = { type: "TOGGLE"; payload: string } | { type: "CLOSE" };

// reducer function for managing the dropdown state
const dropdownReducer = (state: DropdownState, action: DropdownAction) => {
  switch (action.type) {
    case "TOGGLE":
      return state === action.payload ? null : action.payload;
    case "CLOSE":
      return null;
    default:
      return state;
  }
};

const Navbar = () => {
  console.log("hello");
  const [openDropdown, dispatch] = useReducer(dropdownReducer, null);
  const menuRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  // handle clicks outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event?.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        dispatch({ type: "CLOSE" });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);
  const [isOpen, setOpen] = useState(false);
  // const navbarHandler = () => {
  //   setOpen(!isOpen);
  // };

  return (
    <>
      <div
        ref={menuRef}
        className="navbar fixed z-50 bg-white/80 backdrop-blur-sm justify-between"
      >
        <div className="flex-1">
          <Link href="/" className="relative w-40 h-16 md:w-56 lg:w-64">
            <Image
              src="/images/logos/w3-l.png"
              alt="W3 Stack Studio"
              fill
              priority
              className=" object-contain"
            />
          </Link>
        </div>
        {/* main navigation */}
        <div className="flex-none">
          {/* navigation toggle button */}
          <div className="flex lg:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
          <div className="hidden lg:flex lg:flex-col">
            <div>Top</div>
            <div className="main-nav">
              <ul className="nav">
                <li className="">
                  <div
                    onClick={() =>
                      dispatch({ type: "TOGGLE", payload: "who-we-are" })
                    }
                  >
                    Who we are
                  </div>
                </li>
                <li>
                  <div
                    onClick={() =>
                      dispatch({ type: "TOGGLE", payload: "services" })
                    }
                  >
                    Services
                  </div>
                </li>
                <li>
                  <Link href="/industries">Industries</Link>
                </li>
                <li>
                  <Link href="/careers">Careers</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* dropdown */}
      {openDropdown === "who-we-are" && (
        <div ref={dropdownRef} className="dropdown-container h-40">
          Who we are
        </div>
      )}
      {openDropdown === "services" && (
        <div ref={dropdownRef} className="dropdown-container h-40">
          Services
        </div>
      )}
      {openDropdown === "industries" && (
        <div ref={dropdownRef} className="dropdown-container h-40">
          Industries
        </div>
      )}
    </>
  );
};
export default Navbar;

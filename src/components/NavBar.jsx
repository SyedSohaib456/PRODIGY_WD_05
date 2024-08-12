import React, { useState } from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import "../styles/Navbar.css"; 
import { FiSearch } from "react-icons/fi";

const Navbar = ({ onSearch }) => {

  const [query, setQuery] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
    
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
    onClose();
  };

  return (
    <>
      <nav className="navbar w-full p-2">
        <div className="navbar-container flex align-middle justify-between">
          <h1 className="navbar-title text-3xl cursor-pointer mr-4">
            SkyScope
          </h1>

          <form
            className="search-form hidden lg:block"
            onSubmit={handleSearchSubmit}
          >
            <input
              type="text"
              value={query}
              onChange={handleSearchChange}
              placeholder="Search for a country..."
              className="input"
              autocomplete="off"
            />
          </form>

         <div className="btn space-x-2   bg-transparent sm:hidden md:hidden lg:inline ">
            <button className="button hidden  sm:hidden md:hidden lg:inline ">Login</button>
           <button className="button hidden sm:hidden md:hidden lg:inline ">Signup</button>
       </div>

          <div className="lg:hidden">

             <FiSearch className="text-2xl" ref={btnRef} onClick={onOpen}  />
          </div>
        </div>
      </nav>

      <Drawer
        
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay bg={'transparent'} className="drop" />
        <DrawerContent  bg={'transparent'} className="drop" >
          <DrawerCloseButton color={'white'} />
          <DrawerHeader color={'white'}>Search</DrawerHeader>

          <DrawerBody>
            <form className="search-form" onSubmit={handleSearchSubmit}>
              <input 
                type="text"
                value={query}
                onChange={handleSearchChange}
                placeholder="Search for a country..."
                className="input"
                autocomplete="off"
              />
            </form>

            <div className="flex mt-96 space-x-4 justify-center text-center items-center align-middle  ">
            <button className="button">Login</button>
            <button className="button">Signup</button>
            </div>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" color={'white'} mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;

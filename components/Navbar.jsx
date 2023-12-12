import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if(window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div className={shadow ? "fixed w-full h-20 shadow-xl z-[100]" : "fixed w-full h-20 z-[100]"}>
      <div className="flex justify-between items-center px-0 2xl:px-16">
        {/* <Image
          src={"/assets/logo/logo.png"}
          alt="/"
          width="78"
          height="20"
        /> */}
        <div>
          <ul className="m-14 flex items-stretch space-x-14 pl-64">
            <Link href="/#home">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Accueil
              </li>
            </Link>
            <Link href="/#about" scroll={false}>
              <li className="ml-10 text-sm uppercase hover:border-b" >A propos</li>
            </Link>
           
            <Link href="/#projects" scroll={false}>
              <li className="ml-10 text-sm uppercase hover:border-b">
                Mes Projets
              </li>
            </Link>
            <Link href="/#contact" scroll={false}>
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden cursor-pointer pr-3">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-screen bg-black/70" : ''
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src={"/assets/logo/logo.png"}
                width="87"
                height="35"
                alt="/"
              />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <div className="text-black">
                <AiOutlineClose / >
                </div>
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4 text-black">
                {" "}
                Let's build something legendary together{" "}
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col text-black">
            <ul className="uppercase">
              <Link href="/#home" scroll={false}>
                <li onClick={()=> setNav(false)} className="py-3 text-sm">Accueil</li>
              </Link>
              <Link href="/#about" scroll={false}>
                <li onClick={()=> setNav(false)} className="py-3 text-sm">A PROPOS</li>
              </Link>
              <Link href="/#projects" scroll={false}>
                <li onClick={()=> setNav(false)} className="py-3 text-sm">Mes Projets</li>
              </Link>
              <Link href="/#contact" scroll={false}> 
                <li onClick={()=> setNav(false)} className="py-3 text-sm">Contact</li>
              </Link>
            </ul>
            <div className="pt-32 flex items-center justify-between my-4 w-full sm:w-[80%">
              <p className="uppercase tracking-widest text-[#5651e5]">
                {" "}
                Retrouvez moi sur
              </p>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <Link href='https://www.linkedin.com/in/luc-pan-1314b7233/' target="_blank"><FaLinkedinIn /></Link>
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <Link href='https://github.com/LucPan1' target="_blank"> <FaGithub /> </Link>
              </div>

              <a
                    href='/assets/contact/CV.pdf'
                    target='_blank'
                    rel="noopener noreferrer"
                    >
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

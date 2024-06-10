"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

import Nav from "@/components/Nav";
import NavMobile from "@/components/NavMobile";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScoll = () => {
      setActive(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScoll);

    return () => {
      window.removeEventListener("scroll", handleScoll);
    };
  }, []);

  return (
    <header
      className={`${
        active ? "bg-black-heavy py-4" : "bg-none py-8"
      } fixed top-0 w-full z-50 left-0 right-0 transition-all duration-200`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image src="/logo.svg" width={75} height={30} alt="logo" />
          </Link>
          <Nav
            containerStyles="hidden xl:flex gap-x-12 text-white"
            linkStyles="capitalize"
          />
          <ScrollLink to="reservation" smooth={true}>
            <Button variant="orange" size="sm">
              Book a table
            </Button>
          </ScrollLink>
          <NavMobile
            containerStyles="xl:hidden"
            iconStyles="text-3xl"
            linkStyles="uppercase"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

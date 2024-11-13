"use client";
import { Globe, MenuIcon, Search, SquarePen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "./ui/input";

export const navLinks = [
  { name: "Campaigns", path: "/campaigns" },
  { name: "Fundraiser", path: "/fundraiser" },
  { name: "Membership", path: "/membership" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Blog", path: "/blog" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="w-full flex flex-row p-4 justify-between items-center font-circularstdbold">
      <div
        id="brand"
        className="flex flex-row justify-center items-center gap-8"
      >
        <Link href={"/"}>
          <Image
            alt="clampoal logo"
            src={"/assets/logo.svg"}
            width={180}
            height={40}
            className="object-fit object-center"
          />
        </Link>
        <Button
          size={"sm"}
          variant={"outline"}
          className="hidden xl:flex rounded-full text-slate-500 gap-2 px-4"
        >
          <Globe size={15} />
          <span className="">Globe</span>
        </Button>
      </div>
      <div
        id="nav-links"
        className="hidden xl:flex flex-row items-center gap-4 text-md   text-primary-font"
      >
        <Link
          href={"#"}
          className="flex flex-row justify-start items-center gap-2 hover:text-neutral-600 transition ease-in-out delay-100"
        >
          <Search size={15} /> Search
        </Link>
        {navLinks.map((link, index) => {
          return (
            <Link
              key={index + 1}
              className="hover:text-neutral-600 transition ease-in-out delay-100"
              href={link.path}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      <div
        id="nav-buttons"
        className="hidden xl:flex flex-row gap-4 items-center justify-center"
      >
        <div id="start-campaign">
          <Button
            variant={"outline"}
            className="bg-blue-primary text-white hover:bg-slate-100 hover:text-black  flex flex-row items-center justify-center gap-2 px-6 rounded-xl transition ease-in-out delay-100"
          >
            {" "}
            <SquarePen size={18} /> Start a campaign
          </Button>
        </div>
        <div
          id="login-btns"
          className="flex flex-row gap-0 items-center justify-center text-sm"
        >
          <Button
            variant={"outline"}
            className="rounded-xl bg-yellow-primary text-white hover:text-black  hover:bg-slate-100 border-r-0 rounded-r-none px-8 transition ease-in-out delay-100"
          >
            Sign up
          </Button>
          <Button
            variant={"outline"}
            className="rounded-xl bg-blue-primary text-white hover:text-black  hover:bg-slate-100 border-l-0 rounded-l-none px-8 transition ease-in-out delay-100"
          >
            Sign in
          </Button>
        </div>
      </div>
      <Sheet>
        <SheetTrigger className="block xl:hidden">
          <MenuIcon />
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>
              <div
                className="flex flex-col items-start gap-4 text-md  text-primary-font my-4"
              >
                <Input autoFocus={false} placeholder="search. . . . ."/>
                {navLinks.map((link, index) => {
                  return (
                    <Link
                      key={index + 1}
                      className="hover:text-neutral-600 transition ease-in-out delay-100"
                      href={link.path}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
              <div
                id="nav-mobile-buttons"
                className="flex flex-col gap-6 items-start justify-start my-4"
              >
                <div>
                  <Button
                    variant={"outline"}
                    className="bg-blue-primary text-white hover:bg-slate-100 hover:text-black  flex flex-row items-center justify-center gap-2 px-6 rounded-xl transition ease-in-out delay-100"
                  >
                    <SquarePen size={18} /> Start a campaign
                  </Button>
                </div>
                <div
                  className="flex flex-row gap-0 items-center justify-center text-sm"
                >
                  <Button
                    variant={"outline"}
                    className="rounded-xl bg-yellow-primary text-white hover:text-black  hover:bg-slate-100 border-r-0 rounded-r-none px-8 transition ease-in-out delay-100"
                  >
                    Sign up
                  </Button>
                  <Button
                    variant={"outline"}
                    className="rounded-xl bg-blue-primary text-white hover:text-black  hover:bg-slate-100 border-l-0 rounded-l-none px-8 transition ease-in-out delay-100"
                  >
                    Sign in
                  </Button>
                </div>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;

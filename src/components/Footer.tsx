import React from "react";
import crypto from "crypto";
import Link from "next/link";
import Image from "next/image";

const navigationLinks = [
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Careers", path: "/careers" },
  { name: "Impact", path: "/impact" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Team members", path: "/team-members" },
];

const legalLinks = [
    { name: "Guide", path: "/guide" },
    { name: "FAQs", path: "/faq" },
    { name: "Press kets", path: "/press-kets" },
    { name: "Compliance", path: "/compliance" },
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Terms of Service", path: "/terms-of-service" },
];

const communityLinks = [
  { name: "Shop", path: "/shop" },
  { name: "Blog", path: "/blog" },
  { name: "Forum", path: "/forum" },
  { name: "Membership", path: "/membership" },
  { name: "Help Center", path: "/help-center" },
  { name: "Support Desk", path: "/support-desk" },
];

const allLinks = {
  navigation: navigationLinks,
  legal: legalLinks,
  community: communityLinks,
};

const Footer = () => {
  return (
    <footer className="bg-footer text-white  flex flex-col gap-14 py-16 px-10 md:px-32">
        <div className="flex flex-col md:flex-row">
      <div className="flex flex-col gap-6 justify-start max-w-sm">
        <h2 className="font-bold text-lg">What is Campoal?</h2>
        <p className="text-lg">
          Campoal is a completed Wordpress theme used to create Petition
          Platform, Foundation and Non-profit website where anyone can start a
          social movement, collect supporters and fundraising to change
          something in society.
        </p>
        <div className="flex flex-row items-center gap-4">
            <Link href={"#"} className="w-[5rem]">
            <Image src={"/assets/logos/gdpr.png"} width={100} height={100} alt="logo"/>
            </Link>
            <Link href={"#"} className="w-[5rem]">
            <Image src={"/assets/logos/norton.png"} width={100} height={100} alt="logo"/>
            </Link>
            <Link href={"#"} className="w-[5rem]">
            <Image src={"/assets/logos/stripe.svg"} width={100} height={100} alt="logo"/>
            </Link>
            <Link href={"#"} className="w-[5rem]">
            <Image src={"/assets/logos/paypal.svg"} width={100} height={100} alt="logo"/>
            </Link>
        </div>
      </div>
      <div className="flex flex-row items-start justify-between w-full gap-4 md:px-20">        
      <div className="flex flex-col gap-10">
        <h3 className="font-bold">Company</h3>
        <div className="flex flex-col gap-4 justify-start items-start w-full">
          {allLinks.navigation.map((l) => {
            return (
              <Link className="font-semibold text-neutral-300" key={crypto.randomUUID()} href={l.path}>
                {l.name}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <h3 className="font-bold">Resource</h3>
        <div className="flex flex-col gap-4 justify-start items-start w-full">
          {allLinks.legal.map((l) => {
            return (
              <Link className="font-semibold text-neutral-300" key={crypto.randomUUID()} href={l.path}>
                {l.name}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <h3 className="font-bold">Community</h3>
        <div className="flex flex-col gap-4 justify-start items-start w-full">
          {allLinks.community.map((l) => {
            return (
              <Link className="font-semibold text-neutral-300" key={crypto.randomUUID()} href={l.path}>
                {l.name}
              </Link>
            );
          })}
        </div>
      </div>
      </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <p className="text-neutral-300">&copy; 2021 Campoal. Powered by Conikal LLC</p>
        <div className="flex flex-row gap-4 items-center">
          <Link href={"#"} className="bg-white text-black p-2 w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-200">
          <Image src={"/assets/logos/facebook.svg"} width={15} height={20} alt="logo" />
          </Link>
          <Link href={"#"} className="bg-white text-black  p-2 w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-200">
          <Image src={"/assets/logos/twitter.svg"} width={20} height={20} alt="logo" />
          </Link>
          <Link href={"#"} className="bg-white text-black  p-2 w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-200">
          <Image src={"/assets/logos/youtube.svg"} width={20} height={20} alt="logo" />
          </Link>
          <Link href={"#"} className="bg-white text-black  p-2 w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-200">
          <Image src={"/assets/logos/medium.svg"} width={20} height={20} alt="logo" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

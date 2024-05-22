import { footerLinks } from "../constants/FooterLink";
// import Image from "next/image";
// import Link from "next/link";
import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          {/* <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          /> */}
          <p className="text-base text-gray-700">
            Carhub 2023 <br /> All Rights Reserved &copy;
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((items) => (
            <div key={items.title} className="footer__link">
              <h1 className="font-bold">{items.title}</h1>
              {items.links.map((link) => (
                <Link to={link.url} key={link.title} className="text-gray-500">
                  {link.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>@2024. All Rights Reserved</p>
        <div className="footer__copyrights-link">
          <Link to={"/"} className="text-gray-500">
            Privacy policy
          </Link>
          <Link to={"/"} className="text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

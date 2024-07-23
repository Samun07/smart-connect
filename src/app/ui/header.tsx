import React from "react";
import { bakbak_one  } from "../ui/fonts";
import { Bars4Icon, LightBulbIcon } from "@heroicons/react/24/solid";

export default function Header() {
  return (
    <div className="flex sticky top-0 bg-white md:px-[14vw] px-[3vw] gap-16 h-20 items-center z-50 shadow-sm">
      <div className="flex items-center gap-16 justify-between w-full md:w-auto">
        <a 
        href="/"
        className="flex items-center gap-2">
        <div
        className={`${bakbak_one.className} whitespace-nowrap`}>SMARTCONNECT</div>
        <LightBulbIcon className="w-5 h-5 text-[var(--color-secondary)]"/>
        </a>
        
        {/* <div
        className="block md:hidden bg-[var(--color-primary)] p-4 rounded-full
         transition-colors hover:bg-[var(--hover-color-primary)]">
          <Bars4Icon className="size-7" />
        </div> */}
      </div>

      <nav className="flex justify-between w-full"
      // flex 
      // md:flex-row
      // md:justify-between
      // md:gap-0
      // md:py-0
      // md:h-auto
      // md:relative
      // md:left-auto
      // md:top-auto
      // md:bg-transparent

      // flex-col 
      // overflow-hidden
      // justify-start
      // gap-8
      // py-16
      // items-center
      // h-[100vh]
      // absolute
      // left-0
      // top-[4.95rem]
      // w-full
      // nav-media
      >
        <div className="flex gap-8">
          <div className="hidden md:flex gap-8 items-center font-semibold text-base text-[color:var(--text-color-secondary)]">
            <a
              href="/"
              className="transition-colors hover:text-[color:var(--color-secondary)]"
            >
              Catalog
            </a>
          </div>
        </div>

        <div className="flex gap-8 whitespace-nowrap">
          
          <a
          href="https://wa.me/+19842608676"
          target="_blank"
          className="bg-[var(--color-primary)] py-3 px-5 rounded-xl  font-semibold text-base text-[color:var(--text-color-primary)]
          transition-colors hover:bg-[var(--hover-color-primary)]">
            Contact Us
          </a>
        </div>
      </nav>
    </div>
  );
}

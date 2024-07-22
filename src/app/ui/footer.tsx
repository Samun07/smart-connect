import React from "react";
import { bakbak_one } from "../ui/fonts";
import { Bars4Icon, LightBulbIcon } from "@heroicons/react/24/solid";

export default function Footer() {
  return (
    <section className="flex flex-col items-cente justify-center gap-8 p-8 bg-[var(--color-secondary)]">
        <div className="flex items-center justify-center">
          <a href="/" className="flex items-center gap-2 justify-center">
            <div
              className={`${bakbak_one.className} whitespace-nowrap text-white`}
            >
              SMARTCONNECT
            </div>
            <LightBulbIcon className="w-5 h-5 text-white" />
          </a>
        </div>
        <p className="text-white text-center">
          📍 Visit us at <strong> <a target="_blank" href="https://maps.app.goo.gl/4NosvSDSBTPJbGVP8">3029 N Roxboro St, Durham, NC 27704.</a></strong> or call 📲 <strong><a href="tel:+19842608676">+1
          (984) 260-8676</a></strong> today. 😎
        </p>
    </section>
  );
}

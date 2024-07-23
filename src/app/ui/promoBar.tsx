import React from "react";

export default function PromoBar() {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center md:px-[14vw] px-4 items-center bg-[var(--color-secondary)] py-4">
      <span className="text-white">
        <strong>
        📍 Visit Our New Store at <a className="underline text-white" target="_blank" href="https://maps.app.goo.gl/4NosvSDSBTPJbGVP8">3029 N Roxboro St</a>! 🎉
        </strong>
        Shop for accessories, covers, and phones 📱, and get your phone repaired all in one place. Come check us out today! 🚀
      </span>
    </div>
  );
}

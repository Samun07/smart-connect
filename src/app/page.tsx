import Image from "next/image";

import {
  ArrowTrendingUpIcon,
  ScaleIcon,
  ShieldCheckIcon,
  WifiIcon,
} from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <main className="min-h-[50vw]">
      <section className="grid md:grid-cols-2 grid-cols-1 gap-4 my-8 px-[14vw]">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 bg-white rounded-lg overflow-hidden py-4 px-8 border border-solid border-gray-100">
          <div className="flex justify-center items-center m-4">
            <img
              src="https://touchunwired.com/wp-content/uploads/2023/09/Apple-iPhone-15-Pro-Max-Blue.png"
              alt=""
              className="object-contain h-48"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-bold">iPhone 15 Pro Max</h1>
            <ul className="flex flex-col list-none">
              <li>5G</li>
              <li>256GB</li>
              <li>Unlocked</li>
              <li>A-Stock-OEM Box</li>
            </ul>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1 items-center whitespace-nowrap">
                <span className="font-bold">$1.270</span>-<span>In-Stock</span>
              </div>

              <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 justify-center items-center">
                <a
                  href="https://maps.app.goo.gl/4NosvSDSBTPJbGVP8"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-secondary)] py-3 px-5 rounded-xl  font-semibold text-base text-white
          transition-colors hover:bg-[var(--hover-color-secondary)] whitespace-nowrap"
                >
                  Visit Us
                </a>
                <a
                  href="https://wa.me/+19842608676"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-primary)] py-3 px-5 rounded-xl  font-semibold text-base text-[color:var(--text-color-primary)]
          transition-colors hover:bg-[var(--hover-color-primary)] whitespace-nowrap"
                >
                  Write To Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 bg-white rounded-lg overflow-hidden py-4 px-8 border border-solid border-gray-100">
          <div className="flex justify-center items-center m-4">
            <img
              src="https://cdnx.jumpseller.com/tiquemobile/image/31087032/iPhone_14_Pro_Max_Dorado.png?1674348617"
              alt=""
              className="object-contain h-48"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-bold">iPhone 14 Pro Max</h1>
            <ul className="flex flex-col list-none">
              <li>5G</li>
              <li>128GB</li>
              <li>Unlocked</li>
              <li>A-Stock-OEM Box</li>
            </ul>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1 items-center whitespace-nowrap">
                <span className="font-bold">$1.010</span>-<span>In-Stock</span>
              </div>

              <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 justify-center items-center">
                <a
                  href="https://maps.app.goo.gl/4NosvSDSBTPJbGVP8"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-secondary)] py-3 px-5 rounded-xl  font-semibold text-base text-white
          transition-colors hover:bg-[var(--hover-color-secondary)] whitespace-nowrap"
                >
                  Visit Us
                </a>
                <a
                  href="https://wa.me/+19842608676"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-primary)] py-3 px-5 rounded-xl  font-semibold text-base text-[color:var(--text-color-primary)]
          transition-colors hover:bg-[var(--hover-color-primary)] whitespace-nowrap"
                >
                  Write To Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 bg-white rounded-lg overflow-hidden py-4 px-8 border border-solid border-gray-100">
          <div className="flex justify-center items-center m-4">
            <img
              src="https://res.cloudinary.com/mozillion/image/upload/f_auto,q_auto/v1662629153/pyouxn4cahqleboh7lqt.png"
              alt=""
              className="object-contain h-48"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-bold">iPhone 14 Plus</h1>
            <ul className="flex flex-col list-none">
              <li>5G</li>
              <li>128GB</li>
              <li>Unlocked</li>
              <li>A-Stock-OEM Box</li>
            </ul>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1 items-center whitespace-nowrap">
                <span className="font-bold">$715</span>-<span>In-Stock</span>
              </div>

              <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 justify-center items-center">
                <a
                  href="https://maps.app.goo.gl/4NosvSDSBTPJbGVP8"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-secondary)] py-3 px-5 rounded-xl  font-semibold text-base text-white
          transition-colors hover:bg-[var(--hover-color-secondary)] whitespace-nowrap"
                >
                  Visit Us
                </a>
                <a
                  href="https://wa.me/+19842608676"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-primary)] py-3 px-5 rounded-xl  font-semibold text-base text-[color:var(--text-color-primary)]
          transition-colors hover:bg-[var(--hover-color-primary)] whitespace-nowrap"
                >
                  Write To Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 bg-white rounded-lg overflow-hidden py-4 px-8 border border-solid border-gray-100">
          <div className="flex justify-center items-center m-4">
            <img
              src="https://cdnx.jumpseller.com/tiquemobile/image/29813874/resize/610/610?1700489960"
              alt=""
              className="object-contain h-48"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-bold">iPhone 13 Pro Max</h1>
            <ul className="flex flex-col list-none">
              <li>5G</li>
              <li>128GB</li>
              <li>Unlocked</li>
              <li>A-Stock-OEM Box</li>
            </ul>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1 items-center whitespace-nowrap">
                <span className="font-bold">$740</span>-<span>In-Stock</span>
              </div>

              <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 justify-center items-center">
                <a
                  href="https://maps.app.goo.gl/4NosvSDSBTPJbGVP8"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-secondary)] py-3 px-5 rounded-xl  font-semibold text-base text-white
          transition-colors hover:bg-[var(--hover-color-secondary)] whitespace-nowrap"
                >
                  Visit Us
                </a>
                <a
                  href="https://wa.me/+19842608676"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-primary)] py-3 px-5 rounded-xl  font-semibold text-base text-[color:var(--text-color-primary)]
          transition-colors hover:bg-[var(--hover-color-primary)] whitespace-nowrap"
                >
                  Write To Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 bg-white rounded-lg overflow-hidden py-4 px-8 border border-solid border-gray-100">
          <div className="flex justify-center items-center m-4">
            <img
              src="https://micelu.co/test/wp-content/uploads/2022/12/13-pro-dorado.png"
              alt=""
              className="object-contain h-48"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-bold">iPhone 13 Pro</h1>
            <ul className="flex flex-col list-none">
              <li>5G</li>
              <li>128GB</li>
              <li>Unlocked</li>
              <li>A-Stock-OEM Box</li>
            </ul>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1 items-center whitespace-nowrap">
                <span className="font-bold">$690</span>-<span>In-Stock</span>
              </div>

              <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 justify-center items-center">
                <a
                  href="https://maps.app.goo.gl/4NosvSDSBTPJbGVP8"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-secondary)] py-3 px-5 rounded-xl  font-semibold text-base text-white
          transition-colors hover:bg-[var(--hover-color-secondary)] whitespace-nowrap"
                >
                  Visit Us
                </a>
                <a
                  href="https://wa.me/+19842608676"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-primary)] py-3 px-5 rounded-xl  font-semibold text-base text-[color:var(--text-color-primary)]
          transition-colors hover:bg-[var(--hover-color-primary)] whitespace-nowrap"
                >
                  Write To Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 bg-white rounded-lg overflow-hidden py-4 px-8 border border-solid border-gray-100">
          <div className="flex justify-center items-center m-4">
            <img
              src="https://static.doji.co/product/medias/smartphones/apple/iphone-13/back_front-product-red.png"
              alt=""
              className="object-contain h-48"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-bold">iPhone 13</h1>
            <ul className="flex flex-col list-none">
              <li>5G</li>
              <li>128GB</li>
              <li>Unlocked</li>
              <li>A-Stock-OEM Box</li>
            </ul>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1 items-center whitespace-nowrap">
                <span className="font-bold">$590</span>-<span>In-Stock</span>
              </div>

              <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 justify-center items-center">
                <a
                  href="https://maps.app.goo.gl/4NosvSDSBTPJbGVP8"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-secondary)] py-3 px-5 rounded-xl  font-semibold text-base text-white
          transition-colors hover:bg-[var(--hover-color-secondary)] whitespace-nowrap"
                >
                  Visit Us
                </a>
                <a
                  href="https://wa.me/+19842608676"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-primary)] py-3 px-5 rounded-xl  font-semibold text-base text-[color:var(--text-color-primary)]
          transition-colors hover:bg-[var(--hover-color-primary)] whitespace-nowrap"
                >
                  Write To Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 bg-white rounded-lg overflow-hidden py-4 px-8 border border-solid border-gray-100">
          <div className="flex justify-center items-center m-4">
            <img
              src="https://cdnx.jumpseller.com/tiquemobile/image/28421491/iphone_12_Pro_Max_Azul.png?1665715956"
              alt=""
              className="object-contain h-48"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-bold">iPhone 12 Pro Max</h1>
            <ul className="flex flex-col list-none">
              <li>5G</li>
              <li>128GB</li>
              <li>Unlocked</li>
              <li>A-Stock-OEM Box</li>
            </ul>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1 items-center whitespace-nowrap">
                <span className="font-bold">$615</span>-<span>In-Stock</span>
              </div>

              <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 justify-center items-center">
                <a
                  href="https://maps.app.goo.gl/4NosvSDSBTPJbGVP8"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-secondary)] py-3 px-5 rounded-xl  font-semibold text-base text-white
          transition-colors hover:bg-[var(--hover-color-secondary)] whitespace-nowrap"
                >
                  Visit Us
                </a>
                <a
                  href="https://wa.me/+19842608676"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-primary)] py-3 px-5 rounded-xl  font-semibold text-base text-[color:var(--text-color-primary)]
          transition-colors hover:bg-[var(--hover-color-primary)] whitespace-nowrap"
                >
                  Write To Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 bg-white rounded-lg overflow-hidden py-4 px-8 border border-solid border-gray-100">
          <div className="flex justify-center items-center m-4">
            <img
              src="https://static.doji.co/product/medias/smartphones/apple/iphone-12/1-front-back-blue.png"
              alt=""
              className="object-contain h-48"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-bold">iPhone 12</h1>
            <ul className="flex flex-col list-none">
              <li>5G</li>
              <li>64GB</li>
              <li>Unlocked</li>
              <li>A-Stock-OEM Box</li>
            </ul>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1 items-center whitespace-nowrap">
                <span className="font-bold">$410</span>-<span>In-Stock</span>
              </div>

              <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 justify-center items-center">
                <a
                  href="https://maps.app.goo.gl/4NosvSDSBTPJbGVP8"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-secondary)] py-3 px-5 rounded-xl  font-semibold text-base text-white
          transition-colors hover:bg-[var(--hover-color-secondary)] whitespace-nowrap"
                >
                  Visit Us
                </a>
                <a
                  href="https://wa.me/+19842608676"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-primary)] py-3 px-5 rounded-xl  font-semibold text-base text-[color:var(--text-color-primary)]
          transition-colors hover:bg-[var(--hover-color-primary)] whitespace-nowrap"
                >
                  Write To Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 bg-white rounded-lg overflow-hidden py-4 px-8 border border-solid border-gray-100">
          <div className="flex justify-center items-center m-4">
            <img
              src="https://cdnx.jumpseller.com/tiquemobile/image/28308585/iPhone_11_Pro_Max_Dorado.png?1684946218"
              alt=""
              className="object-contain h-48"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-bold">iPhone 11 Pro Max</h1>
            <ul className="flex flex-col list-none">
              <li>64GB</li>
              <li>Unlocked</li>
              <li>A-Stock-OEM Box</li>
            </ul>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1 items-center whitespace-nowrap">
                <span className="font-bold">$450</span>-<span>In-Stock</span>
              </div>

              <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 justify-center items-center">
                <a
                  href="https://maps.app.goo.gl/4NosvSDSBTPJbGVP8"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-secondary)] py-3 px-5 rounded-xl  font-semibold text-base text-white
          transition-colors hover:bg-[var(--hover-color-secondary)] whitespace-nowrap"
                >
                  Visit Us
                </a>
                <a
                  href="https://wa.me/+19842608676"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-primary)] py-3 px-5 rounded-xl  font-semibold text-base text-[color:var(--text-color-primary)]
          transition-colors hover:bg-[var(--hover-color-primary)] whitespace-nowrap"
                >
                  Write To Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 bg-white rounded-lg overflow-hidden py-4 px-8 border border-solid border-gray-100">
          <div className="flex justify-center items-center m-4">
            <img
              src="https://cdnx.jumpseller.com/tiquemobile/image/28177960/resize/610/610?1664981359"
              alt=""
              className="object-contain h-48"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-bold">iPhone 11</h1>
            <ul className="flex flex-col list-none">
              <li>64GB</li>
              <li>Unlocked</li>
              <li>A-Stock-OEM Box</li>
            </ul>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1 items-center whitespace-nowrap">
                <span className="font-bold">$299</span>-<span>In-Stock</span>
              </div>

              <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 justify-center items-center">
                <a
                  href="https://maps.app.goo.gl/4NosvSDSBTPJbGVP8"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-secondary)] py-3 px-5 rounded-xl  font-semibold text-base text-white
          transition-colors hover:bg-[var(--hover-color-secondary)] whitespace-nowrap"
                >
                  Visit Us
                </a>
                <a
                  href="https://wa.me/+19842608676"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-primary)] py-3 px-5 rounded-xl  font-semibold text-base text-[color:var(--text-color-primary)]
          transition-colors hover:bg-[var(--hover-color-primary)] whitespace-nowrap"
                >
                  Write To Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 bg-white rounded-lg overflow-hidden py-4 px-8 border border-solid border-gray-100">
          <div className="flex justify-center items-center m-4">
            <img
              src="https://www.pngall.com/wp-content/uploads/15/iPhone-Xr-PNG-Image-HD.png"
              alt=""
              className="object-contain h-48"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-bold">iPhone XR</h1>
            <ul className="flex flex-col list-none">
              <li>64GB</li>
              <li>Unlocked</li>
              <li>A-Stock-OEM Box</li>
            </ul>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1 items-center whitespace-nowrap">
                <span className="font-bold">$265</span>-<span>In-Stock</span>
              </div>

              <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 justify-center items-center">
                <a
                  href="https://maps.app.goo.gl/4NosvSDSBTPJbGVP8"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-secondary)] py-3 px-5 rounded-xl  font-semibold text-base text-white
          transition-colors hover:bg-[var(--hover-color-secondary)] whitespace-nowrap"
                >
                  Visit Us
                </a>
                <a
                  href="https://wa.me/+19842608676"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-primary)] py-3 px-5 rounded-xl  font-semibold text-base text-[color:var(--text-color-primary)]
          transition-colors hover:bg-[var(--hover-color-primary)] whitespace-nowrap"
                >
                  Write To Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 bg-white rounded-lg overflow-hidden py-4 px-8 border border-solid border-gray-100">
          <div className="flex justify-center items-center m-4">
            <img
              src="https://www.clevercel.co/cdn/shop/products/iphone_8_plus_700x_77e43ee7-3cec-4eea-855b-a0299a45204f.png?v=1665798983"
              alt=""
              className="object-contain h-48"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-bold">iPhone 8 Plus</h1>
            <ul className="flex flex-col list-none">
              <li>64GB</li>
              <li>Unlocked</li>
              <li>A-Stock-OEM Box</li>
            </ul>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1 items-center whitespace-nowrap">
                <span className="font-bold">$230</span>-<span>In-Stock</span>
              </div>

              <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 justify-center items-center">
                <a
                  href="https://maps.app.goo.gl/4NosvSDSBTPJbGVP8"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-secondary)] py-3 px-5 rounded-xl  font-semibold text-base text-white
          transition-colors hover:bg-[var(--hover-color-secondary)] whitespace-nowrap"
                >
                  Visit Us
                </a>
                <a
                  href="https://wa.me/+19842608676"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-primary)] py-3 px-5 rounded-xl  font-semibold text-base text-[color:var(--text-color-primary)]
          transition-colors hover:bg-[var(--hover-color-primary)] whitespace-nowrap"
                >
                  Write To Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 bg-white rounded-lg overflow-hidden py-4 px-8 border border-solid border-gray-100">
          <div className="flex justify-center items-center m-4">
            <img
              src="https://saldos.clevercel.co/cdn/shop/products/iPhone_SE_1d12f8eb-a5c7-4b29-a6b2-bcaf3b674e59_1800x.png?v=1661205420"
              alt=""
              className="object-contain h-48"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-bold">iPhone SE Gen 2</h1>
            <ul className="flex flex-col list-none">
              <li>64GB</li>
              <li>Unlocked</li>
              <li>A-Stock-OEM Box</li>
            </ul>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1 items-center whitespace-nowrap">
                <span className="font-bold">$199</span>-<span>In-Stock</span>
              </div>

              <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 justify-center items-center">
                <a
                  href="https://maps.app.goo.gl/4NosvSDSBTPJbGVP8"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-secondary)] py-3 px-5 rounded-xl  font-semibold text-base text-white
          transition-colors hover:bg-[var(--hover-color-secondary)] whitespace-nowrap"
                >
                  Visit Us
                </a>
                <a
                  href="https://wa.me/+19842608676"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-primary)] py-3 px-5 rounded-xl  font-semibold text-base text-[color:var(--text-color-primary)]
          transition-colors hover:bg-[var(--hover-color-primary)] whitespace-nowrap"
                >
                  Write To Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 bg-white rounded-lg overflow-hidden py-4 px-8 border border-solid border-gray-100">
          <div className="flex justify-center items-center m-4">
            <img
              src="https://technologyinvestors.co.za/wp-content/uploads/2023/07/z-flip-3-black1.png"
              alt=""
              className="object-contain h-48"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-bold">Samsung Z Flip 3</h1>
            <ul className="flex flex-col list-none">
              <li>5G</li>
              <li>128GB</li>
              <li>Unlocked</li>
              <li>A-Stock-OEM Box</li>
            </ul>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1 items-center whitespace-nowrap">
                <span className="font-bold">$380</span>-<span>In-Stock</span>
              </div>

              <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 justify-center items-center">
                <a
                  href="https://maps.app.goo.gl/4NosvSDSBTPJbGVP8"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-secondary)] py-3 px-5 rounded-xl  font-semibold text-base text-white
          transition-colors hover:bg-[var(--hover-color-secondary)] whitespace-nowrap"
                >
                  Visit Us
                </a>
                <a
                  href="https://wa.me/+19842608676"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-primary)] py-3 px-5 rounded-xl  font-semibold text-base text-[color:var(--text-color-primary)]
          transition-colors hover:bg-[var(--hover-color-primary)] whitespace-nowrap"
                >
                  Write To Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 bg-white rounded-lg overflow-hidden py-4 px-8 border border-solid border-gray-100">
          <div className="flex justify-center items-center m-4">
            <img
              src="https://www.clevercel.co/cdn/shop/products/samsung-galaxy-note20-ultra_10e39999-fcc4-4a58-816a-308818d42a55.png?v=1621301832"
              alt=""
              className="object-contain h-48"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-bold">Samsung Note 20 Ultra</h1>
            <ul className="flex flex-col list-none">
              <li>5G</li>
              <li>128GB</li>
              <li>Unlocked</li>
              <li>A-Stock-OEM Box</li>
            </ul>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1 items-center whitespace-nowrap">
                <span className="font-bold">$570</span>-<span>In-Stock</span>
              </div>

              <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 justify-center items-center">
                <a
                  href="https://maps.app.goo.gl/4NosvSDSBTPJbGVP8"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-secondary)] py-3 px-5 rounded-xl  font-semibold text-base text-white
          transition-colors hover:bg-[var(--hover-color-secondary)] whitespace-nowrap"
                >
                  Visit Us
                </a>
                <a
                  href="https://wa.me/+19842608676"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-primary)] py-3 px-5 rounded-xl  font-semibold text-base text-[color:var(--text-color-primary)]
          transition-colors hover:bg-[var(--hover-color-primary)] whitespace-nowrap"
                >
                  Write To Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 bg-white rounded-lg overflow-hidden py-4 px-8 border border-solid border-gray-100">
          <div className="flex justify-center items-center m-4">
            <img
              src="https://images.samsung.com/is/image/samsung/latin-galaxy-note20-n980-sm-n980fznkgto-frontmysticbronze-thumb-320815448"
              alt=""
              className="object-contain h-48"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-bold">Samsung Note 20</h1>
            <ul className="flex flex-col list-none">
              <li>5G</li>
              <li>128GB</li>
              <li>Unlocked</li>
              <li>A-Stock-OEM Box</li>
            </ul>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1 items-center whitespace-nowrap">
                <span className="font-bold">$470</span>-<span>In-Stock</span>
              </div>

              <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 justify-center items-center">
                <a
                  href="https://maps.app.goo.gl/4NosvSDSBTPJbGVP8"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-secondary)] py-3 px-5 rounded-xl  font-semibold text-base text-white
          transition-colors hover:bg-[var(--hover-color-secondary)] whitespace-nowrap"
                >
                  Visit Us
                </a>
                <a
                  href="https://wa.me/+19842608676"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-primary)] py-3 px-5 rounded-xl  font-semibold text-base text-[color:var(--text-color-primary)]
          transition-colors hover:bg-[var(--hover-color-primary)] whitespace-nowrap"
                >
                  Write To Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 bg-white rounded-lg overflow-hidden py-4 px-8 border border-solid border-gray-100">
          <div className="flex justify-center items-center m-4">
            <img
              src="https://www.clevercel.co/cdn/shop/products/Galaxy_Note10_plus_d1661fc5-085b-4dba-95ea-75b0432b9eba_1800x.png?v=1621301828"
              alt=""
              className="object-contain h-48"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-bold">Samsung Note 10 Plus</h1>
            <ul className="flex flex-col list-none">
              <li>256GB</li>
              <li>Unlocked</li>
              <li>A-Stock-OEM Box</li>
            </ul>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1 items-center whitespace-nowrap">
                <span className="font-bold">$450</span>-<span>In-Stock</span>
              </div>

              <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 justify-center items-center">
                <a
                  href="https://maps.app.goo.gl/4NosvSDSBTPJbGVP8"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-secondary)] py-3 px-5 rounded-xl  font-semibold text-base text-white
          transition-colors hover:bg-[var(--hover-color-secondary)] whitespace-nowrap"
                >
                  Visit Us
                </a>
                <a
                  href="https://wa.me/+19842608676"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-primary)] py-3 px-5 rounded-xl  font-semibold text-base text-[color:var(--text-color-primary)]
          transition-colors hover:bg-[var(--hover-color-primary)] whitespace-nowrap"
                >
                  Write To Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 bg-white rounded-lg overflow-hidden py-4 px-8 border border-solid border-gray-100">
          <div className="flex justify-center items-center m-4">
            <img
              src="https://images.samsung.com/is/image/samsung/p6pim/co/2401/gallery/co-galaxy-s24-s928-sm-s928bzkkltc-thumb-539325067"
              alt=""
              className="object-contain h-48"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-bold">Samsung S24 Ultra</h1>
            <ul className="flex flex-col list-none">
              <li>5G</li>
              <li>256GB</li>
              <li>Unlocked</li>
              <li>A-Stock-OEM Box</li>
            </ul>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1 items-center whitespace-nowrap">
                <span className="font-bold">$1.270</span>-<span>In-Stock</span>
              </div>

              <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 justify-center items-center">
                <a
                  href="https://maps.app.goo.gl/4NosvSDSBTPJbGVP8"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-secondary)] py-3 px-5 rounded-xl  font-semibold text-base text-white
          transition-colors hover:bg-[var(--hover-color-secondary)] whitespace-nowrap"
                >
                  Visit Us
                </a>
                <a
                  href="https://wa.me/+19842608676"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-primary)] py-3 px-5 rounded-xl  font-semibold text-base text-[color:var(--text-color-primary)]
          transition-colors hover:bg-[var(--hover-color-primary)] whitespace-nowrap"
                >
                  Write To Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 bg-white rounded-lg overflow-hidden py-4 px-8 border border-solid border-gray-100">
          <div className="flex justify-center items-center m-4">
            <img
              src="https://static.vecteezy.com/system/resources/previews/035/572/092/non_2x/samsung-galaxy-s23-ultra-without-pen-transparent-image-free-png.png"
              alt=""
              className="object-contain h-48"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-bold">Samsung S23 Ultra</h1>
            <ul className="flex flex-col list-none">
              <li>5G</li>
              <li>256GB</li>
              <li>Unlocked</li>
              <li>A-Stock-OEM Box</li>
            </ul>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1 items-center whitespace-nowrap">
                <span className="font-bold">$870</span>-<span>In-Stock</span>
              </div>

              <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 justify-center items-center">
                <a
                  href="https://maps.app.goo.gl/4NosvSDSBTPJbGVP8"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-secondary)] py-3 px-5 rounded-xl  font-semibold text-base text-white
          transition-colors hover:bg-[var(--hover-color-secondary)] whitespace-nowrap"
                >
                  Visit Us
                </a>
                <a
                  href="https://wa.me/+19842608676"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-primary)] py-3 px-5 rounded-xl  font-semibold text-base text-[color:var(--text-color-primary)]
          transition-colors hover:bg-[var(--hover-color-primary)] whitespace-nowrap"
                >
                  Write To Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 bg-white rounded-lg overflow-hidden py-4 px-8 border border-solid border-gray-100">
          <div className="flex justify-center items-center m-4">
            <img
              src="https://cdn-iibnp.nitrocdn.com/VjyilAmBtWmZaLojjwWFayaMdinRRPlg/assets/images/optimized/rev-7ebe8ff/www.ourfriday.co.uk/image/cache/catalog/Samsung/samsung-s23%20-lavender-1-800x800.png"
              alt=""
              className="object-contain h-48"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-bold">Samsung S23+</h1>
            <ul className="flex flex-col list-none">
              <li>5G</li>
              <li>256GB</li>
              <li>Unlocked</li>
              <li>A-Stock-OEM Box</li>
            </ul>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1 items-center whitespace-nowrap">
                <span className="font-bold">$720</span>-<span>In-Stock</span>
              </div>

              <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 justify-center items-center">
                <a
                  href="https://maps.app.goo.gl/4NosvSDSBTPJbGVP8"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-secondary)] py-3 px-5 rounded-xl  font-semibold text-base text-white
          transition-colors hover:bg-[var(--hover-color-secondary)] whitespace-nowrap"
                >
                  Visit Us
                </a>
                <a
                  href="https://wa.me/+19842608676"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-primary)] py-3 px-5 rounded-xl  font-semibold text-base text-[color:var(--text-color-primary)]
          transition-colors hover:bg-[var(--hover-color-primary)] whitespace-nowrap"
                >
                  Write To Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 bg-white rounded-lg overflow-hidden py-4 px-8 border border-solid border-gray-100">
          <div className="flex justify-center items-center m-4">
            <img
              src="https://images.samsung.com/is/image/samsung/p6pim/latin/2202/gallery/latin-galaxy-s22-ultra-s908-sm-s908ezgkgto-thumb-530979746"
              alt=""
              className="object-contain h-48"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-bold">Samsung S22 Ultra</h1>
            <ul className="flex flex-col list-none">
              <li>5G</li>
              <li>128GB</li>
              <li>Unlocked</li>
              <li>A-Stock-OEM Box</li>
            </ul>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1 items-center whitespace-nowrap">
                <span className="font-bold">$620</span>-<span>In-Stock</span>
              </div>

              <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 justify-center items-center">
                <a
                  href="https://maps.app.goo.gl/4NosvSDSBTPJbGVP8"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-secondary)] py-3 px-5 rounded-xl  font-semibold text-base text-white
          transition-colors hover:bg-[var(--hover-color-secondary)] whitespace-nowrap"
                >
                  Visit Us
                </a>
                <a
                  href="https://wa.me/+19842608676"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-primary)] py-3 px-5 rounded-xl  font-semibold text-base text-[color:var(--text-color-primary)]
          transition-colors hover:bg-[var(--hover-color-primary)] whitespace-nowrap"
                >
                  Write To Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 bg-white rounded-lg overflow-hidden py-4 px-8 border border-solid border-gray-100">
          <div className="flex justify-center items-center m-4">
            <img
              src="https://ss7.vzw.com/is/image/VerizonWireless/samsung-rainbow-g0-sms906uzgev-green-256-gb?$device%2Dlg$"
              alt=""
              className="object-contain h-48"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-bold">Samsung S22+</h1>
            <ul className="flex flex-col list-none">
              <li>5G</li>
              <li>128GB</li>
              <li>Unlocked</li>
              <li>A-Stock-OEM Box</li>
            </ul>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1 items-center whitespace-nowrap">
                <span className="font-bold">$470</span>-<span>In-Stock</span>
              </div>

              <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 justify-center items-center">
                <a
                  href="https://maps.app.goo.gl/4NosvSDSBTPJbGVP8"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-secondary)] py-3 px-5 rounded-xl  font-semibold text-base text-white
          transition-colors hover:bg-[var(--hover-color-secondary)] whitespace-nowrap"
                >
                  Visit Us
                </a>
                <a
                  href="https://wa.me/+19842608676"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-primary)] py-3 px-5 rounded-xl  font-semibold text-base text-[color:var(--text-color-primary)]
          transition-colors hover:bg-[var(--hover-color-primary)] whitespace-nowrap"
                >
                  Write To Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 bg-white rounded-lg overflow-hidden py-4 px-8 border border-solid border-gray-100">
          <div className="flex justify-center items-center m-4">
            <img
              src="https://pladani.com/wp-content/uploads/2022/04/S21-256gb.png"
              alt=""
              className="object-contain h-48"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-bold">Samsung S21 Ultra</h1>
            <ul className="flex flex-col list-none">
              <li>5G</li>
              <li>128GB</li>
              <li>Unlocked</li>
              <li>A-Stock-OEM Box</li>
            </ul>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1 items-center whitespace-nowrap">
                <span className="font-bold">$490</span>-<span>In-Stock</span>
              </div>

              <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 justify-center items-center">
                <a
                  href="https://maps.app.goo.gl/4NosvSDSBTPJbGVP8"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-secondary)] py-3 px-5 rounded-xl  font-semibold text-base text-white
          transition-colors hover:bg-[var(--hover-color-secondary)] whitespace-nowrap"
                >
                  Visit Us
                </a>
                <a
                  href="https://wa.me/+19842608676"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-primary)] py-3 px-5 rounded-xl  font-semibold text-base text-[color:var(--text-color-primary)]
          transition-colors hover:bg-[var(--hover-color-primary)] whitespace-nowrap"
                >
                  Write To Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 bg-white rounded-lg overflow-hidden py-4 px-8 border border-solid border-gray-100">
          <div className="flex justify-center items-center m-4">
            <img
              src="https://shop.samsung.com/ie/business/images/products/27518/14908/600x600/SM-G996BZVDEUA.png"
              alt=""
              className="object-contain h-48"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-bold">Samsung S21+</h1>
            <ul className="flex flex-col list-none">
              <li>5G</li>
              <li>128GB</li>
              <li>Unlocked</li>
              <li>A-Stock-OEM Box</li>
            </ul>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1 items-center whitespace-nowrap">
                <span className="font-bold">$400</span>-<span>In-Stock</span>
              </div>

              <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 justify-center items-center">
                <a
                  href="https://maps.app.goo.gl/4NosvSDSBTPJbGVP8"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-secondary)] py-3 px-5 rounded-xl  font-semibold text-base text-white
          transition-colors hover:bg-[var(--hover-color-secondary)] whitespace-nowrap"
                >
                  Visit Us
                </a>
                <a
                  href="https://wa.me/+19842608676"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-primary)] py-3 px-5 rounded-xl  font-semibold text-base text-[color:var(--text-color-primary)]
          transition-colors hover:bg-[var(--hover-color-primary)] whitespace-nowrap"
                >
                  Write To Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 bg-white rounded-lg overflow-hidden py-4 px-8 border border-solid border-gray-100">
          <div className="flex justify-center items-center m-4">
            <img
              src="https://images.samsung.com/is/image/samsung/p6pim/co/sm-g990ezajltc/gallery/co-galaxy-s21-fe-g990-sm-g990ezajltc-thumb-530633445"
              alt=""
              className="object-contain h-48"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-bold">Samsung S21 FE</h1>
            <ul className="flex flex-col list-none">
              <li>5G</li>
              <li>128GB</li>
              <li>Unlocked</li>
              <li>A-Stock-OEM Box</li>
            </ul>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1 items-center whitespace-nowrap">
                <span className="font-bold">$370</span>-<span>In-Stock</span>
              </div>

              <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 justify-center items-center">
                <a
                  href="https://maps.app.goo.gl/4NosvSDSBTPJbGVP8"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-secondary)] py-3 px-5 rounded-xl  font-semibold text-base text-white
          transition-colors hover:bg-[var(--hover-color-secondary)] whitespace-nowrap"
                >
                  Visit Us
                </a>
                <a
                  href="https://wa.me/+19842608676"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-primary)] py-3 px-5 rounded-xl  font-semibold text-base text-[color:var(--text-color-primary)]
          transition-colors hover:bg-[var(--hover-color-primary)] whitespace-nowrap"
                >
                  Write To Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 bg-white rounded-lg overflow-hidden py-4 px-8 border border-solid border-gray-100">
          <div className="flex justify-center items-center m-4">
            <img
              src="https://refurbi.com.co/cdn/shop/files/samsung-galaxy-20_800x.webp?v=1712092733"
              alt=""
              className="object-contain h-48"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-bold">Samsung S20 Ultra</h1>
            <ul className="flex flex-col list-none">
              <li>5G</li>
              <li>128GB</li>
              <li>Unlocked</li>
              <li>A-Stock-OEM Box</li>
            </ul>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1 items-center whitespace-nowrap">
                <span className="font-bold">$390</span>-<span>In-Stock</span>
              </div>

              <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 justify-center items-center">
                <a
                  href="https://maps.app.goo.gl/4NosvSDSBTPJbGVP8"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-secondary)] py-3 px-5 rounded-xl  font-semibold text-base text-white
          transition-colors hover:bg-[var(--hover-color-secondary)] whitespace-nowrap"
                >
                  Visit Us
                </a>
                <a
                  href="https://wa.me/+19842608676"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-primary)] py-3 px-5 rounded-xl  font-semibold text-base text-[color:var(--text-color-primary)]
          transition-colors hover:bg-[var(--hover-color-primary)] whitespace-nowrap"
                >
                  Write To Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 bg-white rounded-lg overflow-hidden py-4 px-8 border border-solid border-gray-100">
          <div className="flex justify-center items-center m-4">
            <img
              src="https://www.clevercel.co/cdn/shop/products/Samsung-galaxy-s20-plus_076ef2f5-e5fa-454f-bc33-6f19acfc5282.png?v=1621301848"
              alt=""
              className="object-contain h-48"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-bold">Samsung S20+</h1>
            <ul className="flex flex-col list-none">
              <li>5G</li>
              <li>128GB</li>
              <li>Unlocked</li>
              <li>A-Stock-OEM Box</li>
            </ul>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1 items-center whitespace-nowrap">
                <span className="font-bold">$340</span>-<span>In-Stock</span>
              </div>

              <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 justify-center items-center">
                <a
                  href="https://maps.app.goo.gl/4NosvSDSBTPJbGVP8"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-secondary)] py-3 px-5 rounded-xl  font-semibold text-base text-white
          transition-colors hover:bg-[var(--hover-color-secondary)] whitespace-nowrap"
                >
                  Visit Us
                </a>
                <a
                  href="https://wa.me/+19842608676"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-primary)] py-3 px-5 rounded-xl  font-semibold text-base text-[color:var(--text-color-primary)]
          transition-colors hover:bg-[var(--hover-color-primary)] whitespace-nowrap"
                >
                  Write To Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 bg-white rounded-lg overflow-hidden py-4 px-8 border border-solid border-gray-100">
          <div className="flex justify-center items-center m-4">
            <img
              src="https://www.clevercel.co/cdn/shop/products/Samsung-galaxy-s20-fe_cd8db75c-e7f5-4915-b5d5-b97d991dd16a_1200x.png?v=1621301846"
              alt=""
              className="object-contain h-48"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-bold">Samsung S20 FE</h1>
            <ul className="flex flex-col list-none">
              <li>5G</li>
              <li>128GB</li>
              <li>Unlocked</li>
              <li>A-Stock-OEM Box</li>
            </ul>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1 items-center whitespace-nowrap">
                <span className="font-bold">$320</span>-<span>In-Stock</span>
              </div>

              <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 justify-center items-center">
                <a
                  href="https://maps.app.goo.gl/4NosvSDSBTPJbGVP8"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-secondary)] py-3 px-5 rounded-xl  font-semibold text-base text-white
          transition-colors hover:bg-[var(--hover-color-secondary)] whitespace-nowrap"
                >
                  Visit Us
                </a>
                <a
                  href="https://wa.me/+19842608676"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-primary)] py-3 px-5 rounded-xl  font-semibold text-base text-[color:var(--text-color-primary)]
          transition-colors hover:bg-[var(--hover-color-primary)] whitespace-nowrap"
                >
                  Write To Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 bg-white rounded-lg overflow-hidden py-4 px-8 border border-solid border-gray-100">
          <div className="flex justify-center items-center m-4">
            <img
              src="https://www.clevercel.co/cdn/shop/products/Samsung-galaxy-s10-plus_9ef6c212-3a64-4630-96ad-5ccf89231442.png?v=1621301842"
              alt=""
              className="object-contain h-48"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-bold">Samsung S10 Plus</h1>
            <ul className="flex flex-col list-none">
              <li>128GB</li>
              <li>Unlocked</li>
              <li>A-Stock-OEM Box</li>
            </ul>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1 items-center whitespace-nowrap">
                <span className="font-bold">$330</span>-<span>In-Stock</span>
              </div>

              <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 justify-center items-center">
                <a
                  href="https://maps.app.goo.gl/4NosvSDSBTPJbGVP8"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-secondary)] py-3 px-5 rounded-xl  font-semibold text-base text-white
          transition-colors hover:bg-[var(--hover-color-secondary)] whitespace-nowrap"
                >
                  Visit Us
                </a>
                <a
                  href="https://wa.me/+19842608676"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-primary)] py-3 px-5 rounded-xl  font-semibold text-base text-[color:var(--text-color-primary)]
          transition-colors hover:bg-[var(--hover-color-primary)] whitespace-nowrap"
                >
                  Write To Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 bg-white rounded-lg overflow-hidden py-4 px-8 border border-solid border-gray-100">
          <div className="flex justify-center items-center m-4">
            <img
              src="https://saldos.clevercel.co/cdn/shop/products/samsung-galaxy-s9-plus_ace99916-2ab9-4a0a-9505-3007b3ff3132_1800x.png?v=1661205062"
              alt=""
              className="object-contain h-48"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-bold">Samsung S9 Plus</h1>
            <ul className="flex flex-col list-none">
              <li>64GB</li>
              <li>Unlocked</li>
              <li>A-Stock-OEM Box</li>
            </ul>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1 items-center whitespace-nowrap">
                <span className="font-bold">$280</span>-<span>In-Stock</span>
              </div>

              <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 justify-center items-center">
                <a
                  href="https://maps.app.goo.gl/4NosvSDSBTPJbGVP8"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-secondary)] py-3 px-5 rounded-xl  font-semibold text-base text-white
          transition-colors hover:bg-[var(--hover-color-secondary)] whitespace-nowrap"
                >
                  Visit Us
                </a>
                <a
                  href="https://wa.me/+19842608676"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-primary)] py-3 px-5 rounded-xl  font-semibold text-base text-[color:var(--text-color-primary)]
          transition-colors hover:bg-[var(--hover-color-primary)] whitespace-nowrap"
                >
                  Write To Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 bg-white rounded-lg overflow-hidden py-4 px-8 border border-solid border-gray-100">
          <div className="flex justify-center items-center m-4">
            <img
              src="https://saldos.clevercel.co/cdn/shop/products/samsung-galaxy-s9-ice-blue_b400f4b3-3347-448c-9c83-56e0899f1f31_1800x.png?v=1661205067"
              alt=""
              className="object-contain h-48"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-bold">Samsung S9</h1>
            <ul className="flex flex-col list-none">
              <li>64GB</li>
              <li>Unlocked</li>
              <li>A-Stock-OEM Box</li>
            </ul>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1 items-center whitespace-nowrap">
                <span className="font-bold">$220</span>-<span>In-Stock</span>
              </div>

              <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 justify-center items-center">
                <a
                  href="https://maps.app.goo.gl/4NosvSDSBTPJbGVP8"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-secondary)] py-3 px-5 rounded-xl  font-semibold text-base text-white
          transition-colors hover:bg-[var(--hover-color-secondary)] whitespace-nowrap"
                >
                  Visit Us
                </a>
                <a
                  href="https://wa.me/+19842608676"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-primary)] py-3 px-5 rounded-xl  font-semibold text-base text-[color:var(--text-color-primary)]
          transition-colors hover:bg-[var(--hover-color-primary)] whitespace-nowrap"
                >
                  Write To Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 bg-white rounded-lg overflow-hidden py-4 px-8 border border-solid border-gray-100">
          <div className="flex justify-center items-center m-4">
            <img
              src="https://images.samsung.com/is/image/samsung/p6pim/ph/sm-a146pdrhphl/gallery/ph-galaxy-a14-5g-sm-a146-sm-a146pdrhphl-thumb-541447733"
              alt=""
              className="object-contain h-48"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-bold">Samsung A14</h1>
            <ul className="flex flex-col list-none">
              <li>128GB</li>
              <li>CDMA ONLY</li>
              <li>A-Stock-OEM Box</li>
            </ul>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1 items-center whitespace-nowrap">
                <span className="font-bold">$199</span>-<span>In-Stock</span>
              </div>

              <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 justify-center items-center">
                <a
                  href="https://maps.app.goo.gl/4NosvSDSBTPJbGVP8"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-secondary)] py-3 px-5 rounded-xl  font-semibold text-base text-white
          transition-colors hover:bg-[var(--hover-color-secondary)] whitespace-nowrap"
                >
                  Visit Us
                </a>
                <a
                  href="https://wa.me/+19842608676"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-primary)] py-3 px-5 rounded-xl  font-semibold text-base text-[color:var(--text-color-primary)]
          transition-colors hover:bg-[var(--hover-color-primary)] whitespace-nowrap"
                >
                  Write To Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 bg-white rounded-lg overflow-hidden py-4 px-8 border border-solid border-gray-100">
          <div className="flex justify-center items-center m-4">
            <img
              src="https://www.simetry.com/wp-content/uploads/ruggedized-verizon-iot-sim-3-pack.png"
              alt=""
              className="object-contain h-48"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-bold">Verizon Prepaid Sim Card</h1>
            <ul className="flex flex-col list-none">
              <li>5G</li>
            </ul>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1 items-center whitespace-nowrap">
                <span className="font-bold">$6</span>-<span>In-Stock</span>
              </div>

              <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 justify-center items-center">
                <a
                  href="https://maps.app.goo.gl/4NosvSDSBTPJbGVP8"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-secondary)] py-3 px-5 rounded-xl  font-semibold text-base text-white
          transition-colors hover:bg-[var(--hover-color-secondary)] whitespace-nowrap"
                >
                  Visit Us
                </a>
                <a
                  href="https://wa.me/+19842608676"
                  target="_blank"
                  className="flex justify-center bg-[var(--color-primary)] py-3 px-5 rounded-xl  font-semibold text-base text-[color:var(--text-color-primary)]
          transition-colors hover:bg-[var(--hover-color-primary)] whitespace-nowrap"
                >
                  Write To Us
                </a>
              </div>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}

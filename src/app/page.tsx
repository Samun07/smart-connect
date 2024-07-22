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
              <span className="font-bold">$1.270</span>
              -
              <span>In-Stock</span>
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
              <span className="font-bold">$1.010</span>
              -
              <span>In-Stock</span>
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
              <span className="font-bold">$715</span>
              -
              <span>In-Stock</span>
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
              <span className="font-bold">$740</span>
              -
              <span>In-Stock</span>
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
              <span className="font-bold">$690</span>
              -
              <span>In-Stock</span>
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
              <span className="font-bold">$590</span>
              -
              <span>In-Stock</span>
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
              <span className="font-bold">$615</span>
              -
              <span>In-Stock</span>
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
              <span className="font-bold">$410</span>
              -
              <span>In-Stock</span>
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
              <span className="font-bold">$450</span>
              -
              <span>In-Stock</span>
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
              <span className="font-bold">$299</span>
              -
              <span>In-Stock</span>
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

import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4 max-h-[100px]">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="#" className="flex items-center mb-4 sm:mb-0">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
            <span className="self-center text-2xl text-blue-800 ml-4 font-semibold whitespace-nowrap dark:text-white">
              Next Pallette
            </span>
          </a>
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="#" className="hover:underline">
              NextPallette™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

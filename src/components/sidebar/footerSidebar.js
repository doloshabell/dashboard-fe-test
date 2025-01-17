import React from "react";

function FooterSidebar() {
  return (
    <div className="relative mt-28 flex w-[256px] justify-center rounded-[20px] bg-gradient-to-br from-[#868CFF] via-[#432CF3] to-[#422AFB] pb-6 mb-5">
      <div className="absolute -top-12 flex h-24 w-24 items-center justify-center rounded-full border-[4px] border-white bg-gradient-to-b from-[#868CFF] to-[#422AFB]">
        <svg
          width="41px"
          height="41px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM8.8 14C8.50496 14 8.23388 13.8478 8.09466 13.6039C7.95545 13.36 7.9707 13.0641 8.13436 12.834L11.3344 8.33397C11.4827 8.12533 11.7325 8 12 8C12.2675 8 12.5173 8.12533 12.6656 8.33397L15.8656 12.834C16.0293 13.0641 16.0446 13.36 15.9053 13.6039C15.7661 13.8478 15.495 14 15.2 14H8.8Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="mt-16 flex h-fit flex-col items-center">
        <p className="text-lg font-bold text-white">Upgrade to PRO</p>
        <p className="mt-1 px-4 text-center text-sm text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non lacus at odio hendrerit lacinia.
        </p>

        <a
          target="blank"
          className="text-medium mt-7 block rounded-full bg-gradient-to-b from-white/50 to-white/10 py-[12px] px-11 text-center text-base text-white hover:bg-gradient-to-b hover:from-white/40 hover:to-white/5 "
          href=" "
        >
          Upgrade to PRO
        </a>
      </div>
    </div>
  );
}

export default FooterSidebar;

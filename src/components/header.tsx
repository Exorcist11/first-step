import Link from "next/link";
import React from "react";
import { FaClock, FaPhone, FaAlignJustify } from "react-icons/fa6";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type ContactInfo = {
  icon: JSX.Element;
  text: string;
};

type ListMenu = {
  name: string;
  navTo: string;
};

const contactInfos: ContactInfo[] = [
  {
    icon: <FaClock />,
    text: "Thời gian làm việc: 7h30 - 21h00 tất cả các ngày trong tuần!",
  },

  {
    icon: <FaPhone />,
    text: "Hỗ trợ kỹ thuật sửa chữa 24/7 Hotline: 097.328.5665",
  },
];

const listMenu: ListMenu[] = [
  {
    name: "Trang chủ",
    navTo: "/",
  },
  {
    name: "Bếp điện",
    navTo: "/sua-bep-dien",
  },
  {
    name: "TV",
    navTo: "/sua-tivi",
  },
  {
    name: "Thiết bị âm thanh",
    navTo: "/sua-loa",
  },
  {
    name: "Liên hệ",
    navTo: "/lien-he",
  },
  {
    name: "Về chúng tôi",
    navTo: "/gioi-thieu",
  },
];

export default function Header() {
  return (
    <div className="sticky top-0 z-50 bg-[#ececec]">
      <div className="hidden laptop:bg-[#5c4a3e] laptop:px-40 laptop:text-base text-xs text-white py-3 px-5  mx-auto laptop:flex flex-col laptop:flex-row justify-between items-center laptop:items-start gap-3">
        {contactInfos.map((info, index) => (
          <div key={index} className="flex gap-2 items-center">
            {info.icon}
            <p>{info.text}</p>
          </div>
        ))}
      </div>

      <nav>
        <div className="flex flex-row items-center justify-between mx-20 laptop:mx-40 py-4 border-b">
          <div className="laptop:basis-1/3 basis-2/3 text-4xl font-bold ">
            DMC
          </div>

          <ul className="hidden basis-2/3 laptop:flex laptop:flex-row laptop:justify-end laptop:gap-8">
            {listMenu.map((item, index) => (
              <li
                key={index}
                className="uppercase font-semibold cursor-pointer py-1 text-gray-500 hover:text-[#5c4a3e] relative 
                after:absolute after:bottom-0 after:left-0 after:bg-[#5c4a3e] after:h-0.5 after:w-0 hover:after:w-full 
                after:transition-all after:ease-in-out after:duration-300"
              >
                <Link href={item.navTo}>{item.name}</Link>
              </li>
            ))}
          </ul>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="laptop:hidden basis-1/3 flex justify-end cursor-pointer">
                <FaAlignJustify color="#061123" size={24} />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-screen flex justify-center mt-4">
              <ul className=" flex flex-col gap-5 items-center">
                {listMenu.map((item, index) => (
                  <li
                    key={index}
                    className="uppercase font-semibold cursor-pointer py-1 text-gray-500 hover:text-[#061123] relative 
                after:absolute after:bottom-0 after:left-0 after:bg-slate-900 after:h-0.5 after:w-0 hover:after:w-full 
                after:transition-all after:ease-in-out after:duration-300"
                  >
                    <Link href={item.navTo}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </div>
  );
}

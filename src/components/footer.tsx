import Image from "next/image";
import Link from "next/link";
import React from "react";

type ListServices = {
  name: string;
  navigate: string;
};

const listServices: ListServices[] = [
  {
    name: "Sửa bếp điện",
    navigate: "/sua-bep-dien",
  },
  {
    name: "Sửa TV",
    navigate: "/sua-tv",
  },
  {
    name: "Sửa thiết bị âm thanh",
    navigate: "/sua-loa",
  },
];

type AboutUS = {
  name: string;
  navigate: string;
};

const aboutUs: AboutUS[] = [
  {
    name: "Giới thiệu",
    navigate: "/gioi-thieu",
  },
  {
    name: "Liên hệ",
    navigate: "/lien-he",
  },
  {
    name: "Chính sách bảo mật",
    navigate: "/",
  },
  {
    name: "Quy trình thực hiện dịch vụ",
    navigate: "/",
  },
];

export default function Footer() {
  return (
    <div className="bg-[#5f4841] px-5 py-10 text-white">
      <div className=" flex flex-col gap-3 laptop:grid laptop:grid-cols-3 laptop:gap-5 laptop:px-40">
        <div className="flex flex-col gap-3 col-span-1">
          <div className="flex flex-col gap-2 text-white text-xl font-bold">
            <p>THÔNG TIN</p>
            <div className="flex-grow border-b-4 w-12 border-white"></div>
          </div>

          <p className="text-base font-semibold">
            TRUNG TÂM BẢO HÀNH VÀ SỬA CHỮA BẾP TỪ CHÂU ÂU
          </p>

          <p>Địa chỉ: Số 165 Thái Hà - Đống Đa – Hà Nội </p>
          <p>Điện thoại: 02462.534.594 – 0948.265.665 </p>
          <p>
            Hỗ trợ kỹ thuật sửa chữa 24/7 <br /> Hotline: 097.328.5665{" "}
          </p>
        </div>

        <div className="flex flex-col gap-3 col-span-1">
          <div className="flex flex-col gap-2 text-white text-xl font-bold">
            <p>DỊCH VỤ</p>
            <div className="flex-grow border-b-4 w-12 border-white"></div>
          </div>
          <ul className="flex flex-col uppercase gap-3 font-medium">
            {listServices.map((item, index) => (
              <li key={index}>
                <Link href={item.navigate} className="hover:underline">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3 col-span-1">
          <div className="flex flex-col gap-2 text-white text-xl font-bold">
            <p>VỀ CHÚNG TÔI</p>
            <div className="flex-grow border-b-4 w-12 border-white"></div>
          </div>

          <ul className="flex flex-col uppercase gap-3 font-medium">
            {aboutUs.map((item, index) => (
              <li key={index}>
                <Link href={item.navigate} className="hover:underline">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Image src="/images/title.png" width={400} height={400} alt="title" />
      </div>
      <div className="flex items-center justify-center pt-6">
        <p className="text-center">
          Copyright 2024 © DMC-Corp - TRUNG TÂM BẢO HÀNH VÀ SỬA CHỮA BẾP TỪ CHÂU
          ÂU
        </p>
      </div>
    </div>
  );
}

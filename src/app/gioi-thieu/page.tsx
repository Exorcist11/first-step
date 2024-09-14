import Image from "next/image";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import Link from "next/link";
import Break from "@/components/break";

export default function AboutUS() {
  return (
    <section className="flex flex-col gap-5">
      <div className="text-center font-bold text-3xl py-4 bg-[#4e3f34] text-white">
        <h1 className="text-center">
          TRUNG TÂM BẢO HÀNH VÀ SỬA CHỮA BẾP TỪ CHÂU ÂU
        </h1>
        <div className="flex items-center justify-center mt-3">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/gioi-thieu">Giới thiệu</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <div className="flex flex-col laptop:flex-row items-stretch gap-4 mt-10">
        <div className="flex-shrink-0">
          <Image
            src="/images/about/ve-chung-toi.jpg"
            alt="Về chúng tôi"
            width={600}
            height={500}
            className="rounded-xl object-cover object-center h-full"
          />
        </div>

        <div className="bg-[#f5f5f5] p-10 w-full rounded-xl flex flex-col justify-center gap-3">
          <h3 className="font-bold text-4xl text-[#5c4a3e] ">Về chúng tôi</h3>
          <p className="text-justify font-light">
            Trung tâm bảo hành và sửa chữa bếp từ châu âu chuyên cung cấp các
            dịch vụ sửa chữa thiết bị điện tử như bếp từ, tivi, thiết bị âm
            thanh,... Với đội ngũ kỹ thuật chuyên nghiệp, trách nhiệm chúng tôi
            cam kết dịch vụ tốt nhất đến tay khách hàng với giá cả hợp lý nhất.
          </p>

          <Link
            href="/"
            className="px-5 py-3 rounded-none bg-[#5f4841] text-white w-fit"
          >
            Khám phá
          </Link>
        </div>
      </div>
      <Break title="Giới thiệu về trung tâm bảo hành bếp từ châu âu" />
      <div className="laptop:grid laptop:grid-cols-4 flex flex-col gap-7">
        <div className="laptop:col-span-1 text-center flex flex-col gap-3 items-center ">
          <p className="text-7xl font-mono font-bold">1</p>
          <p className="font-sans font-semibold text-2xl">Tầm nhìn</p>
          <hr className="bg-black h-0.5 w-36" />
          <p className="font-light">
            Trở thành trung tâm hàng đầu tại Việt Nam trong lĩnh vực bảo hành và
            sửa chữa bếp từ Châu Âu.
          </p>
        </div>

        <div className="laptop:col-span-1 text-center flex flex-col gap-3 items-center">
          <p className="text-7xl font-mono font-bold">2</p>
          <p className="font-sans font-semibold text-2xl">Sứ mệnh</p>
          <hr className="bg-black h-0.5 w-36" />
          <p className="font-light">
            Đặt khách hàng làm trung tâm, cải tiến chất lượng dịch vụ, phát
            triển đội ngũ chuyên nghiệp, minh bạch, trung thực và có trách
            nhiệm.
          </p>
        </div>

        <div className="laptop:col-span-1 text-center flex flex-col gap-3 items-center">
          <p className="text-7xl font-mono font-bold">3</p>
          <p className="font-sans font-semibold text-2xl">
            Triết lý kinh doanh
          </p>
          <hr className="bg-black h-0.5 w-36" />
          <p className="font-light">
            Đặt khách hàng làm trung tâm, cải tiến chất lượng dịch vụ, phát
            triển đội ngũ chuyên nghiệp, minh bạch, trung thực và có trách
            nhiệm.
          </p>
        </div>

        <div className="laptop:col-span-1 text-center flex flex-col gap-3 items-center">
          <p className="text-7xl font-mono font-bold">4</p>
          <p className="font-sans font-semibold text-2xl">Giá trị cốt lõi</p>
          <hr className="bg-black h-0.5 w-36" />
          <p className="font-light">
            Chất lượng - Chuyên nghiệp - Tận tâm - Minh bạch - Sáng tạo - Bền
            vững
          </p>
        </div>
      </div>
      <Break title="Thông tin liên hệ" />

      <div className="flex laptop:flex-row flex-col gap-4 justify-center mb-10">
        <div className="bg-[#f5f5f5] basis-1/2 flex flex-col gap-4 rounded-xl p-10">
          <p className="font-bold tex-xl uppercase">
            Trung tâm bảo hành và sửa chữa bếp từ châu âu
          </p>
          <ul className="list-disc pl-10 flex flex-col gap-4">
            <li>
              <strong>Địa chỉ: </strong> VN
            </li>
            <li>
              <strong>Hotline: </strong> <a href="tel:097.328.5665">097.328.5665</a>
            </li>
            <li>
              <strong>Website: </strong> VN
            </li>
            <li>
              <strong>Zalo: </strong> VN
            </li>
          </ul>
        </div>
        <div className="basis-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.473788451511!2d105.73253187489011!3d21.053730980601834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345457e292d5bf%3A0x20ac91c94d74439a!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2hp4buHcCBIw6AgTuG7mWk!5e0!3m2!1svi!2s!4v1718271964282!5m2!1svi!2s"
            height="450"
            width="100%"
            className="border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

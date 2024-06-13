"use client";
import React from "react";
import { Metadata } from "next";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

// export const metadata: Metadata = {
//   title: "Liên Hệ",
//   description: "Trung Tâm Bảo Hành Và Sửa Chữa Bếp Từ Châu Âu",
// };

export default function LienHe() {
  const { toast } = useToast();
  const [data, setData] = React.useState({
    name: "",
    phone: "",
    content: "",
  });
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendContact = async () => {
    const formURL =
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeAHY9ekU4UKSzxzNWlZup2vFZWB53zD4d1KQs2ZrAhzGA6Zg/formResponse";
    const formData = new FormData();
    formData.append("entry.261664957", data.name);
    formData.append("entry.1767737394", data.phone);
    formData.append("entry.1732045073", data.content);

    await fetch(formURL, {
      method: "POST",
      body: formData,
    });
  };
  return (
    <section className="flex flex-col gap-4">
      <div className="text-center font-bold text-3xl py-4 bg-[#4e3f34] text-white">
        <h1 className="text-center">Liên hệ</h1>
        <div className="flex items-center justify-center mt-3">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/lien-he">Liên hệ</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="flex gap-4 laptop:flex-row flex-col mb-10">
        <div className="basis-1/2 flex flex-col gap-3">
          <p className="font-bold text-xl uppercase">
            Trung tâm bảo hành và sửa chữa bếp từ châu âu
          </p>
          <p>
            Điện thoại:{" "}
            <strong className="text-red-600">
              02462.534.594 – 0948.265.665
            </strong>
          </p>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.473788451511!2d105.73253187489011!3d21.053730980601834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345457e292d5bf%3A0x20ac91c94d74439a!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2hp4buHcCBIw6AgTuG7mWk!5e0!3m2!1svi!2s!4v1718271964282!5m2!1svi!2s"
              width="100%"
              height="300"
              className="border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="flex flex-col gap-4 basis-1/2">
          <Input placeholder="Họ tên" name="name" onChange={handleChange} />
          <Input
            placeholder="Số điện thoại"
            name="phone"
            onChange={handleChange}
          />
          <Textarea
            placeholder="Nội dung"
            className="h-40"
            name="content"
            onChange={handleChange}
          />
          <Button onClick={sendContact}>Gửi</Button>
        </div>
      </div>
    </section>
  );
}

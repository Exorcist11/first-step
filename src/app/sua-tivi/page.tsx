import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function SuaTV() {
  return (
    <div className="text-center font-bold text-3xl py-4 bg-red-500">
      <h1 className="text-center">SỬA BẾP TỪ 24/7 TẠI HÀ NỘI</h1>
      <div className="flex items-center justify-center mt-3">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/gioi-thieu">
                Sữa chữa bếp từ tại Hà Nội uy tín - giá rẻ
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
}

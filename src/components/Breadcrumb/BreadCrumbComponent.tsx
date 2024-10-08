import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

interface BreadCrumbProps {
  name: string;
  link: string;
  title: string;
}
export default function BreadCrumbComponent({
  name,
  link,
  title,
}: BreadCrumbProps) {
  return (
    <div className="text-center font-bold text-xl tablet:text-3xl laptop:text-3xl py-4 bg-[#ececec]">
      <h1 className="text-center uppercase">{title}</h1>
      <div className="flex items-center justify-center mt-3">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href={link}>{name}</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
}

import { Metadata } from "next";
import * as React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import Image from "next/image";
import { FaFire } from "react-icons/fa6";
import Link from "next/link";
import {
  BLOG_STOVE,
  PROCESS,
  QUALITY_COMMIT,
  SERVICE_STOVE,
  VENDER_STOVE,
} from "@/utils/electronic-stove";
import { PRICE } from "@/utils/price";
import ReportPrice from "@/components/ReportPrice/ReportPrice";
import BreadCrumbComponent from "@/components/Breadcrumb/BreadCrumbComponent";

export const metadata: Metadata = {
  title: "Sữa Chữa Bếp Điện",
  description:
    "Trung tâm bảo hành và sữa chữa bếp từ Châu Âu tại Hà Nội chuyên cung cấp dịch vụ sửa chữa bếp từ chuyên nghiệp và uy tín. Liên hệ ngay với chúng tôi qua hotline 02462.534.594",
};

export default function SuaBepDien() {
  return (
    <section className="flex flex-col gap-5">
       <BreadCrumbComponent
        title="SỬA BẾP TỪ 24/7 TẠI HÀ NỘI"
        name="Sửa chữa bếp từ tại Hà Nội uy tín - giá rẻ"
        link="/sua-bep-dien"
      />

      <p className="mt-3 text-lg text-justify">
        <strong> Trung tâm bảo hành và sữa chữa bếp từ Châu Âu</strong> tại Hà
        Nội chuyên cung cấp dịch vụ sửa chữa bếp từ chuyên nghiệp và uy tín. Với
        đội ngũ kỹ thuật viên giàu kinh nghiệm và trang thiết bị hiện đại, chúng
        tôi cam kết mang đến cho khách hàng dịch vụ sửa chữa bếp từ tốt nhất.
      </p>

      <p className="mt-3 text-lg text-justify">
        <strong> Trung tâm bảo hành và sữa chữa bếp từ Châu Âu</strong> hiểu
        rằng bếp từ là thiết bị quan trọng trong gia đình. Vì vậy, chúng tôi
        cung cấp dịch vụ sửa chữa bếp từ tại nhà, giúp khách hàng tiết kiệm thời
        gian và công sức. Chỉ cần một cuộc gọi, kỹ thuật viên của chúng tôi sẽ
        có mặt tại nhà bạn để kiểm tra và sửa chữa bếp từ một cách nhanh chóng
        và hiệu quả.
      </p>

      <p className="text-lg text-justify">
        Đội ngũ kỹ thuật viên của chúng tôi được đào tạo chuyên sâu và có nhiều
        năm kinh nghiệm trong việc sửa chữa bếp từ. Chúng tôi tự hào là đơn vị
        sửa chữa các thương hiệu bếp từ cao cấp như Bosch, Siemens, Teka,
        Electrolux và nhiều thương hiệu khác. Với trang thiết bị hiện đại, chúng
        tôi đảm bảo quá trình sửa chữa diễn ra nhanh chóng và chính xác.
      </p>

      <p className="text-lg text-justify">
        Nếu bạn sản phẩm bếp từ của bạn đang gặp vấn đề hay cần tìm trung tâm
        sửa bếp từ uy tín tại Hà Nội, hãy liên hệ qua số hotline 24/7:{" "}
        <span className="text-red-600 font-bold">
          <Link href="tel:097.328.5665">097.328.5665</Link>
        </span>{" "}
        hoặc số{" "}
        <span className="text-red-600 font-bold">
          <Link href="tel:02462.534.594">02462.534.594</Link>
        </span>{" "}
        để được tư vấn miễn phí.
      </p>
      <div className="flex items-center justify-center">
        <Image
          src="/images/trung-tam-sua-chua-bep-tu-chau-au.png"
          alt="trung-tam-sua-chua-bep-tu-chau-au"
          width={1200}
          height={300}
        />
      </div>

      <h2 className="font-bold text-2xl uppercase">
        CÁC DỊCH VỤ SỬA CHỮA BẾP TỪ TẠI NHÀ
      </h2>
      <p className="text-lg font-medium">
        Trung tâm bảo hành và sữa chữa bếp từ Châu Âu chuyên nhận sửa chữa bếp
        từ tại nhà với các lỗi khác nhau như:
      </p>
      <div className="text-lg text-justify">
        <ul className="flex flex-col gap-2 pl-5">
          {SERVICE_STOVE.map((item, index) => (
            <li className="flex items-center gap-3 " key={index}>
              <FaFire color="red" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src="/images/loi-e0-bep-tu.jpg"
          alt="bep-tu-loi-e0"
          width={600}
          height={300}
        />
      </div>
      <p className="text-lg text-justify">
        Sau một thời gian dài sử dụng, bếp từ có thể gặp một số vấn đề kỹ thuật
        không mong muốn. Để được kiểm tra và hỗ trợ khi cần thiết, hãy gọi ngay
        đến hotline 24/7{" "}
        <span className="text-red-600 font-bold">
          <Link href="tel:097.328.5665">097.328.5665</Link>
        </span>{" "}
        để được đội ngũ kỹ thuật hỗ trợ nhanh chóng.
      </p>
      <h2 className="font-bold text-2xl">
        BẢNG GIÁ DỊCH VỤ SỬA CHỮA BẾP TỪ TẠI NHÀ
      </h2>
      {/* Báo giá */}
      <ReportPrice listPrice={PRICE} />

      <h2 className="font-bold text-2xl">CAM KẾT CỦA CHÚNG TÔI</h2>

      <p className="text-lg text-justify">
        Trung tâm bảo hành và sửa chữa bếp từ chúng tôi xin cam kết:
      </p>

      <div className="flex flex-col gap-3 laptop:grid laptop:grid-cols-3">
        {QUALITY_COMMIT.map((item, index) => (
          <div
            className="laptop:col-span-1 border rounded-xl p-5 flex flex-col items-center justify-center gap-5"
            key={index}
          >
            <item.icon size={50} />
            <p className="text-2xl font-bold text-[#5b4a3a] underline uppercase ">
              {item.title}
            </p>
            <p className="text-center text-[#6a584b]">{item.describe}</p>
          </div>
        ))}
      </div>

      <h2 className="font-bold text-2xl">QUY TRÌNH LÀM VIỆC</h2>

      <div className="flex flex-col items-center gap-4">
        <Image
          src={"/images/quy-trinh-sua-chua-bep-tu.png"}
          alt="Quy trình sữa chữa bếp từ"
          height={500}
          width={600}
        />

        <div className="text-lg text-justify">
          <p>
            Để dịch chất lượng sửa chữa được đạt kết quả cao nhất, dịch vụ sửa
            chữa bếp từ tạo nhà Hà Nội của Trung tâm sửa chữa bếp từ Châu Âu
            được chia thành các bước sau:
          </p>
          <ul className="flex flex-col gap-3 pl-5 mt-4">
            {PROCESS.map((item, index) => (
              <li key={index}>
                <strong>{item.title}:</strong> {item.description}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h2 className="font-bold text-2xl">
        HƯỚNG DẪN KHẮC PHỤC MỘT SỐ LỖI THƯỜNG GẶP
      </h2>

      <div className="flex flex-col gap-3 laptop:grid laptop:grid-cols-3 laptop:gap-5">
        {BLOG_STOVE.map((item, index) => (
          <Link href={item.href} key={index}>
            <div className="flex flex-col items-center justify-between gap-5 cursor-pointer group border rounded-xl p-5 h-full">
              <div className="relative w-full h-64 overflow-hidden transition-shadow hover:shadow-black/30">
                <Image
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  src={item.imgLink}
                  alt={item.alt}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
              <div className="text-xl font-bold text-[#5b4a3a] text-center">
                <p>{item.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <h2 className="font-bold text-2xl">CÁC LOẠI BẾP HỖ TRỢ</h2>
      <div className="grid grid-cols-2 laptop:grid-cols-4 mb-10">
        {VENDER_STOVE.map((item, index) => (
          <div key={index} className="col-span-1 p-5 relative h-[150px]">
            <Image
              className="h-full w-full transition-transform duration-500 group-hover:scale-105 object-center cursor-pointer"
              src={`/images/bep-tu/${item.link_img}`}
              alt={item.title}
              layout="fill"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

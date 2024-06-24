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
import { FaFire, FaCheck, FaCrown, FaMoneyBillWave } from "react-icons/fa6";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sữa Chữa Bếp Điện",
  description: "Trung Tâm Bảo Hành Và Sửa Chữa Bếp Từ Châu Âu",
};

type imgProvider = {
  link_img: string;
  title: string;
};

const arrImg: imgProvider[] = [
  { link_img: "bep-tu-bluestone.png", title: "bep-tu-bluestone" },
  { link_img: "bep-tu-bosch.png", title: "bep-tu-bosch" },
  { link_img: "bep-tu-chefs.png", title: "bep-tu-chefs" },
  { link_img: "bep-tu-electrolux.png", title: "bep-tu-electrolux" },
  { link_img: "bep-tu-elmich.png", title: "bep-tu-elmich" },
  { link_img: "bep-tu-sunhouse.png", title: "be-tu-sunhouse" },
  { link_img: "bep-tu-teka.png", title: "be-tu-teka" },
  { link_img: "logo-bep-tu-midea.jpg", title: "logo-bep-tu-midea" },
];

export default function SuaBepDien() {
  return (
    <section className="flex flex-col gap-5">
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
                <BreadcrumbLink href="/sua-bep-dien">
                  Sữa chữa bếp từ tại Hà Nội uy tín - giá rẻ
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

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
        <span className="text-red-600 font-bold">097.328.5665</span> hoặc số{" "}
        <span className="text-red-600 font-bold">02462.534.594</span> để được tư
        vấn miễn phí.
      </p>
      <div className="flex items-center justify-center">
        <Image
          src="/images/trung-tam-sua-chua-bep-tu-chau-au.png"
          alt="trung-tam-sua-chua-bep-tu-chau-au"
          width={1200}
          height={300}
        />
      </div>

      <p className="font-bold text-2xl">CÁC DỊCH VỤ SỬA CHỮA BẾP TỪ TẠI NHÀ</p>
      <p className="text-lg font-medium">
        Trung tâm bảo hành và sữa chữa bếp từ Châu Âu chuyên nhận sửa chữa bếp
        từ tại nhà với các lỗi khác nhau như:
      </p>
      <div className="text-lg text-justify">
        <ul className="flex flex-col gap-2 pl-5">
          <li className="flex items-center gap-3 ">
            <FaFire color="red" />
            Bếp từ không lên nguồn, bị mất nguồn hay lên nguồn rồi tắt
          </li>
          <li className="flex items-center gap-3 ">
            <FaFire color="red" />
            Bếp từ không nhận nồi, bếp từ không nóng
          </li>
          <li className="flex items-center gap-3 ">
            <FaFire color="red" />
            Bếp từ bị nhảy aptomat, bị nổ cầu chì, chết IGBT
          </li>

          <li className="flex items-center gap-3 ">
            <FaFire color="red" />
            Bếp từ bị rò điện, vào điện nhưng không bật được
          </li>
          <li className="flex items-center gap-3 ">
            <FaFire color="red" />
            Bếp từ kêu tạch tạch không nóng
          </li>

          <li className="flex items-center gap-3 ">
            <FaFire color="red" />
            Bếp điện từ bị loạn cảm ứng
          </li>

          <li className="flex items-center gap-3 ">
            <FaFire color="red" />
            Bếp từ đôi bị hỏng 1 bên
          </li>

          <li className="flex items-center gap-3 ">
            <FaFire color="red" />
            Bếp từ cảm ứng không nhạy, hỏng cảm ứng
          </li>

          <li className="flex items-center gap-3 ">
            <FaFire color="red" />
            Bếp từ bị nóng mặt kính, cháy mặt kính, vỡ mặt kính
          </li>

          <li className="flex items-center gap-3 ">
            <FaFire color="red" />
            Bếp từ bị khóa
          </li>

          <li className="flex items-center gap-3 ">
            <FaFire color="red" />
            Bếp từ báo các lỗi E0, E1, E2, E3, E4, E5, E6, E7, E8, E9 trên bảng
            điều khiển
          </li>
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
        <span className="text-red-600 font-bold">097.328.5665</span> để được đội
        ngũ kỹ thuật hỗ trợ nhanh chóng.
      </p>
      <p className="font-bold text-2xl">
        BẢNG GIÁ DỊCH VỤ SỬA CHỮA BẾP TỪ TẠI NHÀ
      </p>
      {/* Báo giá */}
      <div>
        <table className="table-auto w-full text-lg">
          <thead className="font-semibold uppercase  bg-gray-50">
            <tr>
              <th className="p-2 whitespace-nowrap ">
                <div className="font-semibold text-left">Hạng mục sữa chữa</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Giá dịch vụ</div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white bg-[#f0f0f0]">
            <tr>
              <td className="p-2 whitespace-nowrap">
                <div className="font-medium text-green-500">Sửa bếp từ đơn</div>
              </td>
              <td className="p-2 whitespace-nowrap">
                150.000 VND - 200.000 VND
              </td>
            </tr>

            <tr>
              <td className="p-2 whitespace-nowrap">
                <div className="font-medium text-green-500">Sửa bếp từ đơn</div>
              </td>
              <td className="p-2 whitespace-nowrap">
                150.000 VND - 200.000 VND
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="font-bold text-2xl">CAM KẾT CỦA CHÚNG TÔI</p>

      <p className="text-lg text-justify">
        Trung tâm bảo hành và sửa chữa bếp từ chúng tôi xin cam kết:
      </p>

      <div className="flex flex-col gap-3 laptop:grid laptop:grid-cols-3">
        <div className="laptop:col-span-1 border rounded-xl p-5 flex flex-col items-center justify-center gap-5">
          <FaCheck size={50} />
          <p className="text-2xl font-bold text-[#5b4a3a] underline uppercase ">
            Uy Tín và Chuyên Nghiệp
          </p>
          <p className="text-center text-[#6a584b]">
            Chúng tôi ưu tiên chất lượng, uy tín, và nâng cao dịch vụ để đáp ứng
            nhu cầu khách hàng.
          </p>
        </div>

        <div className="laptop:col-span-1 border rounded-xl p-5 flex flex-col items-center justify-center gap-5">
          <FaMoneyBillWave size={50} />
          <p className="text-2xl font-bold text-[#5b4a3a] underline uppercase">
            Giá Cả Hợp Lý
          </p>
          <p className="text-center text-[#6a584b]">
            Chúng tôi cam kết cung cấp dịch vụ với mức giá cạnh tranh và minh
            bạch.
          </p>
        </div>

        <div className="laptop:col-span-1 border rounded-xl p-5 flex flex-col items-center justify-center gap-5">
          <FaCrown size={50} />
          <p className="text-2xl font-bold text-[#5b4a3a] underline uppercase">
            Hỗ Trợ Khách Hàng
          </p>
          <p className="text-center text-[#6a584b]">
            Đội ngũ chăm sóc khách hàng luôn sẵn sàng hỗ trợ và giải đáp mọi
            thắc mắc của quý khách.
          </p>
        </div>
      </div>

      <p className="font-bold text-2xl">QUY TRÌNH LÀM VIỆC</p>

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
            <li>
              <strong>Liên Hệ và Tư Vấn:</strong> Quý khách có thể liên hệ với
              chúng tôi qua điện thoại hoặc website để được tư vấn và đặt lịch
              sửa chữa.
            </li>
            <li>
              <strong>Khảo Sát và Báo Giá:</strong> Kỹ thuật viên sẽ đến tận nơi
              để kiểm tra và đưa ra báo giá cụ thể trước khi tiến hành sửa chữa.
            </li>
            <li>
              <strong>Sửa Chữa và Bảo Dưỡng:</strong> Sau khi khách hàng đồng ý,
              chúng tôi sẽ tiến hành sửa chữa và bảo dưỡng bếp từ.
            </li>
            <li>
              <strong>Bàn Giao và Thanh Toán:</strong> Bếp từ sẽ được bàn giao
              lại cho khách hàng sau khi hoàn tất, kèm theo hướng dẫn sử dụng và
              bảo dưỡng. Thanh toán sẽ được thực hiện sau khi khách hàng hài
              lòng với dịch vụ.
            </li>
          </ul>
        </div>
      </div>

      <p className="font-bold text-2xl">
        HƯỚNG DẪN KHẮC PHỤC MỘT SỐ LỖI THƯỜNG GẶP
      </p>

      <div className="flex flex-col gap-3 laptop:grid laptop:grid-cols-3">
        <Link href="/nguyen-nhan-va-cach-xu-ly-loi-bep-tu-khong-len-nguon">
          <div className="laptop:col-span-1 cursor-pointer group border rounded-xl p-5 flex flex-col items-center justify-center gap-5 group">
            <div className="relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-black/30 w-full h-64">
              <div className="w-full h-full">
                <Image
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 object-center cursor-pointer"
                  src="/images/loi-bep-tu/nguyen-nhan-va-cach-xu-ly-loi-bep-tu-khong-len-nguon.jpg"
                  alt="nguyen-nhan-va-cach-xu-ly-loi-bep-tu-khong-len-nguon"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
            </div>

            <div className="text-xl font-bold text-[#5b4a3a] text-center ">
              <p>Khắc phục lỗi không nhận điện bếp</p>
            </div>
          </div>
        </Link>

        <Link href="/loi-bep-tu-chay-binh-thuong-khong-nong">
          <div className="laptop:col-span-1 cursor-pointer group border rounded-xl p-5 flex flex-col items-center justify-center gap-5 group">
            <div className="relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-black/30 w-full h-64">
              <div className="w-full h-full">
                <Image
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                  src="/images/loi-bep-tu/loi-bep-tu-chay-binh-thuong-khong-nong.jpg"
                  alt="loi-bep-tu/loi-bep-tu-chay-binh-thuong-khong-nong"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
            </div>

            <div className="text-xl font-bold text-[#5b4a3a] text-center ">
              <p>Bếp từ nhận điện nhưng không nóng</p>
            </div>
          </div>
        </Link>

        <Link href="/bep-tu-loi-e0-e1-e2-e3-e4">
          <div className="laptop:col-span-1 cursor-pointer group border rounded-xl p-5 flex flex-col items-center justify-center gap-5 group">
            <div className="relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-black/30 w-full h-64">
              <div className="w-full h-full">
                <Image
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 object-center cursor-pointer"
                  src="/images/loi-bep-tu/bep-tu-loi-e0-e1-e2-e3-e4.png"
                  alt="bep-tu-loi-e0-e1-e2-e3-e4"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
            </div>

            <div className="text-xl font-bold text-[#5b4a3a] text-center ">
              <p>Các lỗi E trên bếp từ và cách khắc phục</p>
            </div>
          </div>
        </Link>
      </div>

      <p className="font-bold text-2xl">CÁC LOẠI BẾP HỖ TRỢ</p>
      <div className="grid grid-cols-4 mb-10">
        {arrImg.map((item, index) => (
          <div key={index} className="col-span-1 p-5">
            <Image
              className="h-full w-full transition-transform duration-500 group-hover:scale-105 object-center cursor-pointer"
              src={`/images/bep-tu/${item.link_img}`}
              alt={item.title}
              width={500}
              height={500}
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

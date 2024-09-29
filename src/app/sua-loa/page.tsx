import BreadCrumbComponent from "@/components/Breadcrumb/BreadCrumbComponent";
import { PRODUCT_CAN_FIXED } from "@/utils/speaker-issuse";
import Image from "next/image";
import React from "react";

export default function SuaLoa() {
  return (
    <div className="flex flex-col gap-10 mb-5">
      <BreadCrumbComponent
        title="SỬA THIẾT BỊ ÂM THANH 24/7 TẠI HÀ NỘI"
        name="Sửa chữa thiết bị âm thanh tại Hà Nội uy tín - giá rẻ"
        link="/sua-loa"
      />

      <h2 className="text-justify">
        Bạn đang gặp vấn đề với thiết bị âm thanh của mình? Loa bị rè, ampli mất
        tiếng, hay micro không bắt sóng? Hãy đến với dịch vụ sửa chữa thiết bị
        âm thanh tại Hà Nội -{" "}
        <strong> Trung Tâm Sửa Chữa Bếp Từ Châu Âu</strong>, nơi chúng tôi cung
        cấp giải pháp chuyên nghiệp và toàn diện cho các vấn đề về âm thanh.
      </h2>

      <div className="flex items-center justify-center">
        <Image
          src="/images/sua-loa/sua-loa-ha-noi.jpg"
          alt="dich-vu-sua-chua-sua-loa-ha-noi"
          width={600}
          height={300}
        />
      </div>

      {PRODUCT_CAN_FIXED.map((item, index) => (
        <div key={index} className="text-justify flex flex-col gap-2">
          <h3 className="font-bold text-2xl uppercase">{item.product}</h3>
          <p>{item.product_des}:</p>
          <ul className="list-disc pl-10 flex flex-col gap-2">
            {item.errors.map((error, index_error) => (
              <li key={index_error}>
                <p>
                  {error.error_type}: {error.fixed}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <h2 className="font-bold text-2xl uppercase">
        TẠI SAO NÊN CHỌN DỊCH VỤ SỬA CHỮA ÂM THANH CỦA CHÚNG TÔI
      </h2>

      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-2xl uppercase">
          Liên Hệ Ngay Để Được Tư Vấn Miễn Phí
        </h2>
        <p>
          Nếu bạn đang gặp sự cố với hệ thống âm thanh của mình, đừng ngần ngại
          liên hệ với chúng tôi để nhận được sự tư vấn và hỗ trợ tốt nhất:
        </p>

        <ul className="list-disc pl-10">
          <li>Địa chỉ:</li>
          <li>Hotline: </li>
          <li>Email: </li>
          <li>Thời gian làm việc: 7:30 – 21:00, tất cả các ngày trong tuần.</li>
        </ul>
      </div>
      <p>
        Dịch vụ sửa chữa thiết bị âm thanh tại Hà Nội -{" "}
        <strong> Trung Tâm Sửa Chữa Bếp Từ Châu Âu</strong> của chúng tôi đảm
        bảo mang lại sự hài lòng cho mọi khách hàng với chất lượng dịch vụ tốt
        nhất và giá cả hợp lý. Hãy để chúng tôi giúp bạn khôi phục lại chất
        lượng âm thanh hoàn hảo cho thiết bị của bạn ngay hôm nay!
      </p>
    </div>
  );
}

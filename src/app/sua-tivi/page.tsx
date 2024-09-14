import { Metadata } from "next";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sữa Chữa Tivi",
  keywords: "Sữa chữa tivi, bảo hành tivi, tivi châu âu",
  description:
    "Trung tâm bảo hành và sữa chữa bếp từ Châu Âu tại Hà Nội chuyên cung cấp dịch vụ sửa chữa Tivi và bảo hành các loại tivi Sony, Samsung, LG, TCL, Xiaomi, Toshiba. Liên hệ ngay với chúng tôi qua hotline 02462.534.594",
};
export default function SuaTV() {
  return (
    <div className="flex flex-col gap-4 mb-10">
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
                <BreadcrumbLink href="/sua-tivi">
                  Sữa chữa TV tại Hà Nội uy tín - giá rẻ
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <p className="mt-3 text-lg text-justify">
        Bạn đang gặp sự cố với chiếc tivi của mình và cần tìm một dịch vụ sửa
        chữa tivi uy tín tại Hà Nội?
        <strong> Trung Tâm Sửa Chữa Bếp Từ Châu Âu</strong> tự hào mang đến cho
        bạn dịch vụ sửa chữa tivi chuyên nghiệp, nhanh chóng và đáng tin cậy.
      </p>

      <h2 className="font-bold text-2xl">
        SỬA CHỮA TV TẠI HÀ NỘI - TRUNG TÂM SỬA CHỮA BẾP TỪ CHÂU ÂU
      </h2>

      <div className="text-lg gap-4 flex flex-col text-justify">
        <p>
          Với nhiều năm kinh nghiệm trong nghề sửa chữa tivi, chúng tôi cam kết
          rằng dịch vụ sửa chữa tivi tại Hà Nội luôn có mức giá hợp lý và chất
          lượng tốt nhất.
        </p>
        <div className="flex items-center justify-center">
          <Image
            src="/images/sua-tv/sua-chua-tv-tai-ha-noi.jpg"
            alt="dich-vu-sua-chua-tv-tai-ha-noi"
            width={600}
            height={300}
          />
        </div>
        <p>
          Với nhiều năm kinh nghiệm trong lĩnh vực sửa chữa thiết bị điện tử,
          đặc biệt là tivi, chúng tôi có đội ngũ kỹ thuật viên được đào tạo bài
          bản, kiến thức sâu rộng về các dòng tivi từ phổ thông đến cao cấp như
          TV Xiaomi, TV Samsung, TV Sony, ...
        </p>

        <p>
          Hiểu được sự bất tiện khi phải mang tivi đi sửa, chúng tôi cung cấp
          dịch vụ sửa chữa tivi tại nhà trên khắp các quận, huyện của Hà Nội.
          Hãy liên hệ ngay qua hotline{" "}
          <span className="text-red-600 font-bold">02462.534.594</span>, kỹ
          thuật viên sẽ đến kiểm tra và sửa chữa tivi ngay tại nhà bạn.
        </p>

        <p>
          Trung tâm chúng tôi được trang bị các thiết bị, công cụ hiện đại, giúp
          việc chẩn đoán và sửa chữa tivi được thực hiện nhanh chóng và chính
          xác. Với hệ thống máy móc tiên tiến, chúng tôi có khả năng phát hiện
          và khắc phục mọi vấn đề từ những lỗi nhỏ nhất đến các hư hỏng phức tạp
          trên mọi dòng tivi hiện có trên thị trường. Chúng tôi luôn cập nhật
          công nghệ mới nhất, đảm bảo rằng quá trình sửa chữa không chỉ hiệu quả
          mà còn tiết kiệm thời gian cho khách hàng.
        </p>

        <p>
          Chúng tôi cam kết cung cấp dịch vụ với mức giá cạnh tranh nhất thị
          trường, minh bạch trong việc báo giá và không phát sinh chi phí bất
          ngờ. Trước khi tiến hành sửa chữa, chúng tôi luôn tư vấn và thông báo
          chi tiết về chi phí cho khách hàng. Với các gói dịch vụ đa dạng, từ
          sửa chữa tại nhà đến bảo trì định kỳ, chúng tôi đáp ứng mọi nhu cầu và
          khả năng tài chính của khách hàng. Bạn có thể hoàn toàn yên tâm về
          chất lượng dịch vụ mà không phải lo lắng về giá cả.
        </p>

        <p>
          Dịch vụ sửa chữa tivi của chúng tôi luôn đi kèm với chế độ bảo hành
          dài hạn, giúp khách hàng yên tâm sử dụng. Chúng tôi hiểu rằng sự an
          tâm của khách hàng là trên hết, do đó tất cả các dịch vụ sửa chữa đều
          được bảo hành từ 6 tháng đến 1 năm, tùy thuộc vào loại hình dịch vụ và
          linh kiện thay thế. Trong thời gian bảo hành, nếu tivi của bạn gặp bất
          kỳ vấn đề gì liên quan đến lỗi đã sửa chữa, chúng tôi sẽ hỗ trợ khắc
          phục hoàn toàn miễn phí.
        </p>

        <p>
          Với những ưu điểm vượt trội về trang thiết bị, giá cả, bảo hành và
          chất lượng dịch vụ, chúng tôi tự hào là đơn vị sửa chữa tivi uy tín
          hàng đầu tại Hà Nội. Hãy liên hệ với chúng tôi qua{" "}
          <span className="text-red-600 font-bold">02462.534.594</span> để trải
          nghiệm dịch vụ sửa chữa tivi chuyên nghiệp và tận tâm.
        </p>
      </div>

      <h2 className="font-bold text-2xl">
        CÁC LỖI TIVI THƯỜNG GẶP VÀ CÁCH KHẮC PHỤC
      </h2>

      <div className="text-lg gap-4 flex flex-col text-justify">
        <ul>
          <li className="flex flex-col gap-4">
            <strong className="text-xl">Mất Hình, Mất Tiếng</strong>
            <p>
              Mất hình hoặc mất tiếng là một trong những lỗi phổ biến mà người
              dùng tivi hay gặp phải. Lỗi này có thể xuất phát từ nhiều nguyên
              nhân khác nhau, bao gồm cả lỗi phần cứng và phần mềm. Khi gặp tình
              trạng này, kỹ thuật viên của chúng tôi sẽ tiến hành kiểm tra chi
              tiết từng bộ phận, từ mạch xử lý hình ảnh, âm thanh cho đến các
              kết nối và linh kiện khác. Dựa trên kết quả kiểm tra, chúng tôi sẽ
              thay thế hoặc sửa chữa các linh kiện bị hỏng, đảm bảo tivi hoạt
              động trở lại bình thường.
            </p>

            <div className="flex items-center justify-center">
              <Image
                src="/images/sua-tv/loi-man-hinh-tivi.jpg"
                alt="loi-man-hinh-tivi"
                width={600}
                height={300}
              />
            </div>
          </li>

          <li className="flex flex-col gap-4">
            <strong className="text-xl">Màn Hình Bị Sọc, Nhiễu</strong>
            <p>
              Màn hình bị sọc hoặc nhiễu có thể làm giảm chất lượng trải nghiệm
              xem tivi. Nguyên nhân của hiện tượng này thường là do cáp tín hiệu
              hoặc panel màn hình gặp sự cố. Đội ngũ kỹ thuật viên của chúng tôi
              sẽ kiểm tra toàn bộ hệ thống cáp và panel màn hình để xác định
              chính xác nguồn gốc của lỗi. Tùy vào mức độ hư hỏng, chúng tôi sẽ
              tiến hành thay thế cáp tín hiệu hoặc sửa chữa, thay mới panel màn
              hình, đảm bảo hình ảnh sắc nét và ổn định.
            </p>

            <div className="flex items-center justify-center">
              <Image
                src="/images/sua-tv/loi-man-hinh-tivi.jpg"
                alt="loi-man-hinh-tivi"
                width={600}
                height={300}
              />
            </div>
          </li>

          <li className="flex flex-col gap-4">
            <strong className="text-xl">Tivi Không Lên Nguồn</strong>
            <p>
              Khi tivi không lên nguồn, có thể do các bộ phận như bộ nguồn, bo
              mạch chủ bị hỏng. Đây là lỗi nghiêm trọng, yêu cầu kỹ thuật viên
              có tay nghề cao để kiểm tra và khắc phục. Chúng tôi sẽ kiểm tra
              toàn bộ hệ thống điện của tivi, từ bộ nguồn, bo mạch chủ cho đến
              các linh kiện liên quan khác. Sau khi xác định nguyên nhân, chúng
              tôi sẽ sửa chữa hoặc thay thế các bộ phận bị hỏng, đảm bảo tivi
              của bạn có thể khởi động và hoạt động bình thường.
            </p>

            <div className="flex items-center justify-center">
              <Image
                src="/images/sua-tv/loi-man-hinh-tivi.jpg"
                alt="loi-man-hinh-tivi"
                width={600}
                height={300}
              />
            </div>
          </li>

          <li className="flex flex-col gap-4">
            <strong className="text-xl">Các Lỗi Khác</strong>
            <p>
              Ngoài các lỗi trên, tivi còn có thể gặp nhiều vấn đề khác như mất
              tín hiệu, không kết nối được với các thiết bị ngoại vi như đầu
              thu, máy chơi game, loa ngoài... Đội ngũ kỹ thuật viên của chúng
              tôi có kinh nghiệm xử lý đa dạng các lỗi này. Chúng tôi sẽ kiểm
              tra hệ thống kết nối, cổng giao tiếp và các thiết bị liên quan để
              xác định chính xác nguyên nhân và đưa ra giải pháp khắc phục hiệu
              quả. Dù là lỗi nhỏ hay phức tạp, chúng tôi đều có cách xử lý để
              đảm bảo tivi hoạt động tốt nhất.
            </p>

            <div className="flex items-center justify-center">
              <Image
                src="/images/sua-tv/loi-man-hinh-tivi.jpg"
                alt="loi-man-hinh-tivi"
                width={600}
                height={300}
              />
            </div>
          </li>

          <li className="">
            Chúng tôi hiểu rằng tivi là thiết bị giải trí quan trọng trong gia
            đình bạn, vì vậy, việc sửa chữa nhanh chóng và hiệu quả là ưu tiên
            hàng đầu của chúng tôi. Với đội ngũ kỹ thuật viên giàu kinh nghiệm
            và trang thiết bị hiện đại, chúng tôi cam kết mang đến dịch vụ sửa
            chữa tivi chất lượng cao, đáp ứng mọi yêu cầu của khách hàng. Hãy
            liên hệ với chúng tôi ngay khi tivi của bạn gặp sự cố để được hỗ trợ
            kịp thời và tận tâm.
          </li>
        </ul>
      </div>

      <h2 className="font-bold text-2xl">
        BẢNG GIÁ DỊCH VỤ SỬA CHỮA TIVI TẠI HÀ NỘI
      </h2>

      <div>
        <table className="table-auto w-full text-lg">
          <thead className="font-semibold uppercase bg-gray-50">
            <tr>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Hạng mục sữa chữa</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Giá (VNĐ)</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 whitespace-nowrap">
                Sửa lỗi màn hình (Full HD, 4K)
              </td>
              <td className="p-2 whitespace-nowrap">30,000</td>
            </tr>
            <tr>
              <td className=""></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="font-bold text-2xl">
        QUY TRÌNH SỬA CHỮA TIVI TẠI TRUNG TÂM
      </h2>

      <div>
        <div className="flex items-center justify-center">
          <Image
            src="/images/sua-tv/sua-chua-tivi-samsung.jpg"
            alt="sua-chua-tivi-samsung"
            width={600}
            height={300}
          />
        </div>

        <ul className="text-lg text-justify flex flex-col gap-5">
          <li className="flex flex-col gap-4">
            <strong>Bước 1: Tiếp Nhận Yêu Cầu</strong>
            <p>
              Khách hàng có thể liên hệ với chúng tôi qua hotline{" "}
              <span className="text-red-600 font-bold">02462.534.594 </span>
              hoặc truy cập website [Địa Chỉ Website] để đặt lịch sửa chữa tivi.
              Đội ngũ chăm sóc khách hàng của chúng tôi luôn sẵn sàng tiếp nhận
              và tư vấn chi tiết về các dịch vụ, giải đáp mọi thắc mắc của khách
              hàng. Chúng tôi sẽ thu thập thông tin chi tiết về tình trạng tivi
              và xác định thời gian phù hợp để kỹ thuật viên đến kiểm tra.
            </p>
          </li>
          <li className="flex flex-col gap-4">
            <strong>Bước 2: Kiểm Tra Và Báo Giá</strong>
            <p>
              Kỹ thuật viên của chúng tôi sẽ đến tận nơi để kiểm tra tình trạng
              tivi. Bằng cách sử dụng các thiết bị, công cụ hiện đại, kỹ thuật
              viên sẽ xác định chính xác nguyên nhân gây ra sự cố. Sau khi hoàn
              tất quá trình kiểm tra, chúng tôi sẽ đưa ra báo giá cụ thể cho các
              hạng mục sửa chữa cần thiết. Mọi chi phí sẽ được thông báo rõ ràng
              và minh bạch, giúp khách hàng có thể hoàn toàn yên tâm về giá cả
              và không lo lắng về các chi phí phát sinh không mong muốn.
            </p>
          </li>
          <li className="flex flex-col gap-4">
            <strong>Bước 3: Tiến Hành Sửa Chữa</strong>
            <p>
              Sau khi khách hàng đồng ý với báo giá, kỹ thuật viên sẽ tiến hành
              sửa chữa ngay tại chỗ hoặc mang tivi về trung tâm để sửa chữa, tùy
              thuộc vào mức độ hư hỏng. Chúng tôi cam kết sử dụng các linh kiện
              chất lượng cao và chính hãng để thay thế, đảm bảo độ bền và hiệu
              suất của tivi sau khi sửa chữa. Quá trình sửa chữa được thực hiện
              cẩn thận và tỉ mỉ, đảm bảo khắc phục triệt để các sự cố.
            </p>
          </li>
          <li className="flex flex-col gap-4">
            <strong>Bước 4: Kiểm Tra Lại Và Bàn Giao</strong>
            <p>
              Sau khi hoàn tất việc sửa chữa, kỹ thuật viên sẽ kiểm tra lại toàn
              bộ chức năng của tivi để đảm bảo thiết bị hoạt động ổn định và
              không còn bất kỳ lỗi nào. Chúng tôi sẽ thử nghiệm các tính năng
              của tivi như hình ảnh, âm thanh, kết nối mạng và các cổng giao
              tiếp để đảm bảo mọi thứ hoạt động tốt nhất. Khi tất cả đã sẵn
              sàng, chúng tôi sẽ bàn giao tivi lại cho khách hàng, hướng dẫn
              cách sử dụng và bảo quản tivi để kéo dài tuổi thọ của thiết bị.
            </p>
          </li>
          <li className="flex flex-col gap-4">
            <strong>Bước 5: Hỗ Trợ Sau Sửa Chữa</strong>
            <p>
              Khách hàng sẽ nhận được phiếu bảo hành dịch vụ sửa chữa với thời
              gian bảo hành dài hạn, từ 6 tháng đến 1 năm tùy thuộc vào loại
              hình sửa chữa và linh kiện thay thế. Trong thời gian bảo hành, nếu
              tivi gặp bất kỳ vấn đề gì liên quan đến lỗi đã sửa chữa, chúng tôi
              sẽ hỗ trợ khắc phục hoàn toàn miễn phí. Ngoài ra, khách hàng còn
              được hỗ trợ kỹ thuật khi cần thiết, đảm bảo luôn có sự hỗ trợ kịp
              thời từ phía chúng tôi.
            </p>
          </li>
        </ul>
      </div>

      <p className="text-lg text-justify">
        Trung tâm chúng tôi cam kết mang đến dịch vụ sửa chữa tivi chuyên
        nghiệp, nhanh chóng và hiệu quả. Với đội ngũ kỹ thuật viên giàu kinh
        nghiệm, trang thiết bị hiện đại và quy trình làm việc khoa học, chúng
        tôi luôn sẵn sàng đáp ứng mọi nhu cầu của khách hàng. Hãy liên hệ với
        chúng tôi qua hotline{" "}
        <span className="text-red-600 font-bold">02462.534.594</span> khi tivi
        của bạn gặp sự cố để nhận được sự hỗ trợ tốt nhất.
      </p>
    </div>
  );
}

import Break from "@/components/break";
import Image from "next/image";
import Link from "next/link";
import {
  FaAward,
  FaInfinity,
  FaRegCircleCheck,
  FaStar,
  FaPhoneVolume,
  FaMoneyCheckDollar,
  FaMoneyBill,
} from "react-icons/fa6";

import { MdSettings, MdBuild } from "react-icons/md";

type ContentInfo = {
  icon: JSX.Element;
  title: string;
  text: string;
};

type ContentSteps = {
  icon: JSX.Element;
  title: string;
};

const contentInfo: ContentInfo[] = [
  {
    icon: <FaAward size={50} color="#5c483f" />,
    title: "ĐỘI NGŨ CHUYÊN MÔN CAO",
    text: "Trung tâm của chúng tôi được trang bị đội ngũ kỹ thuật viên chuyên nghiệp, có nhiều năm kinh nghiệm trong việc sửa chữa và bảo hành các dòng bếp từ Châu Âu. Đảm bảo dịch vụ được thực hiện chính xác và nhanh chóng.",
  },
  {
    icon: <FaRegCircleCheck size={50} color="#5c483f" />,
    title: "Phụ tùng chính hãng",
    text: "Chúng tôi sử dụng phụ tùng chính hãng, đảm bảo độ bền và hiệu suất hoạt động tối ưu cho thiết bị của bạn. Điều này giúp kéo dài tuổi thọ của bếp từ và giảm thiểu rủi ro hỏng hóc.",
  },
  {
    icon: <FaStar size={50} color="#5c483f" />,
    title: "Dịch vụ tận tâm",
    text: "Trung tâm cam kết mang đến dịch vụ khách hàng tận tâm, chu đáo. Chúng tôi luôn lắng nghe và giải quyết mọi thắc mắc của khách hàng một cách nhanh chóng và hiệu quả, mang lại sự hài lòng cao nhất.",
  },
  {
    icon: <FaInfinity size={50} color="#5c483f" />,
    title: "Bảo hành dài hạn",
    text: "Chúng tôi cung cấp chế độ bảo hành dài hạn cho các dịch vụ sửa chữa và thay thế linh kiện. Khách hàng có thể yên tâm sử dụng sản phẩm mà không lo lắng về các vấn đề kỹ thuật phát sinh trong quá trình sử dụng.",
  },
];

const contentSteps: ContentSteps[] = [
  {
    icon: <FaPhoneVolume size={24} color="white" />,
    title: "Tiếp nhận thông tin từ khách hàng",
  },
  {
    icon: <MdBuild size={24} color="white" />,
    title: "Điều phối kỹ thuật viên",
  },
  {
    icon: <FaMoneyBill size={24} color="white" />,
    title: "Báo giá dịch vụ",
  },
  {
    icon: <MdSettings size={24} color="white" />,
    title: "Tiến hành sửa chữa",
  },
  {
    icon: <FaMoneyCheckDollar size={24} color="white" />,
    title: "Nghiệm thu sản phẩm và thanh toán",
  },
];

export default function Home() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <Image
          src="/images/trung-tam-sua-chua-bep-tu-chau-au.png"
          alt="trung-tam-sua-chua-bep-tu-chau-au"
          width={1200}
          height={300}
        />
      </div>

      <Break title="Vì sao bạn nên chọn chúng tôi?" />

      <div className="flex flex-col laptop:grid laptop:grid-cols-2 laptop:gap-5">
        {contentInfo.map((item, index) => (
          <div
            className="laptop:col-span-1 border rounded-xl p-5 flex flex-col items-center justify-center gap-5"
            key={index}
          >
            {item.icon}
            <p className="text-2xl font-bold text-[#5b4a3a] underline uppercase">
              {item.title}
            </p>
            <p className="text-center text-[#6a584b]">{item.text}</p>
          </div>
        ))}
      </div>

      <Break title="Quy trình dịch vụ" />

      <div className="flex flex-col gap-3 laptop:grid laptop:grid-cols-5 laptop:h-96 laptop:gap-3">
        {contentSteps.map((item, index) => (
          <fieldset
            className="border-4 border-solid border-[#a2754a] p-10 col-span-1 h-96"
            key={index}
          >
            <legend className="text-sm text-center">
              <div className="p-6 border rounded-full bg-[#5f4841]">
                {item.icon}
              </div>
            </legend>
            <div className="text-center flex flex-col gap-10 h-full text-[#a2754a]">
              <p className="text-8xl font-extrabold">{index + 1}</p>
              <p className="font-bold text-xl uppercase">{item.title}</p>
            </div>
          </fieldset>
        ))}
      </div>

      <Break title="Dịch vụ sửa chữa" />

      {/* <div className="grid grid-cols-3 gap-5 ">
        <Link
          href="/sua-bep-dien"
          className="flex flex-col items-center justify-center gap-4"
        >
          <Image
            src="/images/sua-bep-tu.jpg"
            width={400}
            height={200}
            alt=""
          />
          <p className="text-2xl font-semibold">Sửa Chữa Bếp Từ</p>
        </Link>

        <Link
          href="/sua-tv"
          className="flex flex-col items-center justify-center gap-4"
        >
          <Image
            src="/images/sua-tv.webp"
            width={400}
            height={200}
            alt=""
          />
          <p className="text-2xl font-semibold">Sửa Tivi</p>
        </Link>

        <Link
          href="/sua-loa"
          className="flex flex-col items-center justify-center gap-4"
        >
          <Image
            src="/images/sua-loa.jpg"
            width={400}
            height={200}
            alt=""
          />
          <p className="text-2xl font-semibold">Sửa Chữa Thiết Bị Âm Thanh</p>
        </Link>
      </div> */}

      <Break title="Have a good day" />
    </section>
  );
}

import Break from "@/components/break";
import { SERIVICES_SUPPORT, STEPS, WHY } from "@/utils/homepage";
import Image from "next/image";
import Link from "next/link";

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
        {WHY.map((item, index) => (
          <div
            className="laptop:col-span-1 border rounded-xl p-5 flex flex-col items-center justify-center gap-5"
            key={index}
          >
            <item.icon size={50} color="#5c483f" />

            <p className="text-2xl font-bold text-[#5b4a3a] underline uppercase">
              {item.title}
            </p>
            <p className="text-center text-[#6a584b]">{item.text}</p>
          </div>
        ))}
      </div>

      <Break title="Quy trình dịch vụ" />

      <div className="flex flex-col gap-3 laptop:grid laptop:grid-cols-5 laptop:h-96 laptop:gap-3">
        {STEPS.map((item, index) => (
          <fieldset
            className="border-4 border-solid border-[#a2754a] p-10 col-span-1 h-96"
            key={index}
          >
            <legend className="text-sm text-center">
              <div className="p-6 border rounded-full bg-[#5f4841]">
                <item.icon size={24} color="white" />
              </div>
            </legend>
            <div className="text-center flex flex-col gap-10 h-full text-[#a2754a]">
              <p className="text-8xl font-extrabold">{index + 1}</p>
              <p className="font-bold text-xl uppercase">{item.title}</p>
            </div>
          </fieldset>
        ))}
      </div>

      <Break title="Dịch vụ sửa chữa & Bảo dưỡng" />

      <div className="grid grid-cols-3 gap-5 ">
        {SERIVICES_SUPPORT.map((item, index) => (
          <Link
            href={item.href}
            className="flex flex-col items-center justify-center gap-4"
            key={index}
          >
            <Image src={item.imgLink} width={400} height={200} alt={item.alt} />
            <p className="text-2xl font-semibold">{item.title}</p>
          </Link>
        ))}
      </div>

      <Break title="Đánh giá của khách hàng" />
    </section>
  );
}

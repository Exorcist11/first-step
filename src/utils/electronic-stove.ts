import { FaFire, FaCheck, FaCrown, FaMoneyBillWave } from "react-icons/fa6";
type imgProvider = {
  link_img: string;
  title: string;
};

export const VENDER_STOVE: imgProvider[] = [
  { link_img: "bep-tu-bluestone.png", title: "bep-tu-bluestone" },
  { link_img: "bep-tu-bosch.png", title: "bep-tu-bosch" },
  { link_img: "bep-tu-chefs.png", title: "bep-tu-chefs" },
  { link_img: "bep-tu-electrolux.png", title: "bep-tu-electrolux" },
  { link_img: "bep-tu-elmich.png", title: "bep-tu-elmich" },
  { link_img: "bep-tu-sunhouse.png", title: "be-tu-sunhouse" },
  { link_img: "bep-tu-teka.png", title: "be-tu-teka" },
  { link_img: "logo-bep-tu-midea.jpg", title: "logo-bep-tu-midea" },
];

export const BLOG_STOVE = [
  {
    href: "/nguyen-nhan-va-cach-xu-ly-loi-bep-tu-khong-len-nguon",
    imgLink:
      "/images/loi-bep-tu/nguyen-nhan-va-cach-xu-ly-loi-bep-tu-khong-len-nguon.jpg",
    alt: "nguyen-nhan-va-cach-xu-ly-loi-bep-tu-khong-len-nguon",
    title: "Khắc phục lỗi không nhận điện bếp",
  },
  {
    href: "/loi-bep-tu-chay-binh-thuong-khong-nong",
    imgLink: "/images/loi-bep-tu/loi-bep-tu-chay-binh-thuong-khong-nong.jpg",
    alt: "loi-bep-tu/loi-bep-tu-chay-binh-thuong-khong-nong",
    title: "Bếp từ nhận điện nhưng không nóng",
  },
  {
    href: "/bep-tu-loi-e0-e1-e2-e3-e4",
    imgLink: "/images/loi-bep-tu/bep-tu-loi-e0-e1-e2-e3-e4.png",
    alt: "bep-tu-loi-e0-e1-e2-e3-e4",
    title: "Các lỗi E trên bếp từ và cách khắc phục",
  },
];

export const PROCESS = [
  {
    title: "Liên Hệ và Tư Vấn",
    description:
      "Quý khách có thể liên hệ với chúng tôi qua điện thoại hoặc website để được tư vấn và đặt lịch sửa chữa.",
  },
  {
    title: "Khảo Sát và Báo Giá",
    description:
      "Kỹ thuật viên sẽ đến tận nơi để kiểm tra và đưa ra báo giá cụ thể trước khi tiến hành sửa chữa.",
  },
  {
    title: "Sửa Chữa và Bảo Dưỡng:",
    description:
      "Sau khi khách hàng đồng ý, chúng tôi sẽ tiến hành sửa chữa và bảo dưỡng bếp từ.",
  },
  {
    title: "Bàn Giao và Thanh Toán:",
    description:
      "Bếp từ sẽ được bàn giao lại cho khách hàng sau khi hoàn tất, kèm theo hướng dẫn sử dụng và bảo dưỡng. Thanh toán sẽ được thực hiện sau khi khách hàng hài lòng với dịch vụ.",
  },
];

export const QUALITY_COMMIT = [
  {
    icon: FaCheck,
    title: "Uy Tín và Chuyên Nghiệp",
    describe:
      "Chúng tôi ưu tiên chất lượng, uy tín, và nâng cao dịch vụ để đáp ứng nhu cầu khách hàng.",
  },
  {
    icon: FaMoneyBillWave,
    title: "Giá Cả Hợp Lý",
    describe:
      "Chúng tôi cam kết cung cấp dịch vụ với mức giá cạnh tranh và minh bạch.",
  },
  {
    icon: FaCrown,
    title: "Hỗ Trợ Khách Hàng",
    describe:
      "Đội ngũ chăm sóc khách hàng luôn sẵn sàng hỗ trợ và giải đáp mọi thắc mắc của quý khách.",
  },
];

export const SERVICE_STOVE = [
  "Bếp từ không lên nguồn, bị mất nguồn hay lên nguồn rồi tắt",
  "Bếp từ không nhận nồi, bếp từ không nóng",
  "Bếp từ bị nhảy aptomat, bị nổ cầu chì, chết IGBT",
  "Bếp từ bị rò điện, vào điện nhưng không bật được",
  "Bếp từ kêu tạch tạch không nóng",
  "Bếp điện từ bị loạn cảm ứng",
  "Bếp từ đôi bị hỏng 1 bên",
  "Bếp từ cảm ứng không nhạy, hỏng cảm ứng",
  "Bếp từ bị nóng mặt kính, cháy mặt kính, vỡ mặt kính",
  "Bếp từ bị khóa",
  "Bếp từ báo các lỗi E0, E1, E2, E3, E4, E5, E6, E7, E8, E9 trên bảng điều khiển",
];

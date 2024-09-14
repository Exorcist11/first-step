import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { FaPhoneAlt } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import Link from "next/link";
import { Toaster } from "@/components/ui/toaster";
import { SpeedInsights } from "@vercel/speed-insights/next";

const roboto = Roboto({
  subsets: ["vietnamese"],
  weight: ["100", "300", "400"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Trung Tâm Bảo Hành Và Sửa Chữa Bếp Từ Châu Âu",
    default: "Trung Tâm Bảo Hành Và Sửa Chữa Bếp Từ Châu Âu",
  },
  description: "Trung Tâm Bảo Hành Và Sửa Chữa Bếp Từ Châu Âu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${roboto.className} min-h-screen`}
      >
        <header className="sticky top-0 z-50 bg-[#ececec] mb-4">
          <Header />
        </header>
        <main className="px-5 laptop:px-40">{children}</main>

        <footer className="sticky top-full">
          <Footer />
        </footer>

        <div className="fixed bottom-14 flex flex-col gap-5 left-10 z-50 ">
          <Link href="/">
            <p className="bg-blue-600 p-3 rounded-full w-fit text-white animate-bounce cursor-pointer">
              <SiZalo size={30} />
            </p>
          </Link>
          <div >
            <div className=" bg-[#ec4646] bg-opacity-50 rounded-full text-white animate-bounce cursor-pointer pr-5">
              <div className="flex gap-4 items-center">
                <div className="bg-[#e60808] rounded-full p-3 font-semibold">
                  <FaPhoneAlt size={25} />
                </div>
                <p>
                  <Link href="tel:097.328.5665">097.328.5665</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Toaster />
        <SpeedInsights />
      </body>
    </html>
  );
}

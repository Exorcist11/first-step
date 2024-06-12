import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

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
      <body suppressHydrationWarning={true} className={`${roboto.className} min-h-screen`}>
        <header className="sticky top-0 z-50 bg-[#ececec] mb-4">
          <Header />
        </header>
        <main className="px-5 laptop:px-40">{children}</main>

        <footer className="sticky top-full">
          <Footer />
        </footer>
      </body>
    </html>
  );
}

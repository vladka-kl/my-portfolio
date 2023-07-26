import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vladyslava Klovak | Full-Stack Developer",
  description: "Vladyslava is a Full-Stack Developer based in Berlin/Kyiv",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}   bg-gray-100  text-gray-950 relative  h-[3000px]`}
      >
        <div className="bg-[#fef9c3]  absolute top-[-6rem] -z-10 right[-8rem] h-[25rem] w-[10rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <Header />
        {children}
      </body>
    </html>
  );
}

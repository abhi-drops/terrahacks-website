import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";
import Top from "@/components/top";

const openSans = Open_Sans({
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  title: {
    default: "TerraHacks - Summer 2024",
    template: "%s | TerraHacks",
  },
  description:
    "A student-run Hackathon for students to learn and apply their knowledge - Coming Summer 2024 in Downtown Toronto, on the Toronto Metropolitan University (TMU) campus!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Navbar />
        {children}
        <Footer />
        <Top />
      </body>
    </html>
  );
}

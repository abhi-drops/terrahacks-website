import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";
import Top from "@/components/top";

const openSans = Open_Sans({
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://terrahacks.ca"),
  title: {
    default: "TerraHacks",
    template: "%s | TerraHacks",
  },
  description:
    "A student-run Hackathon for students to learn and apply their knowledge - Coming Summer 2024 at TMU!",
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

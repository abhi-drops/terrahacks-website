import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/_components/navbar";
import Footer from "@/app/_components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TerraHacks 2024",
  description: "A student-run Hackathon for students to learn and apply their knowledge - Coming Summer 2024 at TMU!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

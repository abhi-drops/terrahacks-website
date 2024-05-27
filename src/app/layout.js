import { Laila } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";

const laila = Laila({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'] 
});


export const metadata = {
  title: "TerraHacks",
  description: "A student-run Hackathon for students to learn and apply their knowledge - Coming Summer 2024 at TMU!",
};

export default function RootLayout({ children }) {  
  return (
    <html lang="en">
      <body className={laila.className}>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}

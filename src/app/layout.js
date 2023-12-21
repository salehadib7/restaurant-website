import "./globals.css";
import { Urbanist } from "next/font/google";
import { Oswald } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Navbar from "@/components/navbar/Navbar";
config.autoAddCss = false;

const urbanist = Urbanist({ subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata = {
  title: "Restaurant Website",
  description: "The Best Cuisines From All Over The World",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${urbanist.className}, ${oswald.variable}`}>
        {children}
      </body>
    </html>
  );
}

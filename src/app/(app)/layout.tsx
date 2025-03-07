import { IBM_Plex_Sans } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/ui/Navbar";
import { LayoutProps } from "@/interfaces/layoutProps";
import Footer from "@/components/ui/Footer";

const ibm = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm",
  display: "swap",
  weight: ["100", "300", "400", "500", "700"],
});

const AppLayout = ({ children }: LayoutProps) => (
  <html className={`${ibm.variable}`} data-theme="w3stackTheme">
    <head>
      <title>
        Hire Expert Developers At Best Hourly/Fixed Rate | W3 StackStudio
      </title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
    </head>
    <body>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </body>
  </html>
);

export default AppLayout;

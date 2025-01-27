import "@/styles/globals.css";
import Navbar from "@/components/ui/Navbar";
import { LayoutProps } from "@/interfaces/layoutProps";
import Footer from "@/components/ui/Footer";

const AppLayout = ({ children }: LayoutProps) => (
  <html>
    <head>
      <title>
        Hire Expert Developers At Best Hourly/Fixed Rate | W3 StackStudio
      </title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Sriracha&display=swap"
        rel="stylesheet"
      />
    </head>
    <body>
      <Navbar />
      <main className="pt-[100px]">{children}</main>
      <Footer />
    </body>
  </html>
);

export default AppLayout;

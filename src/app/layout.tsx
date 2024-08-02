import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { Poppins } from "next/font/google";
import '../styles/global.css'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <html className={poppins.className}>
      <head>
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css" />
      </head>
      <body className="pt-14">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;

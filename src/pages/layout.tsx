// src/pages/layout.tsx
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className={poppins.className}>
      <Navbar />
      <main className="pt-14">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;

import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Providers } from "./providers"; // client wrapper
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "My Store",
  description: "Next.js App with NextAuth",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          {/* ✅ Global Toaster for notifications */}
          <Toaster position="top-right" reverseOrder={false} />
        </Providers>
      </body>
    </html>
  );
}

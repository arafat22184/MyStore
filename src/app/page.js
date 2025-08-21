import LandingPage from "@/components/LandingPage";
import NavBar from "@/components/Navbar";
import { Link } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-white min-h-full">
      <NavBar></NavBar>
      <div className="bg-white">
        <LandingPage></LandingPage>
      </div>
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 px-6 text-center">
        <p className="mb-2">
          © {new Date().getFullYear()} MyStore. All rights reserved.
        </p>
        <div className="flex justify-center gap-6">
          <Link href="/products" className="hover:text-white">
            Products
          </Link>
          <Link href="/login" className="hover:text-white">
            Login
          </Link>
          <Link href="/" className="hover:text-white">
            Home
          </Link>
        </div>
      </footer>
    </div>
  );
}

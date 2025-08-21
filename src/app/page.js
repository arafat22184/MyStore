import LandingPage from "@/components/LandingPage";
import NavBar from "@/components/Navbar";
import { Link } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-white min-h-full">
      <div className="bg-white">
        <LandingPage></LandingPage>
      </div>
    </div>
  );
}

import {
  Mail,
  Phone,
  MapPin,
  ShoppingBasket,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <ShoppingBasket className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">My Store</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Your trusted destination for premium tech products. We offer the
              latest in electronics, fitness trackers, photography equipment,
              and office furniture.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="mailto:support@techstore.com"
                className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>support@techstore.com</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-pink-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="hover:text-white transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start space-x-2">
                <Phone className="h-4 w-4 mt-0.5" />
                <span className="text-sm">+880 17471-44726</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span className="text-sm">
                  Mirpur-2, Dhaka-1216
                  <br />
                  Bangladesh
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 MyStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

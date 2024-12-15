import Link from "next/link";
import { Github, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-blue-900 to-[#0a192f] text-white/90">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">
              About Meta Museum Art 🌍
            </h3>
            <p className="text-blue-100/80 text-sm leading-relaxed">
              Empowering cultural heritage with linked open data. Meta Museum
              Art pioneers data solutions, creating pathways that unite
              institutions and promote public Education and Knowledge.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/projects"
                  className="text-blue-100/80 hover:text-white transition-colors duration-200"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/datasets"
                  className="text-blue-100/80 hover:text-white transition-colors duration-200"
                >
                  Datasets
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-blue-100/80 hover:text-white transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-blue-100/80 hover:text-white transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Important Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">
              Important Info
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-blue-100/80 hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-blue-100/80 hover:text-white transition-colors duration-200"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Connect</h3>
            <div className="flex space-x-5">
              <a
                href="https://github.com/sundog358"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-100/80 hover:text-white transition-colors duration-200"
              >
                <Github className="h-6 w-6" />
              </a>

              <a
                href="mailto:admin@sunandrainworks.com"
                className="text-blue-100/80 hover:text-white transition-colors duration-200"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm text-blue-100/60">
          <p>&copy; {currentYear} Meta Museum Art. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

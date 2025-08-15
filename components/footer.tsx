import Link from "next/link";
import { Instagram, Linkedin, Youtube, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Startup",
      links: [
        "Best Industries",
        "Funding",
        "Incubators",
        "Business Plans",
        "Naming",
        "Home-based Business",
        "The UPS Store",
      ],
    },
    {
      title: "Grow",
      links: [
        "Strategy",
        "Operations",
        "Sales",
        "Marketing",
        "Customer Service",
        "Franchises",
      ],
    },
    {
      title: "Lead",
      links: [
        "Black in Business",
        "Your Next Move",
        "Female Founders",
        "Best Workplaces",
        "Public Speaking",
        "Productivity",
        "All the Hats",
      ],
    },
    {
      title: "Technology",
      links: [
        "Digital Transformation",
        "Artificial Intelligence",
        "Bringing Innovation to Market",
        "Cloud Computing",
        "Social Media",
        "Security",
        "Data Detectives",
      ],
    },
    {
      title: "Innovate",
      links: ["Creativity", "Invent", "Design", "Pivot"],
    },
    {
      title: "Money",
      links: [
        "Exit Interview",
        "Bootstrapping",
        "Crowdfunding",
        "Venture Capital",
        "Business Models",
        "Personal Finance",
        "Founder-Friendly Investors",
      ],
    },
    {
      title: "Events",
      links: ["Upcoming Events", "Inc. 5000 Conference & Gala"],
    },
    {
      title: "Workplace",
      links: ["Company Culture", "Hiring", "HR/Benefits"],
    },
    {
      title: "Inc.5000",
      links: ["Inc. 5000", "Regionals", "Apply Inc. 5000 US"],
    },
  ];

  return (
    <footer className="bg-white">
      {/* See More Stories Button */}
      <div className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 flex justify-center">
          <Link
            href="/stories"
            className="bg-black text-white px-8 py-3 text-sm font-medium hover:bg-gray-800 transition-colors uppercase tracking-wider"
          >
            SEE MORE STORIES
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-10 gap-8">
          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-black mb-4 text-sm">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      href={`/category/${link
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .replace(/[^\w-]/g, "")}`}
                      className="text-gray-600 hover:text-black transition-colors text-sm"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Inc. Premium Section */}
          <div className="xl:col-span-1">
            <h3 className="font-bold text-black mb-4 text-sm">Inc. Premium</h3>
            <Link
              href="/premium"
              className="inline-block bg-black text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Subscribe
            </Link>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex justify-center space-x-6">
            <Link
              href="https://instagram.com"
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="https://linkedin.com"
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="https://youtube.com"
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </Link>
            <Link
              href="https://tiktok.com"
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="TikTok"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <span className="text-xs font-bold">TT</span>
              </div>
            </Link>
            <Link
              href="https://twitter.com"
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </Link>
            <Link
              href="https://facebook.com"
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </Link>
            <Link
              href="https://x.com"
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="X (formerly Twitter)"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <span className="text-sm font-bold">𝕏</span>
              </div>
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-500">
              Fast Company & Inc © 2025 Mansueto Ventures, LLC
              <span className="ml-2">⊳</span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer Links */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-gray-500">
            <Link
              href="/terms"
              className="hover:text-gray-700 transition-colors uppercase tracking-wide"
            >
              TERMS OF USE
            </Link>
            <Link
              href="/advertise"
              className="hover:text-gray-700 transition-colors uppercase tracking-wide"
            >
              ADVERTISE
            </Link>
            <Link
              href="/help"
              className="hover:text-gray-700 transition-colors uppercase tracking-wide"
            >
              HELP CENTER
            </Link>
            <Link
              href="/sitemap"
              className="hover:text-gray-700 transition-colors uppercase tracking-wide"
            >
              SITEMAP
            </Link>
            <Link
              href="/privacy"
              className="hover:text-gray-700 transition-colors uppercase tracking-wide"
            >
              PRIVACY POLICY
            </Link>
            <Link
              href="/notice"
              className="hover:text-gray-700 transition-colors uppercase tracking-wide"
            >
              NOTICE OF COLLECTION
            </Link>
            <Link
              href="/do-not-sell"
              className="hover:text-gray-700 transition-colors uppercase tracking-wide"
            >
              DO NOT SELL MY DATA
            </Link>
            <Link
              href="/ad-vendor"
              className="hover:text-gray-700 transition-colors uppercase tracking-wide"
            >
              AD VENDOR POLICY
            </Link>
            <Link
              href="/about"
              className="hover:text-gray-700 transition-colors uppercase tracking-wide"
            >
              ABOUT US
            </Link>
            <Link
              href="/subscribe"
              className="hover:text-gray-700 transition-colors uppercase tracking-wide"
            >
              SUBSCRIBE
            </Link>
          </div>

          {/* NewsGuard Section */}
          <div className="flex justify-center items-center mt-6 pt-4 border-t border-gray-200">
            <div className="flex items-center space-x-3 text-xs text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-4 bg-green-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="font-medium">NewsGuard</span>
                <span className="bg-gray-200 px-2 py-1 rounded text-xs font-medium">
                  100/100
                </span>
              </div>
              <span>
                Inc.com adheres to NewsGuard's nine standards of credibility and
                transparency.
              </span>
              <Link
                href="/learn-more"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Link from "next/link";

const Footer = () => {
  const footerSections = [
    {
      title: "Magazine",
      links: [
        { label: "Current Issue", href: "/magazine/current" },
        { label: "Back Issues", href: "/magazine/archives" },
        { label: "Subscribe", href: "/subscribe" },
        { label: "Customer Service", href: "/support" },
      ],
    },
    {
      title: "Inc. 5000",
      links: [
        { label: "2024 List", href: "/inc5000/2024" },
        { label: "Apply", href: "/inc5000/apply" },
        { label: "Conference", href: "/inc5000/conference" },
        { label: "Methodology", href: "/inc5000/methodology" },
      ],
    },
    {
      title: "Events",
      links: [
        { label: "Inc. 5000 Conference", href: "/events/inc5000" },
        { label: "Women's Summit", href: "/events/womens-summit" },
        { label: "GrowCo", href: "/events/growco" },
        { label: "All Events", href: "/events" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
        { label: "Advertise", href: "/advertise" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <div className="text-3xl font-bold text-red-600">Inc.</div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              The essential news and insights for entrepreneurs building the companies of tomorrow.
            </p>
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <span className="text-xs font-bold">f</span>
              </div>
              <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
                <span className="text-xs font-bold">t</span>
              </div>
              <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors cursor-pointer">
                <span className="text-xs font-bold">in</span>
              </div>
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer">
                <span className="text-xs font-bold">yt</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="max-w-md">
            <h3 className="font-bold text-white mb-2">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest business insights delivered to your inbox.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-white"
              />
              <button className="px-6 py-2 bg-red-600 text-white rounded-r-md hover:bg-red-700 transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-400">
              <span>© 2025 Inc. Magazine. All rights reserved.</span>
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
            <div className="text-sm text-gray-400">
              <span>Powered by innovation and entrepreneurship</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

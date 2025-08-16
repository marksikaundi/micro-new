"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, User, X } from "lucide-react";
import { useState } from "react";
import { useUser, UserButton, SignInButton } from "@clerk/nextjs";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isSignedIn } = useUser();

  const menuCategories = [
    {
      title: "Startup",
      items: [
        "BEST INDUSTRIES",
        "FUNDING",
        "INCUBATORS",
        "BUSINESS PLANS",
        "NAMING",
        "HOME-BASED BUSINESS",
        "THE UPS STORE",
      ],
    },
    {
      title: "Grow",
      items: [
        "STRATEGY",
        "OPERATIONS",
        "SALES",
        "MARKETING",
        "CUSTOMER SERVICE",
        "FRANCHISES",
      ],
    },
    {
      title: "Lead",
      items: [
        "BLACK IN BUSINESS",
        "YOUR NEXT MOVE",
        "FEMALE FOUNDERS",
        "BEST WORKPLACES",
        "COMPANY CULTURE",
        "PUBLIC SPEAKING",
        "HIRING",
        "HR/BENEFITS",
        "PRODUCTIVITY",
        "ALL THE HATS",
      ],
    },
    {
      title: "Technology",
      items: [
        "DIGITAL TRANSFORMATION",
        "ARTIFICIAL INTELLIGENCE",
        "BRINGING INNOVATION TO MARKET",
        "CLOUD COMPUTING",
        "SOCIAL MEDIA",
        "SECURITY",
        "DATA DETECTIVES",
      ],
    },
    {
      title: "Innovate",
      items: ["CREATIVITY", "INVENT", "DESIGN", "PIVOT"],
    },
    {
      title: "Money",
      items: [
        "EXIT INTERVIEW",
        "BOOTSTRAPPING",
        "CROWDFUNDING",
        "VENTURE CAPITAL",
        "BORROWING",
        "BUSINESS MODELS",
        "PERSONAL FINANCE",
        "FOUNDER-FRIENDLY INVESTORS",
      ],
    },
    {
      title: "Built to Scale",
      items: [],
    },
    {
      title: "Events",
      items: ["UPCOMING EVENTS", "INC. 5000 VISION CONFERENCE"],
    },
    {
      title: "BrandView",
      items: [
        "CAPITAL ONE BUSINESS",
        "INSPERITY",
        "PRINCIPAL",
        "SALESFORCE",
        "SAP",
        "THE UPS STORE",
      ],
    },
  ];

  const navigationItems = [
    { label: "INC. PREMIUM", href: "/premium" },
    { label: "GROW", href: "/category/growth" },
    { label: "LEAD", href: "/category/leadership" },
    { label: "TECHNOLOGY", href: "/category/technology" },
    { label: "INNOVATE", href: "/category/innovation" },
    { label: "STARTUP", href: "/category/startup" },
    { label: "MONEY", href: "/category/money" },
    { label: "EVENTS", href: "/events" },
    { label: "BRANDVIEW", href: "/brandview" },
    { label: "INC. 5000", href: "/inc5000" },
    { label: "VIDEOS", href: "/videos" },
    { label: "PODCASTS", href: "/podcasts" },
  ];

  return (
    <>
      {/* Main Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          {/* Top row with menu, logo, user actions */}
          <div className="flex items-center justify-between h-16">
            {/* Left - Menu Button */}
            <button
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </button>

            {/* Center - Logo */}
            <Link
              href="/"
              className="absolute left-1/2 transform -translate-x-1/2"
            >
              <div className="text-4xl font-bold text-black tracking-tight">
                DevC.
              </div>
            </Link>

            {/* Right side actions */}
            <div className="flex items-center space-x-2">
              {isSignedIn ? (
                <div className="hidden md:flex items-center space-x-3">
                  <Link
                    href="/dashboard"
                    className="text-sm text-gray-700 hover:text-black transition-colors font-medium"
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/admin"
                    className="text-sm text-gray-700 hover:text-black transition-colors font-medium"
                  >
                    Write
                  </Link>
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: "w-8 h-8",
                        userButtonPopoverCard:
                          "border border-gray-200 shadow-lg",
                      },
                    }}
                    userProfileMode="navigation"
                    userProfileUrl="/profile"
                  />
                </div>
              ) : (
                <Link href="/">
                  <button className="hidden md:block bg-blue-600 text-white px-6 py-2 text-sm font-medium uppercase tracking-wide hover:bg-blue-700 transition-colors">
                    SUBSCRIBE
                  </button>
                </Link>
              )}
              <SignInButton mode="modal">
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <User className="w-5 h-5 text-gray-600" />
                </button>
              </SignInButton>
            </div>
          </div>

          {/* Navigation - Hidden on mobile, shown on desktop */}
          <nav className="hidden lg:block border-t border-gray-100">
            <div className="flex items-center justify-center space-x-8 py-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-xs text-gray-700 hover:text-black font-medium transition-colors tracking-wider"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Latest Topics Section - Hidden on mobile */}
          <div className="hidden lg:block border-t border-gray-100">
            <div className="flex items-center justify-center space-x-6 py-3">
              <span className="text-sm font-medium text-red-600">
                Latest Topics
              </span>
              <div className="flex items-center space-x-4">
                <span className="px-3 py-1 bg-gray-100 text-xs font-medium text-gray-700 rounded">
                  INC. 5000
                </span>
                <span className="px-3 py-1 bg-gray-100 text-xs font-medium text-gray-700 rounded">
                  VIBE CODING
                </span>
                <span className="px-3 py-1 bg-gray-100 text-xs font-medium text-gray-700 rounded">
                  BUILT TO SCALE
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Page Overlay Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="h-full flex flex-col">
            {/* Header with search and close */}
            <div className="border-b border-gray-200 p-4">
              <div className="flex items-center justify-between mb-6">
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  <div className="text-4xl font-bold text-black tracking-tight">
                    Inc.
                  </div>
                </Link>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-700" />
                </button>
              </div>

              {/* Search Bar */}
              <div className="relative max-w-2xl">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full text-lg border-b border-gray-300 pb-2 focus:outline-none focus:border-gray-600 bg-transparent"
                />
                <span className="absolute right-0 bottom-2 text-sm text-gray-400">
                  search by queryly
                </span>
              </div>
            </div>

            {/* Menu Categories Grid */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-7xl mx-auto">
                {menuCategories.map((category) => (
                  <div key={category.title} className="space-y-4">
                    <h3 className="text-xl font-bold text-black mb-4">
                      {category.title}
                    </h3>
                    <div className="space-y-3">
                      {category.items.map((item) => (
                        <Link
                          key={item}
                          href={`/category/${item
                            .toLowerCase()
                            .replace(/\s+/g, "-")
                            .replace(/[^\w-]/g, "")}`}
                          className="block text-sm text-gray-600 hover:text-black transition-colors tracking-wide"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Inc. Premium Section */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-blue-600 mb-4">
                    Inc. Premium
                  </h3>
                  <div className="bg-gray-50 p-4 rounded">
                    <Image
                      src="/api/placeholder/200/150"
                      alt="Inc. Premium"
                      width={200}
                      height={150}
                      className="w-full h-32 object-cover rounded mb-3"
                    />
                    <Link
                      href="/premium"
                      className="inline-block bg-blue-600 text-white px-4 py-2 text-sm font-medium uppercase tracking-wide hover:bg-blue-700 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      SUBSCRIBE
                    </Link>
                  </div>
                </div>
              </div>

              {/* User Actions for Mobile */}
              {isSignedIn && (
                <div className="mt-8 pt-8 border-t border-gray-200 max-w-7xl mx-auto">
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/dashboard"
                      className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors rounded"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <Link
                      href="/admin"
                      className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors rounded"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Write Article
                    </Link>
                    <Link
                      href="/profile"
                      className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors rounded"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Profile
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

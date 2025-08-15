"use client";

import Link from "next/link";
import { Search, Menu, User, LogOut } from "lucide-react";
import { useState } from "react";
import { useUser, UserButton, SignInButton } from "@clerk/nextjs";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isSignedIn, user } = useUser();

  const navigationItems = [
    { label: "Leadership", href: "/category/leadership" },
    { label: "Innovation", href: "/category/innovation" },
    { label: "Technology", href: "/category/technology" },
    { label: "Growth", href: "/category/growth" },
    { label: "Money", href: "/category/money" },
    { label: "Productivity", href: "/category/productivity" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-black text-white text-sm py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span>Subscribe</span>
            <span>•</span>
            {isSignedIn ? (
              <span>Welcome, {user?.firstName || "User"}!</span>
            ) : (
              <SignInButton mode="modal">
                <button className="hover:text-gray-300 transition-colors">
                  Sign In
                </button>
              </SignInButton>
            )}
          </div>
          <div className="flex items-center space-x-4">
            <span>Follow Inc.</span>
            <div className="flex space-x-2">
              <div className="w-4 h-4 bg-blue-600 rounded"></div>
              <div className="w-4 h-4 bg-blue-400 rounded"></div>
              <div className="w-4 h-4 bg-red-600 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          {/* Logo and Search Row */}
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center">
              <div className="text-3xl font-bold text-red-600">Inc.</div>
            </Link>

            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search Inc."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="md:hidden">
                <Search className="w-5 h-5" />
              </button>

              {isSignedIn ? (
                <div className="hidden md:flex items-center space-x-4">
                  <Link
                    href="/dashboard"
                    className="text-gray-700 hover:text-red-600 transition-colors font-medium"
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/admin"
                    className="text-gray-700 hover:text-red-600 transition-colors font-medium"
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
                <SignInButton mode="modal">
                  <button className="hidden md:flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors">
                    <User className="w-4 h-4" />
                    <span>Subscribe</span>
                  </button>
                </SignInButton>
              )}

              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:block border-t border-gray-100">
            <div className="flex items-center space-x-8 py-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-red-600 font-medium transition-colors text-sm uppercase tracking-wide"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="container mx-auto px-4 py-4">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Search Inc."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <div className="space-y-3">
                {navigationItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block text-gray-700 hover:text-red-600 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                {isSignedIn ? (
                  <div className="space-y-3">
                    <Link
                      href="/dashboard"
                      className="block text-center py-2 text-gray-700 hover:text-red-600 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <Link
                      href="/admin"
                      className="block text-center py-2 text-gray-700 hover:text-red-600 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Write Article
                    </Link>
                    <Link
                      href="/profile"
                      className="block text-center py-2 text-gray-700 hover:text-red-600 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Profile
                    </Link>
                  </div>
                ) : (
                  <SignInButton mode="modal">
                    <button className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors">
                      Subscribe
                    </button>
                  </SignInButton>
                )}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;

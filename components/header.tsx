"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ChevronRight,
  Heart,
  Home,
  Info,
  Menu,
  MessageCircle,
  Plus,
  Search,
  ShoppingBag,
  User,
  X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { DropdownMenuHeader } from "./ui/dropdown-menu-header";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
        <div className="border-[0.5px] border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex h-[52px] items-center justify-between">
              <div className="flex items-center md:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex-1 flex justify-center md:justify-start">
                <Link href="/" className="flex items-center space-x-2">
                  <img
                    src="Orizana.svg"
                    alt=""
                    className="w-[91.04px] h-[44px]"
                  />
                </Link>
              </div>

              <div className="hidden md:flex flex-1 max-w-2xl mx-8">
                <div className="relative w-full">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Rechercher des articles..."
                    className="pl-12 pr-4 rounded-[6px] bg-[#EDF2F2] h-[36px] focus:bg-white font-[16px] border-b border-gray-200"
                  />
                </div>
              </div>

              <div className="hidden md:flex items-center space-x-4">
                <Button
                  className="bg-transparent border-1 text-[#4E342E] border-solid border-[#4E342E] hover:bg-[#4E342E] hover:text-white rounded-[6px] h-[32px] text-[12px]"
                  asChild
                >
                  <Link
                    href="/seller/dashboard"
                    className="flex items-center space-x-1"
                  >
                    <span className="font-inter">
                      S'inscrire | Se connecter
                    </span>
                  </Link>
                </Button>
                <Button
                  className="bg-[#4E342E] border-1 text-white border-solid border-[#4E342E] hover:bg-[#4E342E] hover:text-white rounded-[6px] h-[32px] text-[12px]"
                  asChild
                >
                  <Link
                    href="/seller/dashboard"
                    className="flex items-center space-x-1"
                  >
                    <span>Vends tes articles</span>
                  </Link>
                </Button>
                <DropdownMenuHeader />
              </div>

              {/* Mobile: User Icon */}
              <div className="flex items-center md:hidden">
                <Button variant="ghost" size="sm" className="p-2">
                  <User className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Mobile Search Bar */}
            <div className="md:hidden pb-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Rechercher..."
                  className="pl-10 pr-4 rounded-lg bg-gray-50"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block border-1 border-gray-200">
          <div className="container mx-auto px-4">
            <nav className="flex items-center justify-center gap-100 h-12">
              <div className="flex items-center space-x-8 overflow-x-auto">
                <Link
                  href="/categories/all"
                  className="text-[14px] font-medium text-gray-600 hover:text-gray-900 whitespace-nowrap"
                >
                  Toutes les catégories
                </Link>
                <Link
                  href="/categories/femme"
                  className="text-[14px] font-medium text-gray-600 hover:text-gray-900 whitespace-nowrap"
                >
                  Femme
                </Link>
                <Link
                  href="/categories/homme"
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 whitespace-nowrap"
                >
                  Homme
                </Link>
                <Link
                  href="/categories/maison"
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 whitespace-nowrap"
                >
                  Maison
                </Link>
                <Link
                  href="/categories/beaute"
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 whitespace-nowrap"
                >
                  Beauté & Bien-être
                </Link>
                <Link
                  href="/categories/createurs"
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 whitespace-nowrap"
                >
                  Créateurs
                </Link>
              </div>

              <div className="flex items-center space-x-6">
                <Link
                  href="/how-it-works"
                  className="text-sm text-gray-600 hover:text-gray-900 whitespace-nowrap"
                >
                  Comment ça marche
                </Link>
                <Link
                  href="/blog"
                  className="text-sm text-gray-600 hover:text-gray-900 whitespace-nowrap"
                >
                  Blog
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[60] md:hidden"
          onClick={closeMenu}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white z-[70] transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } shadow-2xl`}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <img src="Orizana.svg" alt="" className="w-[80px] h-[38px]" />
            <Button
              variant="ghost"
              size="sm"
              onClick={closeMenu}
              className="p-2"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Menu Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-4 space-y-6">
              {/* Auth Buttons */}
              <div className="space-y-3">
                <Button
                  className="w-full bg-[#4E342E] text-white hover:bg-[#3D2B23] rounded-[6px] h-12"
                  asChild
                  onClick={closeMenu}
                >
                  <Link
                    href="/auth/login"
                    className="flex items-center justify-center space-x-2"
                  >
                    <User className="h-4 w-4" />
                    <span>S'inscrire | Se connecter</span>
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-[#4E342E] text-[#4E342E] hover:bg-[#4E342E] hover:text-white rounded-[6px] h-12"
                  asChild
                  onClick={closeMenu}
                >
                  <Link
                    href="/seller/dashboard"
                    className="flex items-center justify-center space-x-2"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Vends tes articles</span>
                  </Link>
                </Button>
              </div>

              {/* Main Navigation */}
              <div className="space-y-1">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 py-2">
                  Navigation
                </div>
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="flex items-center justify-between px-3 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <Home className="h-5 w-5" />
                    <span className="font-medium">Accueil</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </Link>
                <Link
                  href="/categories/all"
                  onClick={closeMenu}
                  className="flex items-center justify-between px-3 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <ShoppingBag className="h-5 w-5" />
                    <span className="font-medium">Toutes les catégories</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </Link>
              </div>

              {/* Categories */}
              <div className="space-y-1">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 py-2">
                  Catégories
                </div>
                {[
                  { href: "/categories/femme", label: "Femme" },
                  { href: "/categories/homme", label: "Homme" },
                  { href: "/categories/maison", label: "Maison" },
                  { href: "/categories/beaute", label: "Beauté & Bien-être" },
                  { href: "/categories/createurs", label: "Créateurs" },
                ].map((category) => (
                  <Link
                    key={category.href}
                    href={category.href}
                    onClick={closeMenu}
                    className="flex items-center justify-between px-3 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <span className="font-medium">{category.label}</span>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </Link>
                ))}
              </div>

              {/* Account */}
              <div className="space-y-1">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 py-2">
                  Mon compte
                </div>
                <Link
                  href="/profile"
                  onClick={closeMenu}
                  className="flex items-center justify-between px-3 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <User className="h-5 w-5" />
                    <span className="font-medium">Mon profil</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </Link>
                <Link
                  href="/favorites"
                  onClick={closeMenu}
                  className="flex items-center justify-between px-3 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <Heart className="h-5 w-5" />
                    <span className="font-medium">Mes favoris</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </Link>
                <Link
                  href="/messages"
                  onClick={closeMenu}
                  className="flex items-center justify-between px-3 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="h-5 w-5" />
                    <span className="font-medium">Messages</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </Link>
              </div>

              {/* Info */}
              <div className="space-y-1">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 py-2">
                  Informations
                </div>
                <Link
                  href="/how-it-works"
                  onClick={closeMenu}
                  className="flex items-center justify-between px-3 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <Info className="h-5 w-5" />
                    <span className="font-medium">Comment ça marche</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </Link>
                <Link
                  href="/blog"
                  onClick={closeMenu}
                  className="flex items-center justify-between px-3 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <Info className="h-5 w-5" />
                    <span className="font-medium">Blog</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </Link>
                <Link
                  href="/about"
                  onClick={closeMenu}
                  className="flex items-center justify-between px-3 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <Info className="h-5 w-5" />
                    <span className="font-medium">À propos</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

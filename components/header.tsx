"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, Plus, Search, User, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { DropdownMenuHeader } from "./ui/dropdown-menu-header";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="border-1 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex h-[52px] items-center w-[651px] md:w-full justify-center">
            <Link href="/" className="flex items-center space-x-2 ">
              <img src="Orizana.svg" alt="" className="w-[91.04px] h-[44px]" />
            </Link>

            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Rechercher des articles..."
                  className="pl-12 pr-4 rounded-[6px]  bg-[#EDF2F2] h-[36px] focus:bg-white font-[16px]"
                />
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Button
                className="bg-transparent border-1 text-[#4E342E] border-solid border-[#4E342E] hover:bg-[#4E342E] hover:text-white  rounded-[6px] h-[32px]  text-[12px]"
                asChild
              >
                <Link
                  href="/seller/dashboard"
                  className="flex items-center space-x-1"
                >
                  <span className="font-inter"> S'inscrire | Se connecter</span>
                </Link>
              </Button>
              <Button
                className="bg-[#4E342E] border-1 text-white border-solid border-[#4E342E] hover:bg-[#4E342E] hover:text-white  rounded-[6px] h-[32px]  text-[12px]"
                asChild
              >
                <Link
                  href="/seller/dashboard"
                  className="flex items-center space-x-1"
                >
                  <span> Vends tes articles</span>
                </Link>
              </Button>

              <DropdownMenuHeader />
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>

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

      <div className="hidden md:block border-b">
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" className="justify-start" asChild>
                  <Link href="/auth/login">
                    <User className="h-4 w-4 mr-2" />
                    Se connecter
                  </Link>
                </Button>
                <Button variant="outline" className="justify-start" asChild>
                  <Link href="/seller/dashboard">
                    <Plus className="h-4 w-4 mr-2" />
                    Vend tes articles
                  </Link>
                </Button>
              </div>

              <div className="space-y-2">
                <div className="font-medium text-gray-900 px-2">Mon compte</div>
                <Button
                  variant="ghost"
                  className="justify-start w-full"
                  asChild
                >
                  <Link href="/profile">Mon profil</Link>
                </Button>
                <Button
                  variant="ghost"
                  className="justify-start w-full"
                  asChild
                >
                  <Link href="/favorites">Mes favoris</Link>
                </Button>
                <Button
                  variant="ghost"
                  className="justify-start w-full"
                  asChild
                >
                  <Link href="/messages">Messages</Link>
                </Button>
              </div>

              <div className="space-y-2">
                <div className="font-medium text-gray-900 px-2">Catégories</div>
                <div className="grid grid-cols-2 gap-1">
                  <Button
                    variant="ghost"
                    className="justify-start text-sm"
                    asChild
                  >
                    <Link href="/categories/femme">Femme</Link>
                  </Button>
                  <Button
                    variant="ghost"
                    className="justify-start text-sm"
                    asChild
                  >
                    <Link href="/categories/homme">Homme</Link>
                  </Button>
                  <Button
                    variant="ghost"
                    className="justify-start text-sm"
                    asChild
                  >
                    <Link href="/categories/enfants">Enfants</Link>
                  </Button>
                  <Button
                    variant="ghost"
                    className="justify-start text-sm"
                    asChild
                  >
                    <Link href="/categories/maison">Maison</Link>
                  </Button>
                  <Button
                    variant="ghost"
                    className="justify-start text-sm"
                    asChild
                  >
                    <Link href="/categories/electronique">Électronique</Link>
                  </Button>
                  <Button
                    variant="ghost"
                    className="justify-start text-sm"
                    asChild
                  >
                    <Link href="/categories/loisirs">Loisirs</Link>
                  </Button>
                  <Button
                    variant="ghost"
                    className="justify-start text-sm"
                    asChild
                  >
                    <Link href="/categories/beaute">Beauté</Link>
                  </Button>
                  <Button
                    variant="ghost"
                    className="justify-start text-sm"
                    asChild
                  >
                    <Link href="/categories/sport">Sport</Link>
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-medium text-gray-900 px-2">Vintel</div>
                <Button
                  variant="ghost"
                  className="justify-start w-full text-sm"
                  asChild
                >
                  <Link href="/how-it-works">Comment ça marche</Link>
                </Button>
                <Button
                  variant="ghost"
                  className="justify-start w-full text-sm"
                  asChild
                >
                  <Link href="/blog">Blog</Link>
                </Button>
                <Button
                  variant="ghost"
                  className="justify-start w-full text-sm"
                  asChild
                >
                  <Link href="/about">À propos</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

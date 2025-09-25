"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { useCart } from "@/lib/cart-context";
import {
  Bell,
  Heart,
  Menu,
  Plus,
  Search,
  ShoppingBag,
  User,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Premier header - Logo, recherche et actions */}
      <div className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex h-14 items-center w-[651px] md:w-full justify-center">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 ">
              <img src="Orizana.svg" alt="" className="w-[91.04px] h-[44px]" />
            </Link>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Rechercher des articles..."
                  className="pl-12 pr-4 rounded-[6px]  bg-[#EDF2F2] h-10 focus:bg-white font-[16px]"
                />
              </div>
            </div>

            {/* Actions droite */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Bouton Vendre */}
              <Button
                className="bg-transparent text-[#4E342E] border-solid border-[#4E342E] hover:bg-[#4E342E] hover:text-white  rounded-[6px] px-[12px] py-0 font-medium"
                asChild
              >
                <Link
                  href="/seller/dashboard"
                  className="flex items-center space-x-1"
                >
                  <span> Vend tes articles</span>
                </Link>
              </Button>

              {/* Icônes avec badges */}
              <Button
                variant="ghost"
                className="relative p-2 text-gray-600 hover:text-gray-900"
                asChild
              >
                <Link href="/notifications">
                  <Bell className="h-5 w-5" />
                  <Badge className="absolute -top-1 -right-1 h-4 w-4 rounded-full p-0 flex items-center justify-center text-xs bg-red-500 border-white border">
                    3
                  </Badge>
                </Link>
              </Button>

              <Button
                variant="ghost"
                className="relative p-2 text-gray-600 hover:text-gray-900"
              >
                <Heart className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-4 w-4 rounded-full p-0 flex items-center justify-center text-xs bg-red-500 border-white border">
                  5
                </Badge>
              </Button>

              <Button
                variant="ghost"
                className="relative p-2 text-gray-600 hover:text-gray-900"
                asChild
              >
                <Link href="/cart">
                  <ShoppingBag className="h-5 w-5" />
                  {state.itemCount > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-4 w-4 rounded-full p-0 flex items-center justify-center text-xs bg-red-500 border-white border">
                      {state.itemCount}
                    </Badge>
                  )}
                </Link>
              </Button>

              {/* Profile dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="p-2 text-gray-600 hover:text-gray-900"
                  >
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem asChild>
                    <Link href="/profile">Mon Profil</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/seller/dashboard">Vendre sur Vintel</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/messages">Messages</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/favorites">Favoris</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/auth/login">Se connecter</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/auth/register">Créer un compte</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Mobile Menu Button */}
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

          {/* Search Bar - Mobile */}
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

      {/* Deuxième header - Navigation par catégories */}
      <div className="hidden md:block border-b">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-center gap-100 h-12">
            {/* Catégories principales */}
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

            {/* Liens utilitaires droite */}
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
              {/* Actions utilisateur mobile */}
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

              {/* Navigation mobile */}
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

              {/* Catégories mobile */}
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

              {/* Liens utiles mobile */}
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

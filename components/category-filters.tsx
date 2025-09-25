"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import type { Category } from "@/lib/mock-data"
import Link from "next/link"
import { useSearchParams, usePathname } from "next/navigation"

interface CategoryFiltersProps {
  category: Category
  currentSubcategory?: string
}

export function CategoryFilters({ category, currentSubcategory }: CategoryFiltersProps) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const [priceRange, setPriceRange] = useState([0, 200])

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value) {
      params.set(name, value)
    } else {
      params.delete(name)
    }
    return params.toString()
  }

  return (
    <div className="space-y-6">
      {/* Subcategories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Sous-catégories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Link href={pathname}>
            <Button variant={!currentSubcategory ? "default" : "ghost"} className="w-full justify-start" size="sm">
              Toutes ({category.productCount})
            </Button>
          </Link>
          {category.subcategories.map((sub) => (
            <Link key={sub.id} href={`${pathname}?${createQueryString("subcategory", sub.slug)}`}>
              <Button
                variant={currentSubcategory === sub.slug ? "default" : "ghost"}
                className="w-full justify-between"
                size="sm"
              >
                {sub.name}
                <Badge variant="secondary" className="text-xs">
                  {sub.productCount}
                </Badge>
              </Button>
            </Link>
          ))}
        </CardContent>
      </Card>

      {/* Price Range */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Prix</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="px-2">
            <Slider value={priceRange} onValueChange={setPriceRange} max={200} min={0} step={5} className="w-full" />
          </div>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{priceRange[0]}€</span>
            <span>{priceRange[1]}€</span>
          </div>
          <Button size="sm" className="w-full">
            Appliquer
          </Button>
        </CardContent>
      </Card>

      {/* Availability */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Disponibilité</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="in-stock" />
            <label htmlFor="in-stock" className="text-sm">
              En stock seulement
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="on-sale" />
            <label htmlFor="on-sale" className="text-sm">
              En promotion
            </label>
          </div>
        </CardContent>
      </Card>

      {/* Seller Location */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Origine</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="africa" />
            <label htmlFor="africa" className="text-sm">
              Afrique
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="caribbean" />
            <label htmlFor="caribbean" className="text-sm">
              Caraïbes
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="europe" />
            <label htmlFor="europe" className="text-sm">
              Europe
            </label>
          </div>
        </CardContent>
      </Card>

      {/* Clear Filters */}
      <Button variant="outline" className="w-full bg-transparent">
        Effacer les filtres
      </Button>
    </div>
  )
}

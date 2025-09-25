import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Star, ShoppingBag } from "lucide-react"

const featuredProducts = [
  {
    id: 1,
    name: "Robe Wax Authentique",
    price: "89.99",
    originalPrice: "120.00",
    rating: 4.8,
    reviews: 124,
    image: "/beautiful-african-wax-print-dress-colorful-pattern.jpg",
    seller: "Amina Boutique",
    badge: "Bestseller",
    badgeColor: "bg-primary",
  },
  {
    id: 2,
    name: "Huile de Coco Bio Caraïbes",
    price: "24.99",
    originalPrice: null,
    rating: 4.9,
    reviews: 89,
    image: "/organic-coconut-oil-caribbean-natural-beauty-produ.jpg",
    seller: "Natural Carib",
    badge: "Nouveau",
    badgeColor: "bg-secondary",
  },
  {
    id: 3,
    name: "Collier Perles Africaines",
    price: "45.00",
    originalPrice: "60.00",
    rating: 4.7,
    reviews: 67,
    image: "/african-beaded-necklace-traditional-jewelry-colorf.jpg",
    seller: "Heritage Crafts",
    badge: "Promo",
    badgeColor: "bg-accent",
  },
  {
    id: 4,
    name: "Dashiki Homme Premium",
    price: "65.00",
    originalPrice: null,
    rating: 4.6,
    reviews: 43,
    image: "/men-dashiki-shirt-african-traditional-clothing-col.jpg",
    seller: "Afro Style",
    badge: "Tendance",
    badgeColor: "bg-primary",
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Produits en vedette</h2>
            <p className="text-muted-foreground text-lg">Découvrez les coups de cœur de notre communauté</p>
          </div>
          <Button variant="outline" className="hidden md:flex bg-transparent">
            Voir tout
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className={`absolute top-3 left-3 ${product.badgeColor} text-white`}>{product.badge}</Badge>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="absolute top-3 right-3 h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>

                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="font-semibold text-sm group-hover:text-primary transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">par {product.seller}</p>
                  </div>

                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3 fill-accent text-accent" />
                    <span className="text-xs font-medium">{product.rating}</span>
                    <span className="text-xs text-muted-foreground">({product.reviews})</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-primary">{product.price}€</span>
                      {product.originalPrice && (
                        <span className="text-xs text-muted-foreground line-through">{product.originalPrice}€</span>
                      )}
                    </div>
                    <Button size="sm" className="h-8 px-3">
                      <ShoppingBag className="h-3 w-3 mr-1" />
                      Ajouter
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Button variant="outline">Voir tous les produits</Button>
        </div>
      </div>
    </section>
  )
}

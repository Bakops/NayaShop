import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Award } from "lucide-react"

const featuredSellers = [
  {
    id: 1,
    name: "Amina Boutique",
    location: "Paris, France",
    rating: 4.9,
    reviews: 342,
    products: 156,
    image: "/african-caribbean-woman-seller-boutique-owner-smil.jpg",
    specialty: "Mode Africaine",
    badge: "Vendeur Vérifié",
    description: "Spécialisée dans les tissus wax authentiques et la mode africaine contemporaine.",
  },
  {
    id: 2,
    name: "Caribbean Natural",
    location: "Martinique",
    rating: 4.8,
    reviews: 198,
    products: 89,
    image: "/caribbean-natural-products-seller-artisan-workshop.jpg",
    specialty: "Beauté Naturelle",
    badge: "Artisan Local",
    description: "Produits de beauté naturels à base d'ingrédients caribéens traditionnels.",
  },
  {
    id: 3,
    name: "Heritage Crafts",
    location: "Sénégal",
    rating: 4.7,
    reviews: 267,
    products: 203,
    image: "/african-craftsman-artisan-working-on-traditional-j.jpg",
    specialty: "Artisanat",
    badge: "Maître Artisan",
    description: "Bijoux et objets d'art traditionnels fabriqués selon les techniques ancestrales.",
  },
]

export function SellerSpotlight() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos vendeurs d'exception</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Découvrez les artisans et créateurs qui font la richesse de notre marketplace
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredSellers.map((seller) => (
            <Card key={seller.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="relative inline-block">
                    <div className="w-20 h-20 rounded-full overflow-hidden mx-auto">
                      <img
                        src={seller.image || "/placeholder.svg"}
                        alt={seller.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Badge className="absolute -bottom-1 -right-1 bg-secondary text-secondary-foreground p-1">
                      <Award className="h-3 w-3" />
                    </Badge>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{seller.name}</h3>
                    <div className="flex items-center justify-center space-x-1 text-sm text-muted-foreground mt-1">
                      <MapPin className="h-3 w-3" />
                      <span>{seller.location}</span>
                    </div>
                  </div>

                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {seller.badge}
                  </Badge>

                  <div className="flex items-center justify-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 fill-accent text-accent" />
                      <span className="font-medium">{seller.rating}</span>
                      <span className="text-muted-foreground">({seller.reviews})</span>
                    </div>
                    <div className="text-muted-foreground">{seller.products} produits</div>
                  </div>

                  <p className="text-sm text-muted-foreground text-center">{seller.description}</p>

                  <div className="space-y-2">
                    <Badge variant="outline" className="text-xs">
                      {seller.specialty}
                    </Badge>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      Voir la boutique
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

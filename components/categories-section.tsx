import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const categories = [
  {
    name: "Mode Femme",
    count: "2.5K",
    image: "/african-caribbean-fashion-women-clothing-colorful-.jpg",
    color: "from-primary/20 to-primary/5",
  },
  {
    name: "Mode Homme",
    count: "1.8K",
    image: "/african-caribbean-fashion-men-clothing-shirts-dash.jpg",
    color: "from-secondary/20 to-secondary/5",
  },
  {
    name: "Beauté & Soins",
    count: "3.2K",
    image: "/african-caribbean-beauty-products-natural-skincare.jpg",
    color: "from-accent/20 to-accent/5",
  },
  {
    name: "Artisanat",
    count: "1.5K",
    image: "/african-caribbean-handmade-crafts-wooden-sculpture.jpg",
    color: "from-primary/15 to-secondary/15",
  },
  {
    name: "Bijoux",
    count: "2.1K",
    image: "/african-caribbean-jewelry-gold-silver-traditional-.jpg",
    color: "from-accent/15 to-primary/15",
  },
  {
    name: "Maison & Déco",
    count: "900",
    image: "/african-caribbean-home-decor-textiles-masks-wall-a.jpg",
    color: "from-secondary/15 to-accent/15",
  },
]

export function CategoriesSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explorez nos catégories</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Découvrez une sélection authentique de produits afro-caribéens soigneusement choisis par notre communauté
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className={`relative aspect-square bg-gradient-to-br ${category.color} overflow-hidden`}>
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <Badge className="absolute top-4 right-4 bg-background/90 text-foreground">
                    {category.count} produits
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{category.name}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

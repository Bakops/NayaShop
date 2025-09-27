import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 wax-pattern">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-accent/20 rounded-full px-4 py-2">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent-foreground">
                Nouveau : Livraison gratuite dès 50€
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold font-Zooja text-balance leading-tight">
              Découvrez l'authenticité
              <span className="text-primary block">Afro-Caribéenne</span>
            </h1>

            <p className="text-lg text-muted-foreground text-pretty max-w-md">
              Mode, beauté, artisanat et produits culturels authentiques. Vendez
              et achetez en toute confiance sur notre marketplace dédiée.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Explorer les produits
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Commencer à vendre
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Produits</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">5K+</div>
                <div className="text-sm text-muted-foreground">Vendeurs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">50K+</div>
                <div className="text-sm text-muted-foreground">Clients</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 madras-pattern">
              <img
                src="/beautiful-african-caribbean-woman-wearing-colorful.jpg"
                alt="Femme afro-caribéenne en tenue traditionnelle colorée"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-card rounded-xl p-4 shadow-lg border">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-semibold">4.9</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">
                    Excellente qualité
                  </div>
                  <div className="text-xs text-muted-foreground">
                    +2000 avis
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, MapPin, Calendar, Package, Heart } from "lucide-react"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  const userProfile = {
    id: "1",
    name: "Amara Diallo",
    email: "amara.diallo@email.com",
    avatar: "/beautiful-african-woman-smiling.jpg",
    location: "Fort-de-France, Martinique",
    joinDate: "2023-03-15",
    rating: 4.8,
    totalReviews: 127,
    bio: "Passionnée par la mode afro-caribéenne, je partage ma collection de vêtements traditionnels et modernes. Chaque pièce raconte une histoire de notre riche héritage culturel.",
    specialties: ["Mode Traditionnelle", "Bijoux Artisanaux", "Textiles Wax"],
    stats: {
      itemsSold: 89,
      itemsListed: 23,
      followers: 245,
      following: 67,
    },
  }

  const recentActivity = [
    { type: "sale", item: "Robe Wax Ankara", date: "2024-01-15", price: "85€" },
    { type: "review", item: "Collier en perles", rating: 5, date: "2024-01-12" },
    { type: "listing", item: "Headwrap Madras", date: "2024-01-10" },
    { type: "purchase", item: "Bracelet en coquillages", date: "2024-01-08", price: "25€" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="lg:col-span-1">
            <Card className="border-orange-200">
              <CardHeader className="text-center">
                <Avatar className="w-32 h-32 mx-auto mb-4">
                  <AvatarImage src={userProfile.avatar || "/placeholder.svg"} alt={userProfile.name} />
                  <AvatarFallback className="bg-orange-100 text-orange-800 text-2xl">
                    {userProfile.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-2xl text-gray-900">{userProfile.name}</CardTitle>
                <CardDescription className="flex items-center justify-center gap-1 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  {userProfile.location}
                </CardDescription>
                <div className="flex items-center justify-center gap-1 mt-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{userProfile.rating}</span>
                  <span className="text-gray-500">({userProfile.totalReviews} avis)</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-orange-600">{userProfile.stats.itemsSold}</div>
                    <div className="text-sm text-gray-600">Vendus</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">{userProfile.stats.itemsListed}</div>
                    <div className="text-sm text-gray-600">En vente</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">{userProfile.stats.followers}</div>
                    <div className="text-sm text-gray-600">Abonnés</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">{userProfile.stats.following}</div>
                    <div className="text-sm text-gray-600">Abonnements</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-semibold">Spécialités</Label>
                  <div className="flex flex-wrap gap-2">
                    {userProfile.specialties.map((specialty) => (
                      <Badge key={specialty} variant="secondary" className="bg-orange-100 text-orange-800">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    Membre depuis{" "}
                    {new Date(userProfile.joinDate).toLocaleDateString("fr-FR", {
                      year: "numeric",
                      month: "long",
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Aperçu</TabsTrigger>
                <TabsTrigger value="listings">Mes Articles</TabsTrigger>
                <TabsTrigger value="purchases">Achats</TabsTrigger>
                <TabsTrigger value="settings">Paramètres</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>À propos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{userProfile.bio}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Activité récente</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivity.map((activity, index) => (
                        <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-gray-50">
                          <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                            {activity.type === "sale" && <Package className="w-5 h-5 text-orange-600" />}
                            {activity.type === "review" && <Star className="w-5 h-5 text-yellow-600" />}
                            {activity.type === "listing" && <Package className="w-5 h-5 text-green-600" />}
                            {activity.type === "purchase" && <Heart className="w-5 h-5 text-red-600" />}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium">
                              {activity.type === "sale" && `Vente: ${activity.item}`}
                              {activity.type === "review" && `Avis reçu pour: ${activity.item}`}
                              {activity.type === "listing" && `Nouvel article: ${activity.item}`}
                              {activity.type === "purchase" && `Achat: ${activity.item}`}
                            </div>
                            <div className="text-sm text-gray-500">
                              {new Date(activity.date).toLocaleDateString("fr-FR")}
                              {activity.price && ` • ${activity.price}`}
                              {activity.rating && ` • ${activity.rating} étoiles`}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="listings">
                <Card>
                  <CardHeader>
                    <CardTitle>Mes Articles en Vente</CardTitle>
                    <CardDescription>Gérez vos articles mis en vente</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8 text-gray-500">
                      <Package className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>Vous n'avez pas encore d'articles en vente.</p>
                      <Button className="mt-4 bg-orange-600 hover:bg-orange-700">Ajouter un article</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="purchases">
                <Card>
                  <CardHeader>
                    <CardTitle>Mes Achats</CardTitle>
                    <CardDescription>Historique de vos achats</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8 text-gray-500">
                      <Heart className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>Aucun achat pour le moment.</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings">
                <Card>
                  <CardHeader>
                    <CardTitle>Paramètres du Profil</CardTitle>
                    <CardDescription>Modifiez vos informations personnelles</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Nom complet</Label>
                        <Input id="name" defaultValue={userProfile.name} />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue={userProfile.email} />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="location">Localisation</Label>
                      <Input id="location" defaultValue={userProfile.location} />
                    </div>
                    <div>
                      <Label htmlFor="bio">Biographie</Label>
                      <Textarea id="bio" defaultValue={userProfile.bio} rows={4} />
                    </div>
                    <Button className="bg-orange-600 hover:bg-orange-700">Sauvegarder les modifications</Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

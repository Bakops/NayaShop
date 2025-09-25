"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Package, TrendingUp, DollarSign, Eye, MessageCircle, Star, Plus, Edit, Trash2, BarChart3 } from "lucide-react"

export default function SellerDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const stats = {
    totalSales: 1250,
    activeListings: 23,
    totalViews: 5420,
    avgRating: 4.8,
    monthlyRevenue: 890,
    pendingOrders: 3,
  }

  const recentOrders = [
    {
      id: "#ORD-001",
      item: "Robe Wax Ankara",
      buyer: "Marie Dubois",
      price: 85,
      status: "pending",
      date: "2024-01-15",
    },
    {
      id: "#ORD-002",
      item: "Collier en perles",
      buyer: "Sophie Martin",
      price: 45,
      status: "shipped",
      date: "2024-01-14",
    },
    {
      id: "#ORD-003",
      item: "Headwrap Madras",
      buyer: "Fatou Kone",
      price: 25,
      status: "delivered",
      date: "2024-01-12",
    },
  ]

  const myListings = [
    {
      id: "1",
      title: "Robe Wax Ankara Traditionnelle",
      price: 85,
      views: 234,
      likes: 12,
      status: "active",
      image: "/colorful-african-dress.png",
    },
    {
      id: "2",
      title: "Collier en Perles Artisanal",
      price: 45,
      views: 156,
      likes: 8,
      status: "active",
      image: "/african-beaded-necklace.jpg",
    },
    {
      id: "3",
      title: "Headwrap Madras Authentique",
      price: 25,
      views: 89,
      likes: 5,
      status: "sold",
      image: "/colorful-headwrap.jpg",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "shipped":
        return "bg-blue-100 text-blue-800"
      case "delivered":
        return "bg-green-100 text-green-800"
      case "active":
        return "bg-green-100 text-green-800"
      case "sold":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Tableau de Bord Vendeur</h1>
          <p className="text-gray-600">Gérez vos ventes et suivez vos performances</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Aperçu</TabsTrigger>
            <TabsTrigger value="listings">Mes Articles</TabsTrigger>
            <TabsTrigger value="orders">Commandes</TabsTrigger>
            <TabsTrigger value="analytics">Analyses</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-orange-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Revenus du Mois</CardTitle>
                  <DollarSign className="h-4 w-4 text-orange-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-600">{stats.monthlyRevenue}€</div>
                  <p className="text-xs text-gray-600">+12% par rapport au mois dernier</p>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Articles Actifs</CardTitle>
                  <Package className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">{stats.activeListings}</div>
                  <p className="text-xs text-gray-600">3 nouveaux cette semaine</p>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Vues Totales</CardTitle>
                  <Eye className="h-4 w-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">{stats.totalViews}</div>
                  <p className="text-xs text-gray-600">+8% cette semaine</p>
                </CardContent>
              </Card>

              <Card className="border-yellow-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Note Moyenne</CardTitle>
                  <Star className="h-4 w-4 text-yellow-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-yellow-600">{stats.avgRating}/5</div>
                  <p className="text-xs text-gray-600">Basé sur 127 avis</p>
                </CardContent>
              </Card>

              <Card className="border-purple-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Ventes Totales</CardTitle>
                  <TrendingUp className="h-4 w-4 text-purple-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600">{stats.totalSales}€</div>
                  <p className="text-xs text-gray-600">Depuis le début</p>
                </CardContent>
              </Card>

              <Card className="border-red-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Commandes en Attente</CardTitle>
                  <MessageCircle className="h-4 w-4 text-red-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-red-600">{stats.pendingOrders}</div>
                  <p className="text-xs text-gray-600">À traiter rapidement</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Orders */}
            <Card>
              <CardHeader>
                <CardTitle>Commandes Récentes</CardTitle>
                <CardDescription>Vos dernières ventes et leur statut</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <div className="font-medium">{order.item}</div>
                        <div className="text-sm text-gray-600">
                          {order.id} • {order.buyer} • {new Date(order.date).toLocaleDateString("fr-FR")}
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="font-semibold">{order.price}€</div>
                        <Badge className={getStatusColor(order.status)}>
                          {order.status === "pending" && "En attente"}
                          {order.status === "shipped" && "Expédié"}
                          {order.status === "delivered" && "Livré"}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="listings" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Mes Articles</h2>
              <Button className="bg-orange-600 hover:bg-orange-700">
                <Plus className="w-4 h-4 mr-2" />
                Ajouter un Article
              </Button>
            </div>

            <div className="grid gap-4">
              {myListings.map((listing) => (
                <Card key={listing.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <img
                        src={listing.image || "/placeholder.svg"}
                        alt={listing.title}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{listing.title}</h3>
                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {listing.views} vues
                          </span>
                          <span className="flex items-center gap-1">
                            <Star className="w-4 h-4" />
                            {listing.likes} likes
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-orange-600">{listing.price}€</div>
                        <Badge className={getStatusColor(listing.status)}>
                          {listing.status === "active" ? "Actif" : "Vendu"}
                        </Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="orders" className="space-y-6">
            <h2 className="text-2xl font-bold">Gestion des Commandes</h2>

            <div className="space-y-4">
              {recentOrders.map((order) => (
                <Card key={order.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-4">
                          <h3 className="font-semibold">{order.item}</h3>
                          <Badge className={getStatusColor(order.status)}>
                            {order.status === "pending" && "En attente"}
                            {order.status === "shipped" && "Expédié"}
                            {order.status === "delivered" && "Livré"}
                          </Badge>
                        </div>
                        <div className="text-sm text-gray-600">
                          Commande {order.id} • Acheteur: {order.buyer}
                        </div>
                        <div className="text-sm text-gray-600">{new Date(order.date).toLocaleDateString("fr-FR")}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">{order.price}€</div>
                        {order.status === "pending" && (
                          <Button className="mt-2 bg-orange-600 hover:bg-orange-700">Marquer comme Expédié</Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <h2 className="text-2xl font-bold">Analyses et Statistiques</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    Ventes par Mois
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8 text-gray-500">
                    <BarChart3 className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Graphique des ventes mensuelles</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Catégories Populaires
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Mode Traditionnelle</span>
                      <span className="font-semibold">45%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Bijoux Artisanaux</span>
                      <span className="font-semibold">30%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Textiles Wax</span>
                      <span className="font-semibold">25%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

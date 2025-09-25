"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Package, ShoppingCart, DollarSign, AlertTriangle, Eye, MessageSquare, Star } from "lucide-react"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const stats = {
    totalUsers: 1247,
    activeListings: 3456,
    totalOrders: 892,
    monthlyRevenue: 45670,
    pendingReports: 12,
    averageRating: 4.6,
  }

  const recentOrders = [
    {
      id: "#ORD-1001",
      buyer: "Marie Dubois",
      seller: "Amara Diallo",
      product: "Robe Wax Ankara",
      amount: 85,
      status: "completed",
      date: "2024-01-15",
    },
    {
      id: "#ORD-1002",
      buyer: "Sophie Martin",
      seller: "Kwame Asante",
      product: "Collier en perles",
      amount: 45,
      status: "pending",
      date: "2024-01-14",
    },
    {
      id: "#ORD-1003",
      buyer: "Fatou Kone",
      seller: "Amara Diallo",
      product: "Headwrap Madras",
      amount: 25,
      status: "shipped",
      date: "2024-01-12",
    },
  ]

  const reportedItems = [
    {
      id: "RPT-001",
      type: "product",
      title: "Contenu inapproprié",
      product: "Bracelet traditionnel",
      reporter: "User123",
      date: "2024-01-15",
      status: "pending",
    },
    {
      id: "RPT-002",
      type: "user",
      title: "Comportement suspect",
      user: "VendeurXYZ",
      reporter: "AcheteurABC",
      date: "2024-01-14",
      status: "investigating",
    },
  ]

  const topSellers = [
    {
      name: "Amara Diallo",
      sales: 156,
      revenue: 4250,
      rating: 4.9,
      avatar: "/beautiful-african-woman-smiling.jpg",
    },
    {
      name: "Kwame Asante",
      sales: 134,
      revenue: 3890,
      rating: 4.7,
      avatar: "/beautiful-african-woman-smiling.jpg",
    },
    {
      name: "Fatima Ba",
      sales: 98,
      revenue: 2670,
      rating: 4.8,
      avatar: "/beautiful-african-woman-smiling.jpg",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "shipped":
        return "bg-blue-100 text-blue-800"
      case "investigating":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Administration Karibean Market</h1>
          <p className="text-gray-600">Tableau de bord administrateur</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Aperçu</TabsTrigger>
            <TabsTrigger value="users">Utilisateurs</TabsTrigger>
            <TabsTrigger value="products">Produits</TabsTrigger>
            <TabsTrigger value="orders">Commandes</TabsTrigger>
            <TabsTrigger value="reports">Signalements</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-blue-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Utilisateurs Totaux</CardTitle>
                  <Users className="h-4 w-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">{stats.totalUsers.toLocaleString()}</div>
                  <p className="text-xs text-gray-600">+12% ce mois</p>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Articles Actifs</CardTitle>
                  <Package className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">{stats.activeListings.toLocaleString()}</div>
                  <p className="text-xs text-gray-600">+8% cette semaine</p>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Commandes Totales</CardTitle>
                  <ShoppingCart className="h-4 w-4 text-orange-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-600">{stats.totalOrders.toLocaleString()}</div>
                  <p className="text-xs text-gray-600">+15% ce mois</p>
                </CardContent>
              </Card>

              <Card className="border-purple-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Revenus Mensuels</CardTitle>
                  <DollarSign className="h-4 w-4 text-purple-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600">{stats.monthlyRevenue.toLocaleString()}€</div>
                  <p className="text-xs text-gray-600">+22% vs mois dernier</p>
                </CardContent>
              </Card>

              <Card className="border-red-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Signalements</CardTitle>
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-red-600">{stats.pendingReports}</div>
                  <p className="text-xs text-gray-600">À traiter</p>
                </CardContent>
              </Card>

              <Card className="border-yellow-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Note Moyenne</CardTitle>
                  <Star className="h-4 w-4 text-yellow-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-yellow-600">{stats.averageRating}/5</div>
                  <p className="text-xs text-gray-600">Satisfaction globale</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Commandes Récentes</CardTitle>
                  <CardDescription>Dernières transactions sur la plateforme</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="space-y-1">
                          <div className="font-medium">{order.product}</div>
                          <div className="text-sm text-gray-600">
                            {order.buyer} → {order.seller}
                          </div>
                          <div className="text-xs text-gray-500">{order.date}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">{order.amount}€</div>
                          <Badge className={getStatusColor(order.status)}>
                            {order.status === "completed" && "Terminé"}
                            {order.status === "pending" && "En attente"}
                            {order.status === "shipped" && "Expédié"}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Vendeurs</CardTitle>
                  <CardDescription>Vendeurs les plus performants</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topSellers.map((seller, index) => (
                      <div key={seller.name} className="flex items-center gap-4">
                        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold">
                          {index + 1}
                        </div>
                        <img
                          src={seller.avatar || "/placeholder.svg"}
                          alt={seller.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="font-medium">{seller.name}</div>
                          <div className="text-sm text-gray-600">
                            {seller.sales} ventes • {seller.revenue}€
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm">{seller.rating}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Gestion des Utilisateurs</CardTitle>
                <CardDescription>Administrer les comptes utilisateurs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  <Users className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Interface de gestion des utilisateurs</p>
                  <p className="text-sm">Recherche, modération, et statistiques utilisateurs</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Gestion des Produits</CardTitle>
                <CardDescription>Modérer et administrer les articles</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  <Package className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Interface de gestion des produits</p>
                  <p className="text-sm">Validation, modération, et statistiques produits</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Gestion des Commandes</CardTitle>
                <CardDescription>Suivi et administration des transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-2">
                        <div className="font-medium">{order.id}</div>
                        <div className="text-sm text-gray-600">
                          <strong>Produit:</strong> {order.product}
                        </div>
                        <div className="text-sm text-gray-600">
                          <strong>Acheteur:</strong> {order.buyer} | <strong>Vendeur:</strong> {order.seller}
                        </div>
                        <div className="text-xs text-gray-500">{order.date}</div>
                      </div>
                      <div className="text-right space-y-2">
                        <div className="font-semibold text-lg">{order.amount}€</div>
                        <Badge className={getStatusColor(order.status)}>
                          {order.status === "completed" && "Terminé"}
                          {order.status === "pending" && "En attente"}
                          {order.status === "shipped" && "Expédié"}
                        </Badge>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <MessageSquare className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Signalements</CardTitle>
                <CardDescription>Gérer les signalements et modérer le contenu</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {reportedItems.map((report) => (
                    <div key={report.id} className="p-4 border rounded-lg border-red-200 bg-red-50">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 text-red-600" />
                            <span className="font-medium">{report.title}</span>
                            <Badge variant="secondary">{report.type === "product" ? "Produit" : "Utilisateur"}</Badge>
                          </div>
                          <div className="text-sm text-gray-600">
                            {report.type === "product" ? (
                              <>
                                <strong>Produit:</strong> {report.product}
                              </>
                            ) : (
                              <>
                                <strong>Utilisateur:</strong> {report.user}
                              </>
                            )}
                          </div>
                          <div className="text-sm text-gray-600">
                            <strong>Signalé par:</strong> {report.reporter} • {report.date}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Badge className={getStatusColor(report.status)}>
                            {report.status === "pending" && "En attente"}
                            {report.status === "investigating" && "En cours"}
                          </Badge>
                          <Button variant="outline" size="sm">
                            Examiner
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

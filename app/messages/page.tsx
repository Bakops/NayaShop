"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, Send, MoreVertical, Package } from "lucide-react"

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState("1")
  const [newMessage, setNewMessage] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  const conversations = [
    {
      id: "1",
      name: "Marie Dubois",
      avatar: "/beautiful-african-woman-smiling.jpg",
      lastMessage: "Bonjour, est-ce que la robe est encore disponible ?",
      timestamp: "Il y a 2h",
      unread: 2,
      product: "Robe Wax Ankara",
      productImage: "/colorful-african-dress.png",
    },
    {
      id: "2",
      name: "Sophie Martin",
      avatar: "/beautiful-african-woman-smiling.jpg",
      lastMessage: "Merci pour l'envoi rapide !",
      timestamp: "Hier",
      unread: 0,
      product: "Collier en perles",
      productImage: "/african-beaded-necklace.jpg",
    },
    {
      id: "3",
      name: "Fatou Kone",
      avatar: "/beautiful-african-woman-smiling.jpg",
      lastMessage: "Pouvez-vous me donner plus d'informations sur les tailles ?",
      timestamp: "Il y a 3 jours",
      unread: 1,
      product: "Headwrap Madras",
      productImage: "/colorful-headwrap.jpg",
    },
  ]

  const messages = [
    {
      id: "1",
      senderId: "2",
      senderName: "Marie Dubois",
      content: "Bonjour ! Je suis intéressée par votre robe Wax Ankara. Est-elle encore disponible ?",
      timestamp: "14:30",
      isOwn: false,
    },
    {
      id: "2",
      senderId: "1",
      senderName: "Vous",
      content: "Bonjour Marie ! Oui, la robe est encore disponible. Quelle taille vous intéresse ?",
      timestamp: "14:35",
      isOwn: true,
    },
    {
      id: "3",
      senderId: "2",
      senderName: "Marie Dubois",
      content: "Je fais du M. Est-ce que vous pourriez me donner les mesures exactes ?",
      timestamp: "14:40",
      isOwn: false,
    },
    {
      id: "4",
      senderId: "1",
      senderName: "Vous",
      content: "Bien sûr ! Pour la taille M : tour de poitrine 92cm, tour de taille 76cm, longueur 120cm.",
      timestamp: "14:42",
      isOwn: true,
    },
    {
      id: "5",
      senderId: "2",
      senderName: "Marie Dubois",
      content: "Parfait ! Je la prends. Comment procède-t-on pour la commande ?",
      timestamp: "14:45",
      isOwn: false,
    },
  ]

  const currentConversation = conversations.find((conv) => conv.id === selectedConversation)

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Add message logic here
      console.log("Sending message:", newMessage)
      setNewMessage("")
    }
  }

  const filteredConversations = conversations.filter(
    (conv) =>
      conv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.product.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Messages</h1>
          <p className="text-gray-600">Communiquez avec vos acheteurs et vendeurs</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
          {/* Conversations List */}
          <div className="lg:col-span-1">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Conversations</CardTitle>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Rechercher une conversation..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-1">
                  {filteredConversations.map((conversation) => (
                    <div
                      key={conversation.id}
                      onClick={() => setSelectedConversation(conversation.id)}
                      className={`p-4 cursor-pointer hover:bg-gray-50 border-l-4 ${
                        selectedConversation === conversation.id
                          ? "border-orange-500 bg-orange-50"
                          : "border-transparent"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={conversation.avatar || "/placeholder.svg"} alt={conversation.name} />
                          <AvatarFallback>
                            {conversation.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-sm truncate">{conversation.name}</h3>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                              {conversation.unread > 0 && (
                                <Badge className="bg-orange-500 text-white text-xs px-2 py-1">
                                  {conversation.unread}
                                </Badge>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <img
                              src={conversation.productImage || "/placeholder.svg"}
                              alt={conversation.product}
                              className="w-6 h-6 object-cover rounded"
                            />
                            <span className="text-xs text-gray-600 truncate">{conversation.product}</span>
                          </div>
                          <p className="text-sm text-gray-600 truncate mt-1">{conversation.lastMessage}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-2">
            <Card className="h-full flex flex-col">
              {currentConversation && (
                <>
                  {/* Chat Header */}
                  <CardHeader className="border-b">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage
                            src={currentConversation.avatar || "/placeholder.svg"}
                            alt={currentConversation.name}
                          />
                          <AvatarFallback>
                            {currentConversation.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{currentConversation.name}</h3>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Package className="w-4 h-4" />
                            {currentConversation.product}
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardHeader>

                  {/* Messages */}
                  <CardContent className="flex-1 overflow-y-auto p-4">
                    <div className="space-y-4">
                      {messages.map((message) => (
                        <div key={message.id} className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}>
                          <div
                            className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                              message.isOwn ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-900"
                            }`}
                          >
                            <p className="text-sm">{message.content}</p>
                            <p className={`text-xs mt-1 ${message.isOwn ? "text-orange-100" : "text-gray-500"}`}>
                              {message.timestamp}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>

                  {/* Message Input */}
                  <div className="border-t p-4">
                    <div className="flex gap-2">
                      <Textarea
                        placeholder="Tapez votre message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        className="flex-1 min-h-[40px] max-h-[120px]"
                        onKeyPress={(e) => {
                          if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault()
                            handleSendMessage()
                          }
                        }}
                      />
                      <Button
                        onClick={handleSendMessage}
                        disabled={!newMessage.trim()}
                        className="bg-orange-600 hover:bg-orange-700"
                      >
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

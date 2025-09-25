export interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  rating: number
  reviews: number
  image: string
  images: string[]
  seller: {
    id: number
    name: string
    avatar: string
    rating: number
    location: string
  }
  category: string
  subcategory: string
  description: string
  features: string[]
  badge?: string
  badgeColor?: string
  inStock: boolean
  stockCount: number
  sizes?: string[]
  colors?: string[]
  materials?: string[]
  createdAt: string
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string
  image: string
  productCount: number
  subcategories: {
    id: string
    name: string
    slug: string
    productCount: number
  }[]
}

export const categories: Category[] = [
  {
    id: "1",
    name: "Mode Femme",
    slug: "mode-femme",
    description: "Robes, tops, jupes et accessoires inspirés des traditions africaines et caribéennes",
    image: "/african-caribbean-fashion-women-clothing-colorful-.jpg",
    productCount: 2543,
    subcategories: [
      { id: "1-1", name: "Robes", slug: "robes", productCount: 856 },
      { id: "1-2", name: "Tops & Chemisiers", slug: "tops-chemisiers", productCount: 634 },
      { id: "1-3", name: "Jupes", slug: "jupes", productCount: 423 },
      { id: "1-4", name: "Pantalons", slug: "pantalons", productCount: 387 },
      { id: "1-5", name: "Accessoires", slug: "accessoires", productCount: 243 },
    ],
  },
  {
    id: "2",
    name: "Mode Homme",
    slug: "mode-homme",
    description: "Dashikis, chemises et vêtements traditionnels pour hommes",
    image: "/african-caribbean-fashion-men-clothing-shirts-dash.jpg",
    productCount: 1876,
    subcategories: [
      { id: "2-1", name: "Dashikis", slug: "dashikis", productCount: 567 },
      { id: "2-2", name: "Chemises", slug: "chemises", productCount: 445 },
      { id: "2-3", name: "Pantalons", slug: "pantalons", productCount: 334 },
      { id: "2-4", name: "Costumes", slug: "costumes", productCount: 287 },
      { id: "2-5", name: "Accessoires", slug: "accessoires", productCount: 243 },
    ],
  },
  {
    id: "3",
    name: "Beauté & Soins",
    slug: "beaute-soins",
    description: "Produits de beauté naturels et soins traditionnels",
    image: "/african-caribbean-beauty-products-natural-skincare.jpg",
    productCount: 3245,
    subcategories: [
      { id: "3-1", name: "Soins Visage", slug: "soins-visage", productCount: 892 },
      { id: "3-2", name: "Soins Cheveux", slug: "soins-cheveux", productCount: 756 },
      { id: "3-3", name: "Huiles Naturelles", slug: "huiles-naturelles", productCount: 634 },
      { id: "3-4", name: "Savons Artisanaux", slug: "savons-artisanaux", productCount: 523 },
      { id: "3-5", name: "Parfums", slug: "parfums", productCount: 440 },
    ],
  },
  {
    id: "4",
    name: "Artisanat",
    slug: "artisanat",
    description: "Objets d'art et créations artisanales authentiques",
    image: "/african-caribbean-handmade-crafts-wooden-sculpture.jpg",
    productCount: 1534,
    subcategories: [
      { id: "4-1", name: "Sculptures", slug: "sculptures", productCount: 423 },
      { id: "4-2", name: "Masques", slug: "masques", productCount: 356 },
      { id: "4-3", name: "Poterie", slug: "poterie", productCount: 287 },
      { id: "4-4", name: "Textiles", slug: "textiles", productCount: 234 },
      { id: "4-5", name: "Instruments", slug: "instruments", productCount: 234 },
    ],
  },
  {
    id: "5",
    name: "Bijoux",
    slug: "bijoux",
    description: "Bijoux traditionnels et contemporains",
    image: "/african-caribbean-jewelry-gold-silver-traditional-.jpg",
    productCount: 2134,
    subcategories: [
      { id: "5-1", name: "Colliers", slug: "colliers", productCount: 567 },
      { id: "5-2", name: "Bracelets", slug: "bracelets", productCount: 445 },
      { id: "5-3", name: "Boucles d'oreilles", slug: "boucles-oreilles", productCount: 423 },
      { id: "5-4", name: "Bagues", slug: "bagues", productCount: 356 },
      { id: "5-5", name: "Parures", slug: "parures", productCount: 343 },
    ],
  },
  {
    id: "6",
    name: "Maison & Déco",
    slug: "maison-deco",
    description: "Décoration et objets pour la maison",
    image: "/african-caribbean-home-decor-textiles-masks-wall-a.jpg",
    productCount: 987,
    subcategories: [
      { id: "6-1", name: "Textiles", slug: "textiles", productCount: 234 },
      { id: "6-2", name: "Art Mural", slug: "art-mural", productCount: 198 },
      { id: "6-3", name: "Luminaires", slug: "luminaires", productCount: 167 },
      { id: "6-4", name: "Mobilier", slug: "mobilier", productCount: 234 },
      { id: "6-5", name: "Vaisselle", slug: "vaisselle", productCount: 154 },
    ],
  },
]

export const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Robe Wax Authentique "Soleil d\'Afrique"',
    price: 89.99,
    originalPrice: 120.0,
    rating: 4.8,
    reviews: 124,
    image: "/beautiful-african-wax-print-dress-colorful-pattern.jpg",
    images: [
      "/beautiful-african-wax-print-dress-colorful-pattern.jpg",
      "/african-caribbean-fashion-women-clothing-colorful-.jpg",
    ],
    seller: {
      id: 1,
      name: "Amina Boutique",
      avatar: "/african-caribbean-woman-seller-boutique-owner-smil.jpg",
      rating: 4.9,
      location: "Paris, France",
    },
    category: "Mode Femme",
    subcategory: "Robes",
    description:
      'Magnifique robe en tissu wax authentique, confectionnée à la main selon les traditions africaines. Le motif "Soleil d\'Afrique" symbolise la joie et la prospérité. Coupe évasée flatteuse pour toutes les morphologies.',
    features: [
      "Tissu wax 100% coton authentique",
      "Confection artisanale",
      "Coupe évasée flatteuse",
      'Motif traditionnel "Soleil d\'Afrique"',
      "Doublure en coton",
    ],
    badge: "Bestseller",
    badgeColor: "bg-primary",
    inStock: true,
    stockCount: 15,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Orange/Rouge", "Bleu/Jaune", "Vert/Rouge"],
    materials: ["100% Coton Wax"],
    createdAt: "2024-12-15",
  },
  {
    id: 2,
    name: "Huile de Coco Bio des Caraïbes",
    price: 24.99,
    rating: 4.9,
    reviews: 89,
    image: "/organic-coconut-oil-caribbean-natural-beauty-produ.jpg",
    images: ["/organic-coconut-oil-caribbean-natural-beauty-produ.jpg"],
    seller: {
      id: 2,
      name: "Caribbean Natural",
      avatar: "/caribbean-natural-products-seller-artisan-workshop.jpg",
      rating: 4.8,
      location: "Martinique",
    },
    category: "Beauté & Soins",
    subcategory: "Huiles Naturelles",
    description:
      "Huile de coco vierge extra pressée à froid, récoltée dans les plantations traditionnelles des Caraïbes. Parfaite pour les soins de la peau et des cheveux.",
    features: [
      "Pressée à froid",
      "Certifiée bio",
      "Origine Martinique",
      "Multi-usage (peau, cheveux, cuisine)",
      "Pot en verre recyclable",
    ],
    badge: "Bio",
    badgeColor: "bg-secondary",
    inStock: true,
    stockCount: 32,
    materials: ["100% Huile de Coco Bio"],
    createdAt: "2024-12-10",
  },
  {
    id: 3,
    name: "Collier Perles Africaines Traditionnel",
    price: 45.0,
    originalPrice: 60.0,
    rating: 4.7,
    reviews: 67,
    image: "/african-beaded-necklace-traditional-jewelry-colorf.jpg",
    images: ["/african-beaded-necklace-traditional-jewelry-colorf.jpg"],
    seller: {
      id: 3,
      name: "Heritage Crafts",
      avatar: "/african-craftsman-artisan-working-on-traditional-j.jpg",
      rating: 4.7,
      location: "Sénégal",
    },
    category: "Bijoux",
    subcategory: "Colliers",
    description:
      "Collier artisanal en perles de verre traditionnelles, fabriqué selon les techniques ancestrales du Sénégal. Chaque perle est unique et raconte une histoire.",
    features: [
      "Perles de verre artisanales",
      "Fabrication traditionnelle",
      "Longueur ajustable",
      "Fermoir en laiton",
      "Pièce unique",
    ],
    badge: "Promo",
    badgeColor: "bg-accent",
    inStock: true,
    stockCount: 8,
    colors: ["Multicolore", "Bleu/Blanc", "Rouge/Or"],
    materials: ["Perles de verre", "Laiton"],
    createdAt: "2024-12-08",
  },
  {
    id: 4,
    name: 'Dashiki Homme Premium "Roi d\'Afrique"',
    price: 65.0,
    rating: 4.6,
    reviews: 43,
    image: "/men-dashiki-shirt-african-traditional-clothing-col.jpg",
    images: ["/men-dashiki-shirt-african-traditional-clothing-col.jpg"],
    seller: {
      id: 1,
      name: "Amina Boutique",
      avatar: "/african-caribbean-woman-seller-boutique-owner-smil.jpg",
      rating: 4.9,
      location: "Paris, France",
    },
    category: "Mode Homme",
    subcategory: "Dashikis",
    description:
      "Dashiki premium en coton brodé, inspiré des tenues royales africaines. Parfait pour les occasions spéciales ou le quotidien élégant.",
    features: [
      "Coton premium brodé",
      "Motifs royaux traditionnels",
      "Coupe moderne confortable",
      "Broderies à la main",
      "Col rond traditionnel",
    ],
    badge: "Premium",
    badgeColor: "bg-primary",
    inStock: true,
    stockCount: 12,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Noir/Or", "Blanc/Rouge", "Bleu/Argent"],
    materials: ["100% Coton Brodé"],
    createdAt: "2024-12-12",
  },
]

export function getProductsByCategory(categorySlug: string, subcategorySlug?: string): Product[] {
  let filtered = mockProducts.filter((product) => {
    const category = categories.find((cat) => cat.slug === categorySlug)
    return category && product.category === category.name
  })

  if (subcategorySlug) {
    const category = categories.find((cat) => cat.slug === categorySlug)
    const subcategory = category?.subcategories.find((sub) => sub.slug === subcategorySlug)
    if (subcategory) {
      filtered = filtered.filter((product) => product.subcategory === subcategory.name)
    }
  }

  return filtered
}

export function getProductById(id: number): Product | undefined {
  return mockProducts.find((product) => product.id === id)
}

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase()
  return mockProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.category.toLowerCase().includes(lowercaseQuery) ||
      product.seller.name.toLowerCase().includes(lowercaseQuery),
  )
}

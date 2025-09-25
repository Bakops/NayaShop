import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductDetails } from "@/components/product-details"
import { RelatedProducts } from "@/components/related-products"
import { getProductById, mockProducts } from "@/lib/mock-data"
import { notFound } from "next/navigation"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const productId = Number.parseInt(params.id)
  const product = getProductById(productId)

  if (!product) {
    notFound()
  }

  // Get related products from same category
  const relatedProducts = mockProducts.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4)

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ProductDetails product={product} />
        <RelatedProducts products={relatedProducts} />
      </main>
      <Footer />
    </div>
  )
}

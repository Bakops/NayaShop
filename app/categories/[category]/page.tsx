import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductGrid } from "@/components/product-grid"
import { CategoryFilters } from "@/components/category-filters"
import { categories, getProductsByCategory } from "@/lib/mock-data"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

interface CategoryPageProps {
  params: {
    category: string
  }
  searchParams: {
    subcategory?: string
    sort?: string
    priceMin?: string
    priceMax?: string
  }
}

export default function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const category = categories.find((cat) => cat.slug === params.category)

  if (!category) {
    notFound()
  }

  const products = getProductsByCategory(params.category, searchParams.subcategory)
  const subcategory = searchParams.subcategory
    ? category.subcategories.find((sub) => sub.slug === searchParams.subcategory)
    : null

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Accueil</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/categories">Catégories</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{category.name}</BreadcrumbPage>
            </BreadcrumbItem>
            {subcategory && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{subcategory.name}</BreadcrumbPage>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>

        {/* Category Header */}
        <div className="mb-8">
          <div className="relative aspect-[3/1] rounded-2xl overflow-hidden mb-6">
            <img
              src={category.image || "/placeholder.svg"}
              alt={category.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <div className="text-white">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                  {subcategory ? subcategory.name : category.name}
                </h1>
                <p className="text-lg md:text-xl opacity-90 max-w-2xl">{category.description}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="text-sm">
                {products.length} produits trouvés
              </Badge>
              {subcategory && (
                <Badge variant="outline" className="text-sm">
                  {subcategory.name}
                </Badge>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <CategoryFilters category={category} currentSubcategory={searchParams.subcategory} />
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <ProductGrid products={products} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

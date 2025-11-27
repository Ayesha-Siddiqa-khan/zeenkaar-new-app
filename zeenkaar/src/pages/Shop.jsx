import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import products from '../data/products.json'
import ProductCard from '../components/ProductCard.jsx'
import CategoryChips from '../components/CategoryChips.jsx'
import DribbbleTabs from '../components/DribbbleTabs.jsx'
import FilterSidebar from '../components/FilterSidebar.jsx'
import FiltersButton from '../components/FiltersButton.jsx'
import SearchBar from '../components/SearchBar.jsx'

const CATEGORY_OPTIONS = ['Trending', 'Women', 'Men', 'Kids', 'Accessories', 'All']
const TAB_OPTIONS = ['All Products', 'Clothing', 'Accessories', 'Shoes', 'Bags', 'Kids', 'Trending']

const fadeContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}
const fadeItem = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
}

function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('Trending')
  const [activeTab, setActiveTab] = useState('All Products')
  const [sideFilter, setSideFilter] = useState('All')
  const [favorites, setFavorites] = useState(() => new Set())
  const [query, setQuery] = useState('')
  const [showSidebar, setShowSidebar] = useState(false)

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const visibleProducts = useMemo(() => {
    let filtered = products

    // Top tabs filter
    if (activeTab !== 'All Products') {
      if (activeTab === 'Trending') {
        filtered = [...filtered].sort((a, b) => b.price - a.price)
      } else {
        filtered = filtered.filter((p) => p.category === activeTab)
      }
    }

    // Chips filter
    if (selectedCategory !== 'All') {
      if (selectedCategory === 'Trending') {
        filtered = [...filtered].sort((a, b) => b.price - a.price)
      } else if (selectedCategory === 'New Arrivals') {
        filtered = filtered.slice(0, 8)
      } else {
        filtered = filtered.filter((p) => p.category === selectedCategory)
      }
    }

    // Sidebar filter
    if (sideFilter !== 'All') {
      filtered = filtered.filter((p) => p.category === sideFilter)
    }

    // Search
    if (query.trim()) {
      const q = query.toLowerCase()
      filtered = filtered.filter(
        (p) => p.title.toLowerCase().includes(q) || p.description?.toLowerCase().includes(q),
      )
    }

    return filtered
  }, [activeTab, selectedCategory, sideFilter, query])

  return (
    <section className="mx-auto flex max-w-[1600px] gap-6 px-3 sm:px-4 lg:px-6">
      {/* Sidebar */}
      <div className="hidden w-64 shrink-0 lg:block">
        <FilterSidebar active={sideFilter} onChange={setSideFilter} />
      </div>

      {/* Main content */}
      <div className="flex-1 space-y-6">
        <div className="rounded-3xl bg-white p-6 shadow-lg ring-1 ring-slate-200">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="md:flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">
                Shop
              </p>
              <h1 className="text-4xl font-bold text-[#111111] leading-tight">Discover the Edit</h1>
              <p className="mt-2 text-sm text-slate-600">
                Dribbble-style gallery: soft cards, hover zoom, crisp icons, premium spacing.
              </p>
            </div>
            <div className="flex w-full items-center gap-3 md:w-auto md:flex-1">
              <SearchBar value={query} onChange={setQuery} placeholder="Search products" />
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <FiltersButton onClick={() => setShowSidebar(true)} />
                    {/* Mobile Sidebar Overlay */}
                    {showSidebar && (
                      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 lg:hidden">
                        <div className="relative">
                          <FilterSidebar active={sideFilter} onChange={setSideFilter} />
                          <button
                            className="absolute top-2 right-2 rounded-full bg-slate-200 px-2 py-1 text-xs font-bold text-slate-700 hover:bg-slate-300"
                            onClick={() => setShowSidebar(false)}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    )}
              <DribbbleTabs tabs={TAB_OPTIONS} active={activeTab} onChange={setActiveTab} />
            </div>
            <CategoryChips
              categories={CATEGORY_OPTIONS}
              active={selectedCategory}
              onChange={setSelectedCategory}
            />
          </div>
        </div>

        <motion.div
          className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
          initial="hidden"
          animate="show"
          variants={fadeContainer}
        >
          {visibleProducts.map((product) => (
            <motion.div key={product.id} variants={fadeItem}>
              <ProductCard
                {...product}
                isFavorite={favorites.has(product.id)}
                onToggleFavorite={toggleFavorite}
                compact
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Shop

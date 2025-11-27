import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import products from '../data/products.json'
import ProductCard from '../components/ProductCard.jsx'
import CategoryChips from '../components/CategoryChips.jsx'
import SearchBar from '../components/SearchBar.jsx'

const CATEGORY_OPTIONS = ['Trending', 'Women', 'Men', 'Kids', 'Accessories', 'All']

const fadeContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}
const fadeItem = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
}

function Home() {
  const [selectedCategory, setSelectedCategory] = useState('Trending')
  const [favorites, setFavorites] = useState(() => new Set())
  const [query, setQuery] = useState('')

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const featured = products[0]

  const filteredProducts = useMemo(() => {
    let list = products
    if (selectedCategory !== 'All') {
      if (selectedCategory === 'Trending') list = [...products].sort((a, b) => b.price - a.price).slice(0, 8)
      else list = products.filter((p) => p.category === selectedCategory)
    }
    if (query.trim()) {
      const q = query.toLowerCase()
      list = list.filter(
        (p) => p.title.toLowerCase().includes(q) || p.description?.toLowerCase().includes(q),
      )
    }
    return list
  }, [selectedCategory, query])

  return (
    <motion.div
      className="space-y-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } }}
    >
      {/* Hero */}
      <section className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#2a1f55] via-[#4a2c7a] to-[#f3b5d4] shadow-xl ring-1 ring-slate-200 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(88,60,150,0.22),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(243,181,212,0.24),transparent_30%)]" />
        <div className="relative mx-auto flex max-w-[1300px] flex-col gap-8 px-3 py-10 sm:px-4 lg:px-6 lg:py-12">
          <div className="grid items-center gap-8 lg:grid-cols-[0.45fr_0.55fr]">
            <div className="space-y-6">
              <motion.span
                initial="hidden"
                animate="show"
                variants={fadeItem}
                className="inline-flex items-center rounded-full bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-rose-600 shadow-sm ring-1 ring-rose-100"
              >
                New Season • Zeenkaar
              </motion.span>
              <motion.h1
                initial="hidden"
                animate="show"
                variants={fadeItem}
                className="text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl"
              >
                Bold fashion, curated with Dribbble-level polish
              </motion.h1>
              <motion.p
                initial="hidden"
                animate="show"
                variants={fadeItem}
                className="max-w-2xl text-lg text-white/80"
              >
                Minimal cards, soft gradients, and hover finesse—discover premium edits designed to feel like a Dribbble gallery.
              </motion.p>
              <motion.div
                initial="hidden"
                animate="show"
                variants={fadeItem}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/shop"
                  className="rounded-full bg-black px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-lg transition duration-200 hover:-translate-y-1 hover:bg-[#111111]/90 hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
                >
                  Shop Now
                </Link>
                <Link
                  to="/about"
                  className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#111111] shadow-sm transition duration-200 hover:-translate-y-1 hover:bg-[#f6f6f6] hover:shadow-lg"
                >
                  About Zeenkaar
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, delay: 0.1 } }}
              className="relative"
            >
              <div className="absolute -left-6 -top-8 h-24 w-24 rounded-full bg-white/60 blur-3xl" />
              <div className="absolute -right-8 -bottom-10 h-28 w-28 rounded-full bg-rose-200/50 blur-3xl" />
              <div className="relative overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_24px_60px_rgba(0,0,0,0.14)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(0,0,0,0.18)]">
                <img
                  src={featured?.image}
                  alt={featured?.title}
                  className="h-[420px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[460px] lg:h-[500px]"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search + Filters */}
      <section className="rounded-3xl bg-[#ffeaf3] p-6 shadow-lg ring-1 ring-[#f7cde0]">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full max-w-xl">
            <SearchBar value={query} onChange={setQuery} placeholder="Search products" />
          </div>
          <CategoryChips
            categories={CATEGORY_OPTIONS}
            active={selectedCategory}
            onChange={setSelectedCategory}
          />
        </div>
      </section>

      {/* Product grid */}
      <motion.section
        className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
        initial="hidden"
        animate="show"
        variants={fadeContainer}
      >
        {filteredProducts.map((product) => (
          <motion.div key={product.id} variants={fadeItem}>
            <ProductCard
              {...product}
              isFavorite={favorites.has(product.id)}
              onToggleFavorite={toggleFavorite}
              compact
            />
          </motion.div>
        ))}
      </motion.section>
    </motion.div>
  )
}

export default Home

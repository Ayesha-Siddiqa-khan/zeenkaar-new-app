import { motion, AnimatePresence } from 'framer-motion'
import { X, Heart, ShoppingCart } from 'lucide-react'

const backdrop = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

const modal = {
  hidden: { opacity: 0, scale: 0.96, y: 8 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.2, ease: 'easeOut' } },
  exit: { opacity: 0, scale: 0.96, y: 8, transition: { duration: 0.15 } },
}

function ProductModal({ open, onClose, product, onAddToCart, onToggleFavorite, isFavorite }) {
  if (!product) return null

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm px-4"
          initial="hidden"
          animate="show"
          exit="hidden"
          variants={backdrop}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-3xl overflow-hidden rounded-[28px] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.25)] ring-1 ring-slate-200"
            variants={modal}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <div className="grid gap-0 md:grid-cols-2">
              <div className="h-full bg-[#f6f6f6]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col gap-4 p-6 md:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">
                  Zeenkaar
                </p>
                <h2 className="text-2xl font-bold text-[#111111] leading-tight">{product.title}</h2>
                <p className="text-lg font-semibold text-[#111111]">
                  Rs. {product.price?.toLocaleString()}
                </p>
                <p className="text-sm text-slate-700 leading-relaxed">{product.description}</p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    onClick={() => onAddToCart?.(product)}
                    className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-black/90"
                  >
                    <ShoppingCart size={16} />
                    Add to cart
                  </button>
                  <button
                    onClick={() => onToggleFavorite?.(product.id)}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-rose-200 hover:bg-rose-50"
                  >
                    <Heart
                      size={16}
                      className={isFavorite ? 'fill-rose-500 text-rose-500' : 'text-slate-700'}
                    />
                    Wishlist
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProductModal

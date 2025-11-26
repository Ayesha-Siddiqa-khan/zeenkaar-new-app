import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Heart, ShoppingCart } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'

/**
 * Dribbble-style product card
 * Props: { id, title, image, price, isFavorite?, onToggleFavorite?, onAddToCart? }
 */
function ProductCard({
  id,
  title,
  image,
  price,
  isFavorite = false,
  onToggleFavorite,
  onAddToCart,
}) {
  const { addToCart } = useCart()

  const handleAdd = () =>
    onAddToCart ? onAddToCart({ id, title, image, price }) : addToCart({ id, title, image, price }, 1)

  const handleFav = () => onToggleFavorite && onToggleFavorite(id)

  return (
    <motion.div
      whileHover={{ translateY: -6, transition: { duration: 0.2 } }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100"
    >
      <div className="overflow-hidden rounded-xl bg-[#f6f6f6]">
        <Link to={`/product/${id}`}>
          <img
            src={image}
            alt={title}
            className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </Link>
      </div>
      <div className="mt-4 flex flex-1 flex-col space-y-2">
        <div className="flex items-start justify-between gap-2">
          <Link
            to={`/product/${id}`}
            className="text-lg font-semibold text-[#111111] transition hover:text-rose-500"
          >
            {title}
          </Link>
          <div className="flex items-center gap-2">
            <motion.button
              onClick={handleFav}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-rose-200 bg-rose-50 text-rose-500 transition hover:-translate-y-0.5 hover:border-rose-300 hover:bg-rose-100"
            aria-label="Wishlist"
            type="button"
            whileTap={{ scale: 0.94 }}
          >
            <Heart
                size={18}
                className={isFavorite ? 'fill-rose-500 text-rose-500' : 'text-slate-700'}
              />
            </motion.button>
            <motion.button
              onClick={handleAdd}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:-translate-y-0.5 hover:border-rose-200 hover:bg-rose-50"
              aria-label="Add to cart"
              type="button"
              whileTap={{ scale: 0.94 }}
            >
              <ShoppingCart size={18} />
            </motion.button>
          </div>
        </div>
        <div className="flex items-center justify-between pt-1 mt-auto">
          <p className="text-base font-semibold text-[#111111]">Rs. {price?.toLocaleString()}</p>
          <span className="text-xs uppercase tracking-[0.12em] text-rose-500">Zeenkaar</span>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductCard

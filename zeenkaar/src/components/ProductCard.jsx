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
      whileHover={{ translateY: -6, transition: { duration: 0.25 } }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-[#FFF7FB] p-4 shadow-[0_4px_16px_rgba(0,0,0,0.08)] ring-1 ring-[#F0D9E8] transition duration-200 hover:shadow-[0_10px_26px_rgba(0,0,0,0.12)]"
    >
      <div className="overflow-hidden rounded-xl bg-[#fdf4fa] ring-1 ring-[#f3d6e7]/60">
        <Link to={`/product/${id}`}>
          <img
            src={image}
            alt={title}
            className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </Link>
      </div>
      <div className="mt-3 flex flex-1 flex-col space-y-2">
        <div className="flex items-start justify-between gap-2">
          <Link
            to={`/product/${id}`}
            className="text-lg font-semibold text-[#111111] transition hover:text-[#c04f8a]"
          >
            {title}
          </Link>
          <div className="flex items-center gap-2">
            <motion.button
              onClick={handleFav}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#f0d9e8] bg-white/70 text-[#c04f8a] shadow-sm transition hover:-translate-y-0.5 hover:border-[#e7c5dd] hover:bg-white"
              aria-label="Wishlist"
              type="button"
              whileTap={{ scale: 0.94 }}
            >
              <Heart
                size={18}
                className={isFavorite ? 'fill-[#c04f8a] text-[#c04f8a]' : 'text-[#c04f8a]'}
              />
            </motion.button>
            <motion.button
              onClick={handleAdd}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#f0d9e8] bg-white/80 text-[#b13b7d] shadow-sm transition hover:-translate-y-0.5 hover:border-[#e7c5dd] hover:bg-white"
              aria-label="Add to cart"
              type="button"
              whileTap={{ scale: 0.94 }}
            >
              <ShoppingCart size={18} />
            </motion.button>
          </div>
        </div>
        <div className="mt-auto flex items-center justify-between pt-1">
          <p className="text-base font-semibold text-[#111111]">Rs. {price?.toLocaleString()}</p>
          <span className="text-xs uppercase tracking-[0.12em] text-[#c04f8a]">Zeenkaar</span>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductCard

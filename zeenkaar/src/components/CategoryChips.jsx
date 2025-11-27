import { motion } from 'framer-motion'

const DEFAULT_CATEGORIES = ['Trending', 'Women', 'Men', 'Kids', 'Accessories']

function CategoryChips({ categories = DEFAULT_CATEGORIES, active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2 md:gap-3">
      {categories.map((cat) => {
        const isActive = active === cat
        return (
          <motion.button
            key={cat}
            onClick={() => onChange?.(cat)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
              isActive
                ? 'border-transparent bg-gradient-to-r from-[#f500b8] to-[#ff8fd1] text-white shadow-[0_10px_30px_rgba(245,0,184,0.25)]'
                : 'border-transparent bg-gradient-to-r from-[#f500b8] to-[#ff8fd1] text-white shadow-[0_6px_16px_rgba(245,0,184,0.25)] hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(245,0,184,0.3)]'
            }`}
            type="button"
            whileTap={{ scale: 0.95 }}
          >
            {cat}
          </motion.button>
        )
      })}
    </div>
  )
}

export default CategoryChips

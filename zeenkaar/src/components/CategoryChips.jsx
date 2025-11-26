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
                ? 'border-black bg-black text-white'
                : 'border-slate-200 bg-white text-slate-700 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50'
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

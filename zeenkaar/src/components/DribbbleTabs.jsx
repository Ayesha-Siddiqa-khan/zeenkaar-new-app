import { motion } from 'framer-motion'

const DEFAULT_TABS = [
  'All Products',
  'Women',
  'Men',
  'Kids',
  'New Arrivals',
  'Trending',
]

function DribbbleTabs({ tabs = DEFAULT_TABS, active, onChange }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {tabs.map((tab) => {
        const isActive = tab === active
        return (
          <motion.button
            key={tab}
            onClick={() => onChange?.(tab)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              isActive
                ? 'bg-gradient-to-r from-[#f500b8] to-[#ff8fd1] text-white shadow-[0_10px_30px_rgba(245,0,184,0.25)]'
                : 'border border-[#e6e7f3] bg-white text-[#4f5a73] hover:text-black'
            }`}
            whileTap={{ scale: 0.95 }}
            whileHover={isActive ? { scale: 1.03 } : {}}
          >
            {tab}
          </motion.button>
        )
      })}
    </div>
  )
}

export default DribbbleTabs

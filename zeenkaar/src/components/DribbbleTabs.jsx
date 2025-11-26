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
                ? 'bg-[#f2f2f2] text-[#111111]'
                : 'text-slate-700 hover:text-black'
            }`}
            whileTap={{ scale: 0.95 }}
          >
            {tab}
          </motion.button>
        )
      })}
    </div>
  )
}

export default DribbbleTabs

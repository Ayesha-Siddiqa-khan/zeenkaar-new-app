function CategoryFilter({
  options = ['All', 'Women', 'Men', 'Kids'],
  selected,
  onChange,
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((category) => {
        const active = selected === category
        return (
          <button
            key={category}
            onClick={() => onChange(category)}
            className={`relative overflow-hidden rounded-full border px-4 py-2 text-sm font-semibold transition ${
              active
                ? 'border-rose-200 bg-rose-500 text-white shadow-md'
                : 'border-slate-200 bg-white text-slate-700 hover:-translate-y-0.5 hover:border-rose-200 hover:bg-rose-50'
            }`}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default CategoryFilter

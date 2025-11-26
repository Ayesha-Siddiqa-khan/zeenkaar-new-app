import { useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, Sparkles } from 'lucide-react'
import products from '../data/products.json'
import { useCart } from '../context/CartContext.jsx'
import ProductCard from '../components/ProductCard.jsx'

function ProductDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()

  const product = useMemo(() => products.find((p) => p.id === id), [id])

  const related = useMemo(() => {
    if (!product) return []
    const sameCategory = products.filter(
      (p) => p.category === product.category && p.id !== product.id,
    )
    return sameCategory.sort(() => 0.5 - Math.random()).slice(0, 4)
  }, [product])

  if (!product) {
    return (
      <div className="rounded-2xl bg-white p-8 shadow ring-1 ring-slate-200">
        <p className="text-lg font-semibold text-[#111111]">Product not found.</p>
        <button
          onClick={() => navigate('/shop')}
          className="mt-4 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#111111] transition hover:-translate-y-0.5 hover:bg-[#f6f6f6]"
        >
          Back to shop
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-12">
      <section className="grid gap-10 rounded-3xl bg-white p-6 shadow-lg ring-1 ring-slate-200 lg:grid-cols-2">
        <div className="space-y-4">
          <button
            onClick={() => navigate(-1)}
            className="flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold uppercase tracking-[0.15em] text-rose-500 transition hover:-translate-y-0.5 hover:bg-rose-50"
          >
            <ArrowLeft size={16} />
            Back
          </button>
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-[#f6f6f6] shadow">
            <img
              src={product.image}
              alt={product.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.15em] text-rose-500">
            <span>{product.category}</span>
          </div>
          <h1 className="text-3xl font-bold text-[#111111]">{product.title}</h1>
          <p className="text-xl font-semibold text-[#111111]">
            Rs. {product.price.toLocaleString()}
          </p>
          <p className="text-slate-700 leading-relaxed">{product.description}</p>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => addToCart(product, 1)}
              className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#111111]/90"
            >
              <Sparkles size={16} />
              Add to cart
            </button>
            <button
              onClick={() => navigate('/shop')}
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#111111] transition hover:-translate-y-1 hover:bg-[#f6f6f6]"
            >
              Continue shopping
            </button>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">
              You may also like
            </p>
            <h2 className="text-2xl font-bold text-[#111111]">Similar picks</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

export default ProductDetails
